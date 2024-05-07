import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import { wp, hp } from "../../helpers/common";
import { debounce } from 'lodash';
import Categories from '../../components/categories';



const HomeScreen = () => {

    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 10 : 30;
    const [search, setSearch] = useState('')
    const searchInputRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [places, setPlaces] = useState([])

    const handleChangeCategory = (cat) => {
        setActiveCategory(cat);
    }

    const handleSearch = (text) => {
        // console.log('searching for: ', text);
        setSearch(text);

        if (text.length > 2) {

            page = 1;
            setPlaces([]);
            //    fetchImages({ page, q: text });
        }

        if (text == "") {

            page == 1
            searchInputRef?.current?.clear();
            setPlaces([]);
            // fetchImages({ page });
        }
        // console.log(text)
    }

    const clearSearch = () => {
        setSearch("")
        searchInputRef?.current?.clear();

    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 400), [])



    return (
        <View style={[styles.container, { paddingTop }]}>
            {/* heading */}
            <View style={styles.header}>
                <Pressable>
                    <Text style={styles.title}>
                        Pixels
                    </Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6
                        name='bars-staggered'
                        size={22}
                        color={theme.colors.neutral(0.7)}
                    />
                </Pressable>
            </View>

            <ScrollView
                contentContainerStyle={{ gap: 15 }}
            >
                {/* search bar */}
                <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Feather name='search' size={34} color={theme.colors.neutral(0.4)} />
                    </View>
                    <TextInput
                        placeholder='Search for photos...'
                        // value={search}
                        ref={searchInputRef}
                        onChangeText={handleTextDebounce}
                        style={styles.searchInput}
                    >
                    </TextInput>
                    {
                        search &&
                        (
                            <Pressable onPress={() => handleSearch("")} style={styles.closeIcon}>
                                <Ionicons name='close' size={24} color={theme.colors.neutral(0.6)} />
                            </Pressable>
                        )
                    }
                </View>

                {/* Categories */}
                <View style={styles.categories}>
                    <Categories activeCategory={activeCategory} handleChangeCategory={handleChangeCategory} />
                </View>

            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15
    },
    header: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: hp(4),
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.neutral(0.9)
    },
    searchBar: {
        marginHorizontal: wp(4),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.grayBG,
        backgroundColor: theme.colors.white,
        padding: 6,
        paddingLeft: 10,
        borderRadius: theme.radius.lg
    },
    searchIcon: {
        padding: 8
    },
    searchInput: {
        flex: 1,
        borderRadius: theme.radius.sm,
        paddingVertical: 10,
        fontSize: hp(1.8)
    },
    closeIcon: {
        backgroundColor: theme.colors.neutral(0.1),
        padding: 8,
        borderRadius: theme.radius.sm,
    }
})