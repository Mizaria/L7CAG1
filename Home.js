import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import { datasource } from './Data';

const Home = ({ navigation }) => {


    const calculateCompletionPercentage = () => {
        let totalTasks = 0;
        let completedTasks = 0;

        datasource.forEach(section => {
            section.data.forEach(task => {
                totalTasks++;
                if (task.status === "Completed") {
                    completedTasks++;
                }
            });
        });

        const completedPercentage = ((completedTasks / totalTasks) * 100).toFixed(2);
        const incompletePercentage = (100 - completedPercentage).toFixed(2);

        return {
            totalTasks,
            completedPercentage,
            incompletePercentage,
        };
    };

    const showTaskSummary = () => {
        const { totalTasks, completedPercentage, incompletePercentage } = calculateCompletionPercentage();

        Alert.alert(
            "Task Summary",
            `Total Tasks: ${totalTasks}\nCompleted: ${completedPercentage}%\nIncomplete: ${incompletePercentage}%`
        );
    };

    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => {
                    navigation.navigate('Edit', { index: index, type: section.title, key: item.name, image: item.image, status: item.status });
                }}
            >
                <Image source={{ uri: item.image }} style={styles.imageStyle} />
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>{item.name}</Text>
                    <Text style={styles.statusStyle}>{item.status}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.FullPage}>
            <Text style={styles.pageTitle}>My Task Manager</Text>

            {/* Add Task Button */}
            <View style={styles.buttonStyle}>
                <Button title="Add Tasks" onPress={() => navigation.navigate('Add')} color="gray" />
            </View>

            {/* Task Summary Button */}
            <View style={styles.buttonStyle}>
                <Button title="Task Summary" onPress={showTaskSummary} color="gray" />
            </View>

            {/* Section List */}
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
    FullPage: {
        backgroundColor: 'black',
        flex: 1,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 35,
        color: 'white',
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statusStyle: {
        fontSize: 16,
        color: 'blue',
    },
    headerText: {
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'black',
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
        borderColor: 'white',
        backgroundColor: 'lightgray',
        padding: 10,
        marginVertical: 5,
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 15,
        flex: 1,
    },
    buttonStyle: {
        padding: 2,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    iconStyle: {
        marginLeft: 5,
        marginTop: 10,
        marginRight: 5,
        marginBottom: 10,
    },
});

export default Home;


