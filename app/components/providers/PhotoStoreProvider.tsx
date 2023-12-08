import AVAILABLE_PHOTOS from "assets/photos"
import React, { PropsWithChildren, useContext, useMemo, useState } from "react"
import { PhotoObjType } from "types"

type PhotoStoreContextType = {
  availablePhotos: PhotoObjType[]
  userPhotos: PhotoObjType[]
  addUserPhotos: () => void
  removeUserPhotos: () => void

  toggleSelectionMode: () => void
  setSelectionMode: (val: boolean) => void
  selectionMode: boolean
  toggleSelectedItem: (item: PhotoObjType) => void
  selectedItems: PhotoObjType[]
}

const PhotoStoreContext = React.createContext<PhotoStoreContextType>(null)

export const PhotoStoreProvider = ({ children }: PropsWithChildren) => {
  // USER PHOTOS MGMT
  const [userPhotos, setUserPhotos] = useState<PhotoObjType[]>([])

  // PHOTO SELECTION
  const [selectionMode, setSelectionMode] = useState(false)
  const [selectedItems, setSelectedItems] = useState<PhotoObjType[]>([])

  const addUserPhotos = () => {
    setUserPhotos((prev) => {
      const newState = [...new Set([...prev, ...selectedItems])]
      return newState
    })
    setSelectedItems([])
    setSelectionMode(false)
  }

  const removeUserPhotos = () => {
    setUserPhotos((prev) => {
      const newState = [...prev].filter((id) => !selectedItems.includes(id))
      return newState
    })
    setSelectedItems([])
    setSelectionMode(false)
  }

  const toggleSelectionMode = () => {
    if (selectionMode) {
      setSelectedItems([])
    }

    setSelectionMode(!selectionMode)
  }

  const toggleSelectedItem = (item: PhotoObjType) => {
    setSelectedItems((prev) => {
      const isSelected = prev.some((selectedItem) => selectedItem.id === item.id)
      return isSelected
        ? prev.filter((selectedItem) => selectedItem.id !== item.id)
        : [...prev, item]
    })
  }

  const contextValue = useMemo(
    () => ({
      availablePhotos: AVAILABLE_PHOTOS,
      userPhotos,
      addUserPhotos,
      removeUserPhotos,
      toggleSelectionMode,
      toggleSelectedItem,
      setSelectionMode,
      selectionMode,
      selectedItems,
    }),
    [userPhotos, selectionMode, selectedItems],
  )

  return <PhotoStoreContext.Provider value={contextValue}>{children}</PhotoStoreContext.Provider>
}

export const usePhotoStore = () => {
  const context = useContext(PhotoStoreContext)

  if (context === undefined) {
    throw new Error("usePhotoStore must be used within a PhotoStoreProvider")
  }

  return context
}
