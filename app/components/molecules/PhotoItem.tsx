import { Image, ImageStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native"
import { PhotoObjType } from "types"
import { SelectedCheck } from "./SelectedCheck"

type PhotoItemProps = TouchableOpacityProps &
  PhotoObjType & {
    selectionMode?: boolean
    selected?: boolean
  }

export const PhotoItem = ({
  id,
  photo,
  selectionMode = false,
  selected,
  ...props
}: PhotoItemProps) => {
  const $itemStyles = [$itemStyle]

  if (selectionMode && !selected) {
    $itemStyles.push($nonSelectedStyle)
  }

  return (
    <TouchableOpacity {...props} style={$itemStyles}>
      <Image style={$imageStyle} source={photo} />
      {selectionMode && selected && <SelectedCheck />}
    </TouchableOpacity>
  )
}

const $itemStyle: ViewStyle = {
  height: 160,
  flex: 0.5,
  borderRadius: 16,
  overflow: "hidden",

  // shadowColor: "#000",
  // shadowOffset: {
  //   width: 0,
  //   height: 2,
  // },
  // shadowOpacity: 0.25,
  // shadowRadius: 3.84,

  elevation: 5,
}

const $nonSelectedStyle: ViewStyle = {
  opacity: 0.8,
  transform: [{ scale: 0.85 }],
}

const $imageStyle: ImageStyle = {
  height: "100%",
  width: "100%",
}
