import { type NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, PhotosList, Screen, type ScreenProps } from "app/components"
import { usePhotoStore } from "app/components/providers/PhotoStoreProvider"
import { type AppStackParamList } from "app/navigators"
import { spacing } from "app/theme"
import { useEffect } from "react"
import { Alert, View, type ViewStyle } from "react-native"
import { PhotoObjType } from "types"

export function AddPhotosScreen({
  navigation,
  route,
}: NativeStackScreenProps<AppStackParamList, "AddPhotos">) {
  const { availablePhotos, addUserPhotos, selectedItems, setSelectionMode, toggleSelectedItem } =
    usePhotoStore()

  const handleItemTap = (item: PhotoObjType) => {
    toggleSelectedItem(item)
  }

  const handleAddSelected = () => {
    addUserPhotos()
    if (navigation.canGoBack()) {
      navigation.goBack()
    }
  }

  useEffect(() => {
    setSelectionMode(true)
  }, [])

  return (
    <Screen contentContainerStyle={$screen} safeAreaEdges={["top"]}>
      <View style={$innerContainer}>
        <PhotosList
          onItemTap={handleItemTap}
          photos={availablePhotos}
          style={$photosList}
          mountInSelectionMode
        />
        <Button
          style={$buttonPadding}
          tx="addPhotosScreen.addSelected"
          disabled={selectedItems.length === 0}
          onPress={handleAddSelected}
        />
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

const $photosList: ViewStyle = {
  flex: 1,
}

const $buttonPadding: ViewStyle = {
  marginBottom: spacing.xl,
}
