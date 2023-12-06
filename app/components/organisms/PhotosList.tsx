import { Alert, FlatList, View, ViewProps, ViewStyle } from "react-native"
import { PhotoItem } from "../molecules/PhotoItem"
import { usePhotoStore } from "../providers/PhotoStoreProvider"
import { EmptyList } from "../molecules/EmptyList"
import { PhotoObjType } from "types"

/**
 * This component should be responsible for rendering a
 * set of photos in a 2-column grid. Remember that it will
 * be used on three different screens, two of which require
 * the ability to select photos from those which are currently
 * being displayed.
 */
export type PhotoListProps = ViewProps & {
  photos: PhotoObjType[]
  action: "view" | "add" | "remove"
}

export function PhotosList({ photos, action, ...props }: PhotoListProps) {
  const { addUserPhotos, removeUserPhotos } = usePhotoStore()

  const handlePhotoTap = (item: PhotoObjType) => {
    if (action === "view") {
      Alert.alert("Not built yet")
      return
    }

    if (action === "add") {
      addUserPhotos([item])
      return
    }

    if (action === "remove") {
      removeUserPhotos([item])
      return
    }
  }

  return (
    <View {...props}>
      <FlatList
        data={photos}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 16, backgroundColor: "pink" }} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <PhotoItem onPress={() => handlePhotoTap(item)} {...item} />}
        contentContainerStyle={$containerStyle}
        columnWrapperStyle={$columnWrapperStyle}
        ListEmptyComponent={() => <EmptyList notice="You haven't added photos yet" />}
      />
    </View>
  )
}

const $columnWrapperStyle: ViewStyle = {
  justifyContent: "space-between",
  gap: 16,
}

const $containerStyle: ViewStyle = {
  paddingTop: 96,
  paddingBottom: 16,
  gap: 16,
}
