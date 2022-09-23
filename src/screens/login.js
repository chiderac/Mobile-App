import React, { FC, ReactElement, useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        try{
            AsyncStorage.getItem("UserData").then(value => {
                if(value != null){
                    navigation.navigate('Home');
                    //Alert.alert("Logged in Successfully!");
                }
            })
        }catch(error){
            console.warn(error);
        }
    }

    const setData = async (data) => {
        if(username.length == 0 || password.length == 0){
            Alert.alert("Warning!", "Please write your data");
        }else{
            try{
                var user = {
                    Username: username,
                    Password: password,
                };
                await AsyncStorage.setItem("UserData", JSON.stringify(user));
                Alert.alert("Account Created Successfully");
            }catch(error){
                console.warn(error);
            }
        }
    }

    return ( 
        <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=900&t=st=1663801401~exp=1663802001~hmac=ab514b0b1a1fdde6106cdc6443692a75d6fb569104a701587eedd499e5237bd7'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.title}> Login! </Text>
        <Text></Text>

        <Text style={styles.subheader}>Enter Username:</Text>
        <TextInput 
        keyboardType='username'
        placeholder='e.g. chiderac' 
        style={styles.input}
        value={username}
        onChangeText={(value) => setUsername(value)} />

        <Text style={styles.subheader}>Enter Password:</Text>
        <TextInput 
        placeholder='e.g. xxxxxx' 
        style={styles.input}
        value={password}
        onChangeText={(value) => setPassword(value)} />

        <Button title="Login" onPress={getData} />
        <StatusBar style = "auto" />
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    subheader: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    input: {
        borderWidth: 5,
        backgroundColor:'white',
        borderColor: 'white',
        padding: 8,
        margin: 10,
        width: 200,
      }

});