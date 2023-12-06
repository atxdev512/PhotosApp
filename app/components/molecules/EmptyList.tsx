import { View, ViewStyle } from "react-native"
import { Text } from "../atoms/Text"
import { Icon } from "../atoms/Icon"

type EmptyListProps = {
  notice?: string
}

export const EmptyList = ({ notice = "Nothing to see here" }: EmptyListProps) => (
  <View style={$container}>
    <Icon size={128} color="#a2a2a2" icon="empty" />
    <Text>{notice}</Text>
  </View>
)

const $container: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
}
