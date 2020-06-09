import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { getRedirectUrl, useAuthRequest, } from 'expo-auth-session';
import { StyleSheet, View, Text, ImageBackground, Dimensions } from "react-native";
import { Button } from 'react-native-elements';

import bgImage from './img/background.jpg';
const { width : WIDTH} = Dimensions.get('window');

// const MY_SECURE_AUTH_STATE_KEY = 'MySecureAuthStateKey';
WebBrowser.maybeCompleteAuthSession();
AuthSession.makeRedirectUri({ useProxy: true })

const discovery = {
  authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
  tokenEndpoint: 'https://api.imgur.com/oauth2/token',
  revocationEndpoint: 'https://api.imgur.com/3/account/me',
};

export default function OAuth() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      useProxy: true,
      clientId: '0fa8ab9c054485e',
      scopes: [],
      redirectUri: 'https://auth.expo.io/@elosivi/Epicure',
    },
    discovery
  );

  React.useEffect(() => {
    if (response && response.type === 'success') {
      //Oauth2
      const { code } = response.params;
      console.log("===>OAUth.js/React.useEffect ===> get response.params: ", response.params)
      console.log("===>OAUth.js/React.useEffect ===> code: ", code)
      //storage data
      const auth = response.params;
      const storageValue = JSON.stringify(auth);
      console.log("===>OAUth.js/React.useEffect ===> get storageValue: ", storageValue)
      }
  }, [response]);

  return (
    <ImageBackground source={bgImage}  style={styles.backgroundContainer} >
      <View>
        <Text style={styles.title}>My Profile</Text>
        <View style={styles.btnLogin} >
          <Button
            type="clear"  
            disabled={!request}
            title="Login with Imgur"
            onPress={() => {
              // alert (getRedirectUrl());
              promptAsync({useProxy: true});
              // alert(storageValue)
              }}
          /> 
        </View>
      </View>
    </ImageBackground>
  );
}

// ======================================= S T Y L E ====================================== //
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    width : WIDTH,
  },
  title:{
    textAlign:'center',
    color: 'white',
    fontSize:40,
    fontWeight: '800',
    marginTop: 230,
    opacity:0.7,
  },
  btnLogin:{
   
    width: WIDTH - 250,
    height:140,
    borderRadius:100,
    backgroundColor:'rgba(255,255,255,0.7)',
    justifyContent:'center',
    marginTop: 35,
    borderStyle: 'solid',
    borderColor:'rgba(255,255,255,1)',
    borderWidth : 0,
  },
  text:{
    color:'rgba(255,255,255,1)',
    fontSize: 20,
    textAlign:'center',
  },
});

