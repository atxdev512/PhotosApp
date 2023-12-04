import { Meta, StoryObj } from "@storybook/react-native"
import { Text, TextProps } from "../../app/components"
import { View } from "react-native"

const meta: Meta<TextProps> = {
  title: "Text",
  component: Text,
  args: {
    text: "Hello world!",
  },
}

export default meta

type Story = StoryObj<TextProps>

export const Default: Story = {
  decorators: [
    (Story) => (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
          width: "100%",
          flex: 1,
        }}
      >
        <Story />
      </View>
    ),
  ],
}
