//<AppButton />   
//<NewButton buttonText="Enter" ></NewButton> 
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput} from 'react-native';
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function Register() {
    const [name, setName] = useState('Chidera');
    const [age, setAge] = useState('27');
    const [email, setEmail] = useState('cjchukwumah@yahoo.co.uk');
    const [password, setPassword] = useState('Genius100');

    return ( 
        <ImageBackground source={{uri: 'https://www.myfreewalls.com/public/uploads/preview/download-glass-prism-burst-wallpaper-for-mobile-616396115029fptn2id3w.jpg'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.title}> Register Today! </Text>
        <Text></Text>
        <Text style={styles.subheader}>Enter name:</Text>
        <TextInput 
        placeholder='e.g. John Doe' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

        <Text style={styles.subheader}>Enter age:</Text>
        <TextInput 
        keyboardType='numeric'
        placeholder='e.g. 25' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

        <Text style={styles.subheader}>Enter Email:</Text>
        <TextInput 
        keyboardType='email-address'
        placeholder='e.g. johndoe@yahoo.co.uk' 
        style={styles.input}
        onChangeText={(value) => setEmail(value)} />

        <Text style={styles.subheader}>Enter Password:</Text>
        <TextInput 
        placeholder='e.g. xxxxxx' 
        style={styles.input}
        onChangeText={(value) => setPassword(value)} />

        <Button title="Register" onPress={() => navigation.navigate('Home')} />
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
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    subheader: {
        color: "black",
        fontSize: 16,
    },
    text: {
        color: "black",
        fontSize: 14,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    input: {
        borderWidth: 5,
        borderColor: 'white',
        padding: 8,
        margin: 10,
        width: 200,
      }

});