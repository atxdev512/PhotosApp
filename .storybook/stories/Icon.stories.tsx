import { Meta, StoryObj } from "@storybook/react-native"
import { Icon, IconProps, iconRegistry } from "../../app/components"
import { View } from "react-native"

const meta: Meta<IconProps> = {
  title: "Icon",
  component: (props: IconProps) => <Icon {...props} size={20} />,
  args: {
    icon: "back",
  },
  argTypes: {
    icon: {
      label: "Icon",
      options: Object.keys(iconRegistry),
      control: { type: "radio" },
    },
  },
}

export default meta

type Story = StoryObj<IconProps>

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
