import { Meta, StoryObj } from "@storybook/react-native"
import { Header, HeaderProps, Icon, IconProps, iconRegistry } from "../../app/components"
import { View } from "react-native"
import { colors } from "../../app/theme"

const meta: Meta<HeaderProps> = {
  title: "Header",
  component: Header,
  args: {
    title: "Header",
    leftIcon: "caretLeft",
    rightIcon: "menu",
  },
  argTypes: {
    leftIcon: {
      options: Object.keys(iconRegistry),
      control: { type: "radio" },
    },
    rightIcon: {
      options: Object.keys(iconRegistry),
      control: { type: "radio" },
    },
  },
}

export default meta

type Story = StoryObj<HeaderProps>

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
        <View style={{ width: "400px" }}>
          <Story />
        </View>
      </View>
    ),
  ],
}
