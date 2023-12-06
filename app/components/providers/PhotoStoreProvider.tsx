import AVAILABLE_PHOTOS from "assets/photos"
import React, { useContext, useMemo, useState } from "react"
import { PhotoObjType } from "types"

type PhotoStoreContextType = {
  availablePhotos: PhotoObjType[]
  userPhotos: PhotoObjType[]
  addUserPhotos: (photosIds: PhotoObjType[]) => void
  removeUserPhotos: (photosIds: PhotoObjType[]) => void
}

const PhotoStoreContext = React.createContext<PhotoStoreContextType>(null)

export const PhotoStoreProvider = ({ children }) => {
  const [userPhotos, setUserPhotos] = useState<PhotoObjType[]>([])

  const addUserPhotos = (photosIds: PhotoObjType[]) => {
    setUserPhotos((prev) => {
      const newState = [...new Set([...prev, ...photosIds])]

      return newState
    })
  }

  const removeUserPhotos = (idsToRemove: PhotoObjType[]) => {
    setUserPhotos((prev) => {
      const newState = [...prev].filter((id) => !idsToRemove.includes(id))

      return newState
    })
  }

  const contextValue = useMemo(
    () => ({
      availablePhotos: AVAILABLE_PHOTOS,
      userPhotos,
      addUserPhotos,
      removeUserPhotos,
    }),
    [userPhotos],
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
