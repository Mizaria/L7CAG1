import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { datasource } from './Data';

const Home = ({ navigation }) => {

    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                    navigation.navigate('Edit', { index: index, type: section.title, key: item.name, image: item.image });
                }}
            >
                <Image source={{ uri: item.image }} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <View style={styles.buttonStyle}>
                <Button title="Add Pokemons" onPress={() => navigation.navigate('Add')} />
            </View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                    <View style={[styles.headerText, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={30} color="#fff" style={styles.iconStyle} />
                        <Text style={styles.headerTextonly}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
        flex: 1,
    },
    headerText: {
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',

        flexDirection: 'row', // Aligns the icon and text in a row
        alignItems: 'center',  // Vertically aligns the icon and text in the center
    },
    headerTextonly: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 5,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 5, // Adds space between items
    },
    buttonStyle: {
        marginTop: 30,
        padding: 10,
        borderRadius: 5,
    },
    iconStyle: {
        marginLeft: 5,
        marginTop:10,
        marginRight:5,
        marginBottom:10,


    },
    sectionHeader: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default Home;
