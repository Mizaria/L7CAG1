import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.name);
    const [image, setImage] = useState(route.params.image || '');

    return (
        <View style={{ padding: 10, paddingTop: 30 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Name:</Text>
                <TextInput
                    value={name}
                    style={{ borderWidth: 1, padding: 5, borderRadius: 5 }}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image Link:</Text>
                <TextInput
                    value={image}
                    style={{ borderWidth: 1, padding: 5, borderRadius: 5 }}
                    onChangeText={(text) => setImage(text)}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Button
                    title="Save"
                    onPress={() => {
                        const indexNum = route.params.type === 'Plant' ? 0 : (route.params.type === "Water" ? 2 : 1);
                        // Update the data with 'name' instead of 'key'
                        datasource[indexNum].data[route.params.index] = { name, image };
                        navigation.navigate('Home');
                    }}
                />
                <Button
                    title="Delete"
                    onPress={() => {
                        let indexNum = 1;
                        if (route.params.type === "Plant") {
                            indexNum = 0;
                        } else if (route.params.type === "Water") {
                            indexNum = 2;
                        }
                        Alert.alert('Are you sure you want to delete?', '', [
                            {
                                text: 'Yes',
                                onPress: () => {
                                    datasource[indexNum].data.splice(route.params.index, 1);
                                    navigation.navigate('Home');
                                },
                            },
                            { text: 'No' },
                        ]);
                    }}
                />
            </View>
        </View>
    );
};

export default Edit;
