import React, { useState } from 'react';
import { StatusBar, View, Button, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Add = ({ navigation, route }) => {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [copies, setCopies] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const setData = async (value) => {
        await AsyncStorage.setItem("bookdata", value);
        navigation.navigate('Home');
    };

    const handleSubmit = () => {
        if (!title || !isbn || !copies || !imageUrl) return;

        let mydata = JSON.parse(route.params.datastring);
        let newBook = {title, isbn, copiesOwned: Number(copies), imageUrl,};
        mydata.push(newBook);

        let stringdata = JSON.stringify(mydata);
        setData(stringdata);
    };

    return (
        <View>
            <StatusBar />
            <Text>Title:</Text>
            <TextInput style={{ borderWidth: 1 }} value={title} onChangeText={setTitle} />
            <Text>ISBN:</Text>
            <TextInput style={{ borderWidth: 1 }} value={isbn} onChangeText={setIsbn} />
            <Text>Number of Copies:</Text>
            <TextInput style={{ borderWidth: 1 }} keyboardType="numeric" value={copies} onChangeText={setCopies} />
            <Text>Image URL:</Text>
            <TextInput style={{ borderWidth: 1 }} value={imageUrl} onChangeText={setImageUrl} />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Add;

