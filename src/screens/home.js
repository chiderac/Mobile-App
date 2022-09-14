import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function Home() {
    return ( 
        <View style = { styles.container } > 
        <Text style={styles.title}> This is the Title</Text>
        <Text style={styles.header}> This is the header</Text> 
        <Text style={styles.subheader}> This is the sub header</Text>  
        <Text style={styles.text}> This is the text</Text>
        <AppButton/>   
        <NewButton buttonText="Press Me"></NewButton> 
        <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'yellow',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20,
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
    }

});