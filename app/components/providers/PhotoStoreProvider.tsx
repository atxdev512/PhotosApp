import React, { PropsWithChildren, useContext, useMemo, useState } from "react"
import ImageView from "react-native-image-viewing"
import AVAILABLE_PHOTOS from "assets/photos"
import { PhotoObjType } from "types"
import { ImageSource } from "react-native-image-viewing/dist/@types"
import { useLocalStorage } from "../hooks/useLocalStorage"

type PhotoStoreContextType = {
  availablePhotos: PhotoObjType[]
  userPhotos: PhotoObjType[]
  addUserPhotos: () => void
  removeUserPhotos: () => void

  openViewer: (idx?: number) => void

  toggleSelectionMode: () => void
  setSelectionMode: (val: boolean) => void
  selectionMode: boolean
  toggleSelectedItem: (item: PhotoObjType) => void
  selectedItems: PhotoObjType[]
}

const PhotoStoreContext = React.createContext<PhotoStoreContextType>(null)

export const PhotoStoreProvider = ({ children }: PropsWithChildren) => {
  // USER PHOTOS MGMT
  const [userPhotos, setUserPhotos] = useLocalStorage<PhotoObjType[]>("userPhotos", [])

  // PHOTO SELECTION
  const [selectionMode, setSelectionMode] = useState(false)
  const [selectedItems, setSelectedItems] = useState<PhotoObjType[]>([])

  // PHOTO VIEWER
  const [viewerIdx, setViewerIdx] = useState<number>(null)

  const userPhotosForViewer = useMemo(
    () => userPhotos.map((item) => item.photo as ImageSource),
    [userPhotos],
  )

  const addUserPhotos = () => {
    setUserPhotos([...new Set([...userPhotos, ...selectedItems])])
    setSelectedItems([])
    setSelectionMode(false)
  }

  const removeUserPhotos = () => {
    setUserPhotos([...userPhotos].filter((id) => !selectedItems.includes(id)))
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

  const openViewer = (idx = 0) => {
    setViewerIdx(idx)
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
      openViewer,
    }),
    [userPhotos, selectionMode, selectedItems],
  )

  return (
    <PhotoStoreContext.Provider value={contextValue}>
      <ImageView
        images={userPhotosForViewer}
        imageIndex={viewerIdx}
        visible={viewerIdx !== null}
        onRequestClose={() => setViewerIdx(null)}
        swipeToCloseEnabled
        doubleTapToZoomEnabled
      />
      {children}
    </PhotoStoreContext.Provider>
  )
}

export const usePhotoStore = () => {
  const context = useContext(PhotoStoreContext)

  if (context === undefined) {
    throw new Error("usePhotoStore must be used within a PhotoStoreProvider")
  }

  return context
}
