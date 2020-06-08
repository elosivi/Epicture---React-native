import * as React from 'react';
import { ImageBackground, Dimensions, StyleSheet, View, Text, TouchableHighlight } from "react-native";
import bgImage from './img/background.jpg';
// import {Component} from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';//navigation management
import { NavigationContainer } from '@react-navigation/native';//navigation management
import { createAppContainer } from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons'
import {Nav} from './Nav'


const {width:WIDTH} = Dimensions.get('window')



function NavScreen({ navigation }) {
 
    return (
      <View><Text>Hello !</Text></View>
          // <ImageBackground source={bgImage} style={styles.container}>
          //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          //         <View style={styles.logoTextContainer}>
          //             <Text style={styles.underLogoText}>Test </Text>
          //         </View>
          //         <TouchableHighlight onPress={() => navigation.navigate('NavView')}  style={styles.button}>
          //             <Text style={styles.buttonText}>Nav test</Text>
          //         </TouchableHighlight>
          //     </View>
             
          // </ImageBackground>
      );
  
}

const Stack = createStackNavigator();

export default function Home() {
  
  return (
    <View><Text>Hello wolrd !</Text></View>
      // <NavigationContainer>

      //     <Text>Hello!</Text>
      //     <Stack.Navigator>
      //         <Stack.Screen name="NavView" component={NavScreen} />
      //     </Stack.Navigator>
          
         
      // </NavigationContainer>
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


// +++++++++++++++++++++ T E S T    N A V B A R +++++++++++++++++++++++++++
// const Tab = createMaterialBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default class Home extends  React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
       
//       }
//     }
   
  
//     render = () => {
//       return (
        
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
//                 <Text style={styles.underLogoText}>Home test</Text>
           
//         </View>
    
//       );
//     }
//   }

  // class HomeScreen extends React.component {
  //   render(){
  //     return(
  //       <View style ={styles.container}>
  //         <Text>Home</Text>
  //       </View>
  //     )
  //   }
  // }

//   class OneScreen extends React.component {
//     render(){
//       return(
//         <View style ={styles.container}>
//           <Text>View 1</Text>
//         </View>
//       )
//     }
//   }

//   class TwoScreen extends React.component {
//     render(){
//       return(
//         <View style ={styles.container}>
//           <Text>View 2</Text>
//         </View>
//       )
//     }
//   }

//   class ThreeScreen extends React.component {
//     render(){
//       return(
//         <View style ={styles.container}>
//           <Text>View 3</Text>
//         </View>
//       )
//     }
//   }

// // ================== S T Y L E ===================== //


// // ================== B O T T O M     N A V    B A R  ===================== //
// const TabNavigator = createMaterialBottomTabNavigator(
//   {
//     Home:{screen:HomeScreen},
//     One:{screen:OneScreen},
//     Two:{screen:TwoScreen},
//     Three:{screen:ThreeScreen},
//   },

//   {
//     initialRouteName:'Home',
//     activeColor:'green',
//     inactiveColor:"yellow",
//     barStyle: { backgroundColor: "bleu"}
//   }
// );

