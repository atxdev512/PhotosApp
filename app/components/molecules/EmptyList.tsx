import { View, ViewStyle } from "react-native"
import { Text } from "../atoms/Text"
import { Icon } from "../atoms/Icon"
import { Spacer } from "../atoms/Spacer"

export type EmptyListProps = {
  notice?: string
}

export const EmptyList = ({ notice = "Nothing to see here" }: EmptyListProps) => (
  <View style={$container}>
    <Icon size={128} color="#a2a2a2" icon="empty" />
    <Spacer />
    <Text>{notice}</Text>
  </View>
)

const $container: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}
