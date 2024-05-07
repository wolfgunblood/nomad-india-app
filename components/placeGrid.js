import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MasonryFlashList } from "@shopify/flash-list";
import { wp, hp, getColumnCount } from "../helpers/common";
import PlaceCard from './placeCard';


const PlaceGrid = ({ places }) => {

    const columns = getColumnCount();

    return (
        <View style={styles.container}>
            <MasonryFlashList
                data={places}
                numColumns={columns}
                initialNumToRender={1000}
                contentContainerStyle={styles.listContainerStyle}
                renderItem={({ item,index }) => <PlaceCard item={item} columns={columns} index={index}/>}
                estimatedItemSize={200}
            />
        </View>
    )
}

export default PlaceGrid

const styles = StyleSheet.create({
    container: {
        minHeight: 3,
        width: wp(100),
    },
    listContainerStyle: {
        paddingHorizontal: wp(4)
    }
})