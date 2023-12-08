import React, { PropsWithChildren, useContext, useMemo, useState } from "react"
import ImageView from "react-native-image-viewing"
import AVAILABLE_PHOTOS from "assets/photos"
import { PhotoObjType } from "types"
import { ImageSource } from "react-native-image-viewing/dist/@types"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import api from "app/api"

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
  const queryClient = useQueryClient()

  // Fetch user photos
  const { data: userPhotosData = [] } = useQuery<PhotoObjType[], Error>({
    queryKey: ["userPhotos"],
    queryFn: api.getSaved,
  })

  // Selection mgmt
  const [selectionMode, setSelectionMode] = useState(false)
  const [selectedItems, setSelectedItems] = useState<PhotoObjType[]>([])

  // Photo viewer
  const [viewerIdx, setViewerIdx] = useState<number>(null)

  const userPhotosForViewer = useMemo(
    () => userPhotosData.map((item) => item.photo as ImageSource),
    [userPhotosData],
  )

  const { mutate: addUserPhotosMutation } = useMutation({
    mutationFn: api.add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userPhotos"] })
      setSelectedItems([])
      setSelectionMode(false)
    },
  })

  const { mutate: removeUserPhotosMutation } = useMutation({
    mutationFn: api.remove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userPhotos"] })
      setSelectedItems([])
      setSelectionMode(false)
    },
  })

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

  useMemo(() => {
    queryClient.setQueryData(["userPhotos"], userPhotosData)
  }, [userPhotosData])

  const contextValue = useMemo(
    () => ({
      availablePhotos: AVAILABLE_PHOTOS,
      userPhotos: userPhotosData,
      addUserPhotos: () => addUserPhotosMutation(selectedItems.map((e) => e.id)),
      removeUserPhotos: () => removeUserPhotosMutation(selectedItems.map((e) => e.id)),
      toggleSelectionMode,
      toggleSelectedItem,
      setSelectionMode,
      selectionMode,
      selectedItems,
      openViewer,
    }),
    [userPhotosData, selectionMode, selectedItems],
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
