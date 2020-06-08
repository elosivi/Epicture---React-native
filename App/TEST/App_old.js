import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity,  } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { Linking } from 'expo';
import * as AppAuth from 'expo-app-auth'; 
// import { authorize } from 'react-native-app-auth';
import bgImage from './Img/lighthouse-cartoon-background.jpg'


// const prefix = Linking.makeUrl('/');
const { width : WIDTH} = Dimensions.get('window')
const config = {
  Auth_URL: 'https://api.imgur.com/oauth2/token',
  Access_Token_URL : 'https://api.imgur.com/oauth2/token',
  client_ID: '46400aaa58368bf',
  Client_Secret:'b043c741b265336e823047a15535a61672483a92',
  // redirectUrl: 'https://imgur.com',
  scopes: [],
};

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logged : false,
      username: "",
      token : "",
    }
  }

 

  async function Loggin(){
    this.setState({ logged: true },()=>{console.log(" Now Logged is " + this.state.logged)})//TEST
    let authState = await AppAuth.authAsync(config);
    await cacheAuthAsync(authState);
    console.log('signInAsync', authState);
    return authState;
  }

  async cacheAuthAsync(authState) {
    return await AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={styles.LogoText}>EPICTURE</Text>
          <Text style={styles.UnderLogoText}>by Elo*</Text>
        </View>
        <View>
          <TouchableOpacity  onPress={async () => {await Loggin()} style={styles.btnLogin}>
              <Text style={styles.text}>Login with Imgur</Text>
          </TouchableOpacity>
        </View>
      
      </ImageBackground>
    );
  }
}

 // Loggin = () => {
  //   console.log(" login pressed, Logged state is set at " + this.state.logged) // test console
  //   this.setState({ logged: true },()=>{console.log(" Now Logged is " + this.state.logged)})
  //   return(
  //     <WebView
  //       source={{
  //         uri: 'https://imgur.com'
  //       }}
  //     />
  //   )
  // }

// ======================================= S T Y L E ====================================== //
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
  
  },
  LogoText:{
    color: 'white',
    fontSize:40,
    fontWeight: '800',
    marginTop: 200,
    opacity:0.7,
  },
  UnderLogoText:{
    color: 'white',
    fontSize:20,
    fontWeight: '500',
    marginTop:0,
    opacity:0.5,
    textAlign:'center',
  },
  btnLogin:{
    width: WIDTH - 55,
    height:55,
    borderRadius:25,
    backgroundColor:'rgba(255,255,255,0.7)',
    justifyContent:'center',
    marginTop: 35,
    borderStyle: 'solid',
    borderColor:'rgba(255,255,255,1)',
    borderWidth : 1,
  },
  text:{
    color:'rgba(255,255,255,1)',
    fontSize: 20,
    textAlign:'center',
    
  }
});
