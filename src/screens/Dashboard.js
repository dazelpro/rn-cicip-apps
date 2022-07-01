import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import icons from '../constants/icons';
import {COLORS, FONTS, SIZE} from '../constants/thames';
import {AuthContext} from '../services/Provider';
import {MatButton} from '../shared';

export default function Dashboard({navigation}) {
    const {onLogout} = useContext(AuthContext);
    const [resto, setResto] = React.useState([
        {
            id: 1,
            name: 'Warung Mie Ayam Pak De Supri Asli Bandung',
            like: 20,
            image: 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/09/08/1107574/content_images/670x335/20210123121047-1-ilustrasi-mie-ayam-012-tantri-setyorini.jpg',
        },
        {
            id: 2,
            name: 'Pecel Ayam Pecel Lele Mbak Surip, Alang Laweh',
            like: 13,
            image: 'https://ik.imagekit.io/tvlk/cul-asset/guys1L+Yyer9kzI3sp-pb0CG1j2bhflZGFUZOoIf1YOBAm37kEUOKR41ieUZm7ZJ/cul-assets-252301483284-b172d73b6c43cddb/culinary/asset/REST_aya-1183x720-FIT_AND_TRIM-a91cae1c9d0b4584afaaf784c1865f69.jpeg?tr=q-40,c-at_max,w-1080,h-1920&_src=imagekit',
        },
        {
            id: 3,
            name: 'Warung Soto Tiga Putra Koto, Depan Kantor Lurah Bungo Pasang',
            like: 321,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/28eb41e1-4962-4c20-ad7c-0c42eeea8152.jpg?h=636&w=1082&fit=crop&auto=compress',
        },
        {
            id: 4,
            name: 'Cumlaude-Roti Bakar Premium, Padang Barat',
            like: 29,
            image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/5668e338-73d6-4ebb-b27e-62b9cea1c322_Go-Biz_20211124_213725.jpeg',
        },
        {
            id: 5,
            name: 'Kantin Bu Mimin SMA Don Bosco Padang',
            like: 29,
            image: 'https://i1.wp.com/jakpat.net/info/wp-content/uploads/2019/05/cccb39c7ae48e92058f2f99bc36aacd8.jpg?fit=425%2C337&ssl=1',
        },
    ]);

    const DismissKeyboard = ({children}) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Search')}>
                {children}
            </TouchableWithoutFeedback>
        );
    };

    const renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 30,
                    paddingHorizontal: 20,
                }}>
                <View
                    style={{
                        flex: 1,
                        height: 50,
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 11,
                            marginBottom: -2,
                            ...FONTS.jktMedium,
                            color: COLORS.gray,
                        }}>
                        Hallo
                    </Text>
                    <Text
                        style={{
                            fontSize: 20,
                            ...FONTS.jktBold,
                            color: COLORS.gray,
                        }}>
                        Zeldianto,
                    </Text>
                </View>
                <View
                    style={{
                        flex: 1,
                        height: 50,
                        justifyContent: 'center',
                    }}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('Profile')}>
                        <Image
                            style={{
                                width: 30,
                                height: 30,
                                alignSelf: 'flex-end',
                            }}
                            source={{
                                uri: 'https://cdn.dribbble.com/users/5994307/avatars/small/cb650aa59e31121cee4d8921b2d7e50d.png?1632822869',
                            }}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            {renderHeader()}
            <DismissKeyboard>
                <View style={styles.inputContainer}>
                    <Image style={styles.img} source={icons.search} />
                    <View
                        style={styles.input}
                        placeholder="Mau makan apa hari ini?"
                        placeholderTextColor="#A0ADCB"
                        keyboardType="default">
                        <Text style={{color: COLORS.placeholder}}>
                            Mau makan apa hari ini?
                        </Text>
                    </View>
                </View>
            </DismissKeyboard>
            <ScrollView>
                <Image
                    style={{
                        width: SIZE.width - 40,
                        height: 170,
                        borderRadius: 10,
                        marginBottom: 10,
                        resizeMode: 'contain',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        borderRadius: 12,
                    }}
                    source={require('../../assets/banner-display-01.jpg')}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <View
                        style={{
                            flex: 1,
                            height: 75,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <MatButton
                            type={3}
                            icon={icons.fastfood}
                            onPress={() => console.log('press!')}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.jktBold,
                                fontSize: 12,
                            }}>
                            Fast Food
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            height: 75,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <MatButton
                            type={3}
                            icon={icons.noodle}
                            onPress={() => console.log('press!')}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.jktBold,
                                fontSize: 12,
                            }}>
                            Noodles
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            height: 75,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <MatButton
                            type={3}
                            icon={icons.pizza}
                            onPress={() => console.log('press!')}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.jktBold,
                                fontSize: 12,
                            }}>
                            Pizza
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            height: 75,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <MatButton
                            type={3}
                            icon={icons.ice}
                            onPress={() => console.log('press!')}
                        />
                        <Text
                            style={{
                                color: COLORS.darkGray,
                                ...FONTS.jktBold,
                                fontSize: 12,
                            }}>
                            Ice Cream
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: 20,
                        paddingHorizontal: 20,
                    }}>
                    <View
                        style={{
                            flex: 1,
                            height: 50,
                            justifyContent: 'center',
                            alignSelf: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 20,
                                ...FONTS.jktBold,
                                color: COLORS.darkGray,
                            }}>
                            Terpopuler
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            height: 50,
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 10,
                                ...FONTS.jktBold,
                                color: COLORS.green,
                                alignSelf: 'flex-end',
                            }}>
                            Lihat semua
                        </Text>
                    </View>
                </View>

                <FlatList
                    style={{paddingBottom:80}}
                    data={resto}
                    renderItem={({item}) => (
                        <View
                            style={{
                                flexDirection: 'row',
                                paddingTop: 10,
                                paddingBottom: 12,
                                paddingHorizontal: 20,
                            }}>
                            <View>
                                <Image
                                    style={{
                                        width: 120,
                                        height: 85,
                                        borderRadius: 12,
                                    }}
                                    source={{
                                        uri: item.image,
                                    }}
                                />
                            </View>
                            <View style={{flex: 1}}>
                                <Text
                                    style={{
                                        ...FONTS.jktBold,
                                        color: COLORS.darkGray,
                                        fontSize: 16,
                                        paddingLeft: 12,
                                    }}>
                                    {item.name}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 5,
                                    }}>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                        }}>
                                        <Image
                                            style={{
                                                height: 15,
                                                width: 15,
                                                marginLeft: 12,
                                                marginRight: 5,
                                            }}
                                            source={icons.like}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignSelf: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                fontSize: 12,
                                                ...FONTS.jktBold,
                                                color: COLORS.darkGray2,
                                            }}>
                                            {item.like} Suka
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
                {/* <View
                    style={{
                        flexDirection: 'row',
                        paddingTop: 10,
                        paddingHorizontal: 20,
                    }}>
                    <View>
                        <Image
                            style={{
                                width: 120,
                                height: 85,
                                borderRadius: 12,
                            }}
                            source={{
                                uri: 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/09/08/1107574/content_images/670x335/20210123121047-1-ilustrasi-mie-ayam-012-tantri-setyorini.jpg',
                            }}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <Text
                            style={{
                                ...FONTS.jktBold,
                                color: COLORS.darkGray,
                                fontSize: 16,
                                paddingLeft: 12,
                            }}>
                            Warung Mie Ayam Pak De Surip, Depan SMA Don Bosco
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 5,
                            }}>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                }}>
                                <Image
                                    style={{
                                        height: 15,
                                        width: 15,
                                        marginLeft: 12,
                                        marginRight: 5,
                                    }}
                                    source={icons.like}
                                />
                            </View>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignSelf: 'center',
                                }}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        ...FONTS.jktBold,
                                        color: COLORS.darkGray2,
                                    }}>
                                    53 Suka
                                </Text>
                            </View>
                        </View>
                    </View>
                </View> */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF',
    },
    img: {
        padding: 10,
        margin: 8,
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgGrey,
        height: 40,
        borderRadius: 12,
        margin: 10,
        marginHorizontal: 20,
    },
    input: {
        ...FONTS.jktMedium,
        paddingEnd: 30,
        fontSize: 12,
        flex: 1,
    },
});
