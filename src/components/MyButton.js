import { StyleSheet, Text, View, Button } from 'react-native';

const AppButton = () => (
    <View style={styles.buttonStyle}>
        <Button title="Learn More"  
          accessibilityLabel="Learn more about this purple button"/>  
      </View>
  );


  const styles = StyleSheet.create({
    buttonStyle:{
      backgroundColor: 'yellow',
      marginTop: 30,
      marginLeft: 50,
      marginRight: 50,
      borderWidth: 2,
      borderRadius: 20,
      borderColor: "yellow", //button background/border color
      overflow: "hidden",
      marginBottom: 10,
    },
  });
  
  export default AppButton;