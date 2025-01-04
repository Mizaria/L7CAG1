import React, { useState } from 'react';
import { Alert, View, Button, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Edit = ({ navigation, route }) => {
    let myData = JSON.parse(route.params.datastring);
    let myIndex = route.params.index;

    const [title, setTitle] = useState(myData[myIndex].title);
    const [isbn, setIsbn] = useState(myData[myIndex].isbn);
    const [copies, setCopies] = useState(myData[myIndex].copiesOwned ? myData[myIndex].copiesOwned.toString() : "0");
    const [imageUrl, setImageUrl] = useState(myData[myIndex].imageUrl);

    const setData = async (value) => {
        await AsyncStorage.setItem("bookdata", value);
        navigation.navigate('Home');
    };

    const handleSave = () => {
        if (!title || !isbn || !copies || !imageUrl) return;

        let updatedData = [...myData];
        updatedData[myIndex] = {title, isbn, copiesOwned: Number(copies), imageUrl,};

        let stringdata = JSON.stringify(updatedData);
        setData(stringdata);
    };

    const handleDelete = () => {
        Alert.alert("Are you sure you want to delete?", "", [
            {
                text: "Yes",
                onPress: () => {
                    let updatedData = [...myData];
                    updatedData.splice(myIndex, 1);

                    let stringdata = JSON.stringify(updatedData);
                    setData(stringdata);
                },
            },
            { text: "No" },
        ]);
    };

    return (
        <View>
            <Text>Edit Book Details:</Text>
            <Text>Title:</Text>
            <TextInput style={{ borderWidth: 1 }} value={title} onChangeText={setTitle} />
            <Text>ISBN:</Text>
            <TextInput style={{ borderWidth: 1 }} value={isbn} onChangeText={setIsbn} />
            <Text>Number of Copies:</Text>
            <TextInput style={{ borderWidth: 1 }} keyboardType="numeric" value={copies} onChangeText={setCopies}/>
            <Text>Image URL:</Text>
            <TextInput style={{ borderWidth: 1 }} value={imageUrl} onChangeText={setImageUrl} />
            <View style={{ flexDirection: "row" }}>
                <Button title="Save" onPress={handleSave} />
                <Button title="Delete" onPress={handleDelete} />
            </View>
        </View>
    );
};

export default Edit;



