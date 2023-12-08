import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, ButtonProps, PhotosList, Screen, ScreenProps } from "app/components"
import { usePhotoStore } from "app/components/providers/PhotoStoreProvider"
import { AppStackParamList } from "app/navigators"
import { spacing } from "app/theme"
import { useEffect, useRef, useState } from "react"
import { Alert, View, ViewStyle } from "react-native"
import { PhotoObjType } from "types"

export function EditPhotosScreen({
  navigation,
  route,
}: NativeStackScreenProps<AppStackParamList, "Photos">) {
  const {
    userPhotos,
    selectionMode,
    toggleSelectionMode,
    setSelectionMode,
    toggleSelectedItem,
    removeUserPhotos,
    openViewer,
  } = usePhotoStore()

  const navigateToAddPhotos = () => {
    navigation.navigate("AddPhotos")
  }

  const handleItemTap = (item: PhotoObjType, idx: number) => {
    if (selectionMode) {
      toggleSelectedItem(item)
    } else {
      openViewer(idx)
    }
  }

  const handleRemoveSelected = () => {
    removeUserPhotos()
  }

  useEffect(() => {
    setSelectionMode(false)
  }, [])

  return (
    <Screen contentContainerStyle={$screen} safeAreaEdges={["top"]}>
      <View style={$innerContainer}>
        <PhotosList onItemTap={handleItemTap} photos={userPhotos} />
        <View style={$buttons}>
          <Button
            style={$button}
            preset={selectionMode ? "reversed" : "default"}
            tx={selectionMode ? "editPhotosScreen.cancel" : "editPhotosScreen.select"}
            onPress={toggleSelectionMode}
          />
          <Button
            style={$button}
            preset={selectionMode ? "danger" : "default"}
            tx={selectionMode ? "editPhotosScreen.delete" : "editPhotosScreen.add"}
            onPress={selectionMode ? handleRemoveSelected : navigateToAddPhotos}
          />
        </View>
      </View>
    </Screen>
  )
}

const $screen: ScreenProps["contentContainerStyle"] = {
  flex: 1,
}

const $innerContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $buttons: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  marginBottom: spacing.xl,
}

const $button: ButtonProps["style"] = {
  flex: 1,
}
