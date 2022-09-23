import { StyleSheet, Text, Pressable} from 'react-native';


export default function LogoutButton(props) {
  function print() {
    console.log("print")
}
  return (
      <Pressable style={styles.buttonStyle} title="Logout" color="white" onPress={props.onPress} >
          <Text style={styles.textStyle}>{props.title}</Text>
      </Pressable>
        
    );
}

const styles = StyleSheet.create({
  buttonStyle: {
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'white',
  backgroundColor: 'white',
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 4,
  borderWidth: 2, 
  elevation: 3,
  margin: 30
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black'
    }
  });