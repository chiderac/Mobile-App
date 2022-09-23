// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import React, { useState} from 'react';
// import _ from 'lodash';


// const SignOut = () => {
//   const [animals, setAnimals] = useState([
//     { type: "Lion" },
//     { type: "Rabbit" },
//     { type: "Wolf" }
//   ]);
  
//   const handThis = () =>{
//     const element = _.sample(animals);
//     console.log(element, "element")
//     return element
//   }

//   return (
 
//     <View style={styles.container}>
//       <View>
//       {animals.map((animal) => (
//         <Text>{animal.type}</Text>
//       ))}
//       </View>
      

//       <TouchableOpacity style={styles.button} onPress={() => setAnimals([...animals, { type: "Sparrow" }])}>
//           <Text>animalsAdd</Text>
//       </TouchableOpacity>
      
//         <TouchableOpacity style={styles.button} onPress={() => setAnimals([handThis()])}>
//           <Text>random</Text>
//       </TouchableOpacity>

//       <Text>SIGNOUT!</Text>
//       <StatusBar style="auto" />
//     </View>
// )}


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'blue',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     title: {
//       color: 'green',
//       fontWeight: 'bold',
//       textDecorationLine: 'underline',
//       fontSize: 20
//     },
//     button: {
//         alignItems: "center",
//         backgroundColor: "#DDDDDD",
//         padding: 10
//       },
//   });
  

// export default SignOut;


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-native-redux'
import MyButton from '../components/button';
//import Header from '../components/header';

const SignOut = () => {
  const [message, setMessage] = useState("default message")

  const dispatch = useDispatch()

  function addUser(user){
    const action = {
        type: "ADD_USER",
        payload: user
      }
    dispatch(action)
  }

  const user = useSelector((state) => state.username)

  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Page</Text>
      <Text>{message}</Text>
      <LogoutButton buttonText={"Press here to change the message"} onPress={() => setMessage("new message")}></LogoutButton>
      <LogoutButton buttonText={"Reset"} onPress={() => setMessage("back to default")}></LogoutButton>
      <Text>User: {user}</Text>
      <LogoutButton Text={"Add User"} onPress={() => addUser("Amy")}></LogoutButton>
      <StatusBar style="auto"/>
    </View>
)}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eff1f3',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        color: 'green',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 20
      }
  });


export default SignOut;