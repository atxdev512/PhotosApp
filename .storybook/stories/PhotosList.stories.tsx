import React from "react"
import { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { PhotoListProps, PhotosList } from "../../app/components/organisms/PhotosList"
import AVAILABLE_PHOTOS from "../../assets/photos"

const meta: Meta<PhotoListProps> = {
  title: "PhotosList",
  component: PhotosList,
}

const fn = (item, idx) => {
  console.log("tapped", idx, item)
}

export default meta

type Story = StoryObj<PhotoListProps>

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
  args: {
    photos: AVAILABLE_PHOTOS,
    onItemTap: fn,
  },
}

export const EmptyState: Story = {
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
  args: {
    photos: [],
  },
}
