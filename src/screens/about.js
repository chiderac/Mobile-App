import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function About() {
    return ( 
        <ImageBackground source={{uri: 'https://www.myfreewalls.com/public/uploads/preview/download-glass-prism-burst-wallpaper-for-mobile-616396115029fptn2id3w.jpg'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.title}> About Page</Text>
        <Text style={styles.text}> Movie Hub is a new website where users can find all streaming links to a movie. If you are looking to watch a movie of your choice, sign up to our website!</Text>
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
        fontSize: 50,
    },
    header: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,
    },
    subheader: {
        color: "white",
        fontSize: 16,
    },
    text: {
        color: "white",
        fontSize: 18,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }

});