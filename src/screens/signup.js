//<AppButton />   
//<NewButton buttonText="Enter" ></NewButton> 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import AppButton from '../components/MyButton';
import NewButton from '../components/button.js';

export default function SignUp() {
    return ( 
        <View style = { styles.container } > 
        <Text style={styles.title}> Sign Up </Text>
        <br></br>
        <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
        <StatusBar style = "auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
    }

});