import React from 'react';
import {StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform} from 'react-native';

const {height, width} = Dimensions.get('window');
export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
            <Text style={styles.title}>TODOAPP</Text>
            <View style={styles.card}>
                <TextInput style={styles.input} placeholder={"New Todo"}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f23657',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 30,
        marginTop: 50,
        marginBottom: 30,
        fontWeight: '200',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        width: width - 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        ...Platform.select({
            ios: {
                shadowColor : 'rgb(50,50,50)',
                shadowOpacity: 0.5,
                shadowRadius:5,
                shadowOffset:{
                    height :-1,
                    width:0
                }
            },
            android: {
                elevation:3,

            },
        }),
    }
});
