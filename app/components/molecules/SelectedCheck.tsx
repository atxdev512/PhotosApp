import { View, ViewStyle } from "react-native"
import { Icon } from "../atoms"
import { colors, spacing } from "app/theme"

export const SelectedCheck = () => (
  <View style={$container}>
    <Icon icon="check" color="#fff" />
  </View>
)

const $container: ViewStyle = {
  backgroundColor: colors.selectedCheckBackground,
  width: 32,
  height: 32,
  borderRadius: 32,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  bottom: spacing.xs,
  right: spacing.xs,
  zIndex: 2,
  borderColor: "#fff",
  borderWidth: 2,
}
