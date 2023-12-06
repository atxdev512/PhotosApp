import { spacing } from "app/theme"
import { View } from "react-native"

type SpacerProps = {
  size?: keyof typeof spacing
}

export const Spacer = ({ size = "md" }: SpacerProps) => (
  <View style={{ height: spacing[size], width: spacing[size] }} />
)
