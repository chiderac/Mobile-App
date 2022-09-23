import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppButton from '../components/MyButton'

class About extends React.Component {
    constructor(){
        super()
        this.state = {val:0}
        this.update = this.update.bind(this)
    }
    update(){
       this.setState({val: this.state.val + 1}) 
    }

    componentDidMount(){ 
        console.log("the AboutUs component now succesfully exists")
    }

    componentDidUpdate(){
        console.log(`The new Value is : ${this.state.val}`)
    }
  
  
    render (){
        return (  <View style={styles.container}>
            <Text>ABOUTUS!</Text>
            <Text style={styles.title}>Value is : {this.state.val}</Text>
            <TouchableOpacity style={styles.button} onPress={this.update}>
                <Text>Press Here</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
          </View>)
    }
}

// export default function About() {
//     return ( 
//         <ImageBackground source={{uri: 'https://www.cuded.com/wp-content/uploads/2014/04/41-Purple-Background.jpg'}} style={styles.backgroundImage}>
//         <View style = { styles.container } > 
//         <Text style={styles.title}> About Page</Text>
//         <Text style={styles.text}> Movie Hub is a new website where users can find all streaming links to a movie. If you are looking to watch a movie of your choice, sign up to our website!</Text>
//         <StatusBar style = "auto" />
//         </View>
//         </ImageBackground>
//     );
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'purple',
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
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      }

});

export default About;