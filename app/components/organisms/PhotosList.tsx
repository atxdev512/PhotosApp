import { View, ViewProps, ViewStyle } from "react-native"

/**
 * This component should be responsible for rendering a
 * set of photos in a 2-column grid. Remember that it will
 * be used on three different screens, two of which require
 * the ability to select photos from those which are currently
 * being displayed.
 */
export type PhotoListProps = ViewProps & {}

export function PhotosList({ ...props }: PhotoListProps) {
  return <View {...props}>{/* Do some stuff here to display the photos list. */}</View>
}
