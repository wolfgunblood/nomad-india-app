import { View, Text, TouchableOpacity, ScrollView, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { wp, hp } from "../../helpers/common";
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { ClockIcon, HeartIcon, MapPinIcon, SunIcon } from 'react-native-heroicons/solid';
// import { useNavigation } from '@react-navigation/native';
import { theme } from '../../constants/theme';
import { useLocalSearchParams } from 'expo-router';

const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : 'mt-10';

export default function DestinationScreen() {
    const item = useLocalSearchParams();
    console.log(item)
    const [isFavourite, toggleFavourite] = useState(false)
    // const item = props.route.params
    // const navigation = useNavigation();
    // const [isFavourite, toggleFavourite] = useState(false)
    // console.log(item)

    return (
        <View style={styles.container}>
            <Image
                source={item?.photoUrl}
                style={styles.image}
            />
            <StatusBar style='light' />
            <SafeAreaView style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', top: topMargin }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}
                >
                    <ChevronLeftIcon size={28} strokeWidth={4} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => toggleFavourite(!isFavourite)}
                    style={styles.heartButton}
                >
                    <HeartIcon size={28} strokeWidth={4} color={isFavourite ? "red" : "white"} />
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.infoContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.titlePriceRow}>
                        <Text style={styles.titleText}>
                            {item?.Name}
                        </Text>
                        <Text style={[styles.priceText, { color: theme.text }]}>
                            $ 1000
                        </Text>
                    </View>
                    <Text style={styles.longDescription}>{item?.longDescription}</Text>
                    <View style={styles.detailRow}>
                        <ClockIcon size={28} color="skyblue" />
                        <Text style={styles.detailText}>50</Text>
                        <Text style={styles.detailLabel}>Duration</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <MapPinIcon size={28} color="#f87171" />
                        <Text style={styles.detailText}>6</Text>
                        <Text style={styles.detailLabel}>Distance</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <SunIcon size={28} color="orange" />
                        <Text style={styles.detailText}>40</Text>
                        <Text style={styles.detailLabel}>Sunny</Text>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.bookButton}
                >
                    <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '55%', // adjust these as needed, consider using Dimensions
    },
    backButton: {
        padding: 8,
        borderRadius: 30,
        marginLeft: 16,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    heartButton: {
        padding: 8,
        borderRadius: 30,
        marginRight: 16,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    infoContainer: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        backgroundColor: 'white',
        paddingTop: 32,
        marginTop: -56,
        flex: 1,
        justifyContent: 'space-between',
    },
    titlePriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    titleText: {
        fontSize: 28, // replace wp(7) with your calculated value or use Dimensions
        fontWeight: 'bold',
        color: '#4B5563',
        flex: 1,
    },
    priceText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    longDescription: {
        fontSize: 14,
        color: '#4B5563',
        marginBottom: 8,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 4,
    },
    detailIconBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    detailText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4B5563',
        marginLeft: 8,
    },
    detailLabel: {
        color: '#6B7280',
    },
    bookButton: {
        backgroundColor: '#1E40AF', // example color
        height: 60,
        width: 200,
        marginBottom: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    bookButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});