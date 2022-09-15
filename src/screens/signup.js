//<AppButton />   
//<NewButton buttonText="Enter" ></NewButton> 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function SignUp() {
    return ( 
        <ImageBackground source={{uri: 'https://www.myfreewalls.com/public/uploads/preview/download-glass-prism-burst-wallpaper-for-mobile-616396115029fptn2id3w.jpg'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.title}> Sign Up </Text>
        <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
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