
import { StyleSheet, Text, Button } from 'react-native';

export default function NewButton(props) {
    function print() {
        console.log("print")
    }
    return (
        <Button title={props.buttonText} color="black" onPress={print} />
        //<TouchableOpacity onPress={print}>
            //<Text>{props.buttonText}</Text>
        //</TouchableOpacity> 
        );
       
}




  const styles = StyleSheet.create({
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 4, 
        elevation: 3,
        backgroundColor: 'black'
    },
    textStyle: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,

    }
  });
  
