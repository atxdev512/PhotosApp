import React, { ForwardedRef, forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { FlatList, TouchableWithoutFeedbackProps, View, ViewProps, ViewStyle } from "react-native"
import { PhotoItem } from "../molecules/PhotoItem"
import { EmptyList } from "../molecules/EmptyList"
import { PhotoObjType } from "types"
import { usePhotoStore } from "../providers/PhotoStoreProvider"

export type PhotoListProps = ViewProps & {
  photos: PhotoObjType[]
  onItemTap?: (item: PhotoObjType, idx: number) => void
  mountInSelectionMode?: boolean
}

export const PhotosList = ({
  photos,
  onItemTap,
  mountInSelectionMode = false,
  ...props
}: PhotoListProps) => {
  const { selectedItems, selectionMode } = usePhotoStore()

  return (
    <View style={$parentContainerStyle} {...props}>
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 16, backgroundColor: "pink" }} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item, index }) => (
            <PhotoItem
              onPress={() => onItemTap(item, index)}
              selected={selectedItems.some((selectedItem) => selectedItem.id === item.id)}
              selectionMode={selectionMode}
              {...item}
            />
          )}
          contentContainerStyle={$listContainerStyle}
          columnWrapperStyle={$columnWrapperStyle}
        />
      ) : (
        <EmptyList notice="You haven't added photos yet" />
      )}
    </View>
  )
}

const $parentContainerStyle: ViewStyle = {
  flex: 1,
}

const $columnWrapperStyle: ViewStyle = {
  justifyContent: "space-between",
  gap: 16,
}

const $listContainerStyle: ViewStyle = {
  paddingTop: 96,
  paddingBottom: 16,
  gap: 16,
}
