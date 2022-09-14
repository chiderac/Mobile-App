import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function SignOut() {
    return ( 
        <View style = { styles.container } > 
        <Text style={styles.title}> Sign Out Page</Text>
        <AppButton/>   
        <NewButton buttonText="Press Me"></NewButton> 
        <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
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