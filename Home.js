import React, { useState } from 'react';
import { StatusBar, Button, StyleSheet, FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 17,
        margin: 5,
        textAlign: 'left',
        backgroundColor: 'white',
    },
    opacityStyle: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    bookDetails: {
        flex: 1,
        paddingRight: 10,

    },
    bookImage: {
        width: 175,
        height: 200,


    },
});

const Home = ({ navigation }) => {
    const [mydata, setMydata] = useState(datasource);

    const getData = async () => {
        let datastr = await AsyncStorage.getItem('bookdata');
        if (datastr != null) {
            const jsondata = JSON.parse(datastr);
            setMydata(jsondata);
        } else {
            setMydata(datasource);
        }
    };

    getData();

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    let datastr = JSON.stringify(mydata);
                    navigation.navigate("Edit", { index: index, key: item.title, datastring: datastr });
                }}
            >
                <View style={styles.bookDetails}>
                    <Text style={styles.textStyle}>Title: {item.title}</Text>
                    <Text style={styles.textStyle}>ISBN: {item.isbn}</Text>
                    <Text style={styles.textStyle}>Copies Owned: {item.copiesOwned}</Text>
                </View>
                <Image source={{ uri: item.imageUrl }} style={styles.bookImage} />
            </TouchableOpacity>
        );
    };

    return (
        <View  style={[styles, { backgroundColor: 'black' }]}>

        <StatusBar />
            <Button
                title="Add New Book"
                onPress={() => {
                    let datastr = JSON.stringify(mydata);
                    navigation.navigate("Add", { datastring: datastr });
                }}
            />
            <FlatList data={mydata} renderItem={renderItem} keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;


