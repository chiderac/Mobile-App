import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import LogoutButton from '../components/logoutbutton'
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function SignOut({ navigation }) {
    return ( 
        
        <ImageBackground source={{uri: 'https://img.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg?w=900&t=st=1663801401~exp=1663802001~hmac=ab514b0b1a1fdde6106cdc6443692a75d6fb569104a701587eedd499e5237bd7'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.title}> Sign Out Page</Text>
        <LogoutButton title="Log Out" onPress={() => navigation.navigate('Home')} /> 
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
    }


});