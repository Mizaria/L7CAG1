import React, { useState } from 'react';
import { TextInput, View, Text, Button, Alert } from 'react-native';
import { datasource } from './Data';
import RNPickerSelect from "react-native-picker-select";

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.name);
    const [image, setImage] = useState(route.params.image || '');
    const [status, setStatus] = useState('');
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
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Status:</Text>
                <RNPickerSelect
                    value={status}
                    onValueChange={(value) => setStatus(value)}
                    items={[
                        { label: 'Completed', value: 'Completed' },
                        { label: 'Incomplete', value: 'Incomplete' },
                    ]}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <Button
                    title="Save"
                    onPress={() => {
                        const indexNum = route.params.type === 'School Tasks' ? 0 : (route.params.type === "Outdoor Tasks" ? 2 : 1);

                        datasource[indexNum].data[route.params.index] = { name, image ,status};
                        navigation.navigate('Home');
                    }}
                />
                <Button
                    title="Delete"
                    onPress={() => {
                        let indexNum = 1;
                        if (route.params.type === "School Tasks") {
                            indexNum = 0;
                        } else if (route.params.type === "Outdoor Tasks") {
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
