import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { getImageSize, wp, hp } from '../helpers/common';
import { theme } from "../constants/theme"
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';


const PlaceCard = ({ item, index, columns }) => {

    // const isLastInRow = () => {
    //     console.log((index+1) % columns)
    //     return (index+1) % columns === 0;
    // }
    // const getImageHeight = () => {
    //     let { imageHeight: height, imageWidth: width } = item;
    //     return { height: getImageSize(height, width) }
    // }
    // console.log(item?.webformatURL)
    const router = useRouter()

    let isNotFound = item?.photoUrl === "No image found";
    console.log(isNotFound)
    if (isNotFound)
        return (
            <>
            </>
        )
    // let check = "https://pixabay.com/get/gbaa03eb37e1b28d6ac2e72ce7875a91d03d0ad5760e60ba4f9db4d57ef033c9619763961ab3acb65365b7aafced592193ba90f330a5a8df7f24780f0ae0f2735_640.jpg"
    return (
        <TouchableOpacity
            onPress={() => { router.push({ pathname: '/destination', params: item}) }}
            style={[styles.card, { width: wp(44), height: wp(65) }]}
        >
            <Image
                source={item?.photoUrl}
                style={[styles.cardImage, { width: wp(44), height: wp(65) }]}
            />

            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.gradient}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />

            {/* <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)} style={styles.favourite}>
            <HeartIcon size={wp(5)} color={isFavourite ? "red" : "white"} />
        </TouchableOpacity> */}

            <Text style={styles.title}>{item.Name}</Text>
            {/* <Text style={styles.description}>{item.shortDescription}</Text> */}
        </TouchableOpacity>
    )

}

export default PlaceCard

const styles = StyleSheet.create({
    container: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    card: {
        justifyContent: 'flex-end',
        paddingVertical: hp(2),
        paddingHorizontal: wp(4),
        marginBottom: hp(2),
        position: 'relative',
    },
    cardImage: {
        borderRadius: 35,
        position: 'absolute',
    },
    gradient: {
        height: hp(15),
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        position: 'absolute',
        bottom: 0,
    },
    favourite: {
        backgroundColor: 'rgba(255,255,255,0.4)',
        position: 'absolute',
        top: wp(1),
        right: wp(3),
        borderRadius: 30,
        padding: wp(3),
    },
    title: {
        fontSize: wp(4),
        color: 'white',
        fontWeight: 'bold',
    },
    description: {
        fontSize: wp(2.2),
        color: 'white',
    }
});