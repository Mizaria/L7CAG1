import React, { useState } from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from "./Data";

const Add = ({navigation}) => {
    const [Name, setName] = useState('');
    const [type, setType] = useState('');
    const [Image, setImage] = useState('');
    const [status, setStatus] = useState('');

    return (
        <View style={{ padding: 10,paddingTop:30 }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Name:</Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setName(text)} />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>ImageLink:</Text>
                <TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setImage(text)} />
            </View>

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Category:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'School Tasks', value: 'School Tasks' },
                        { label: 'Home Tasks', value: 'Home Tasks' },
                        { label: 'Outdoor Tasks', value: 'Outdoor Tasks' },
                    ]}
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
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {name: Name, image: Image, status: status};

                        let indexNum = 1;
                        if (type === "School Tasks") {
                            indexNum = 0;
                        }
                        else if (type === "Outdoor Tasks") {
                            indexNum = 2;
                        }

                        datasource[indexNum].data.push(item);

                        navigation.navigate('Home');
                    }}
            />
        </View>
    );
};

export default Add;
