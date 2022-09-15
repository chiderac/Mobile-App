import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import AppButton from '../components/search.js';
import NewButton from '../components/button.js';

export default function Movie() {
    return (
        <ImageBackground source={{uri: 'https://www.myfreewalls.com/public/uploads/preview/download-glass-prism-burst-wallpaper-for-mobile-616396115029fptn2id3w.jpg'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.title}>Movie Title</Text>
        <Text style={styles.header}>This is the movie Page</Text> 
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor: 'black',
        justifyContent: 'center',
    },
    
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
    },
    header: {
        color: "white",
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