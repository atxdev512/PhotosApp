import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, ButtonProps, PhotosList, Screen, ScreenProps } from "app/components"
import { AppStackParamList } from "app/navigators"
import { spacing } from "app/theme"
import { useState } from "react"
import { View, ViewStyle } from "react-native"

export function EditPhotosScreen({
  navigation,
  route,
}: NativeStackScreenProps<AppStackParamList, "Photos">) {
  const [isDeleting, setIsDeleting] = useState(false)

  const navigateToAddPhotos = () => {
    navigation.navigate("AddPhotos")
  }

  return (
    <Screen contentContainerStyle={$screen} safeAreaEdges={["top"]}>
      <View style={$innerContainer}>
        <PhotosList style={$photosList} />

        <View style={$buttons}>
          <Button
            style={$button}
            preset={isDeleting ? "reversed" : "default"}
            tx={isDeleting ? "editPhotosScreen.cancel" : "editPhotosScreen.select"}
            onPress={() => setIsDeleting(!isDeleting)}
          />
          <Button
            style={$button}
            preset={isDeleting ? "danger" : "default"}
            tx={isDeleting ? "editPhotosScreen.delete" : "editPhotosScreen.add"}
            onPress={isDeleting ? undefined : navigateToAddPhotos}
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

const $photosList: ViewStyle = {
  flex: 1,
}

const $buttons: ViewStyle = {
  flexDirection: "row",
  gap: spacing.md,
  marginBottom: spacing.xl,
}

const $button: ButtonProps["style"] = {
  flex: 1,
}
