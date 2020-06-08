import * as React from 'react';
// import {Component} from 'react';

// import 'react-native-gesture-handler';//navigation management
import { ImageBackground, Dimensions, StyleSheet, View, Text, TouchableHighlight, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';//navigation management
import { NavigationContainer } from '@react-navigation/native';//navigation management

// import Home from './Home'
import Nav from './Nav'
import bgImage from './img/background.jpg'

const {width:WIDTH} = Dimensions.get('window')



function HomeScreen({ navigation }) {
    return(
      <View><Nav/></View>
        // <View>
        //     <Text>Hello world !</Text>
        // </View>
    )
}

function LogScreen({ navigation }) {
    return (
        <ImageBackground source={bgImage} style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Text>Hello world!</Text> */}
                    <Text style={styles.logoText}>EPICTURE</Text>
                    <Text style={styles.underLogoText}>by Elo*</Text>
                    <TouchableHighlight onPress={() => navigation.navigate('HomeView')} style={styles.button}>
                        <Text style={styles.buttonText}> Go Home</Text>
                    </TouchableHighlight>
                    <Button onPress={() => navigation.goBack()} style={styles.button} title="Log with Imgur"/>
            </View>
         </ImageBackground>
    );
}

const Stack = createStackNavigator();

export default function App() {
  
    return (
        // <View>
        //     <Text>Hello world !</Text>
        // </View>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LogView" component={LogScreen} />
                <Stack.Screen name="HomeView" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// ================== S T Y L E ===================== //

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: null,
        height:null,
        justifyContent:"center",
        alignItems:'center',
    },
    logoTextContainer:{
        alignItems:'center'

    },
    logoText:{
        color:"white",
        fontSize:20,
        fontWeight:'800',
        marginTop:10,
        opacity: 0.7
    },
    underLogoText:{
        color:"white",
        fontSize:15,
        fontWeight:'500',
        opacity: 0.5
    },
    button:{
        marginTop:20,
        width: WIDTH - 55,
        height:45,
        borderRadius:25,
        backgroundColor:'rgba(240,240,240,0.5)',
        justifyContent:'center',

    },
    buttonText:{
        color:'white',
        fontSize:16,
        textAlign:'center'
    }
})
