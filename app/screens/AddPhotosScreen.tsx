import { type NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, PhotosList, Screen, type ScreenProps } from "app/components"
import { type AppStackParamList } from "app/navigators"
import { spacing } from "app/theme"
import { useState } from "react"
import { View, type ViewStyle } from "react-native"

export function AddPhotosScreen({
  navigation,
  route,
}: NativeStackScreenProps<AppStackParamList, "AddPhotos">) {
  const [selectedPhotos, setSelectedPhotos] = useState<string[]>([])

  return (
    <Screen contentContainerStyle={$screen} safeAreaEdges={["top"]}>
      <View style={$innerContainer}>
        <PhotosList style={$photosList} />

        <Button
          style={$buttonPadding}
          tx="addPhotosScreen.addSelected"
          disabled={!selectedPhotos.length}
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
