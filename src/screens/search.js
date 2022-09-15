import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import Searchbarcomp from '../components/searchbar.js';

export default function Search({ navigation }) {
    return (
        <ImageBackground source={{uri: 'https://www.myfreewalls.com/public/uploads/preview/download-glass-prism-burst-wallpaper-for-mobile-616396115029fptn2id3w.jpg'}} style={styles.backgroundImage}>
        <View style = { styles.container } > 
        <Text style={styles.header}>Search for the Movie Hub database for your movie of choice </Text>
        <Searchbarcomp></Searchbarcomp>
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