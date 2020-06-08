import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { getRedirectUrl, makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, Text } from "react-native";
import { Button } from 'react-native';

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

    if (response?.type === 'success') {
      const { code } = response.params;
      console.log("===> response.params: ", response.params)
      }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Profile</Text>
      <Button
         disabled={!request}
         title="Login with Imgur"
         onPress={() => {
           alert (getRedirectUrl());
           promptAsync({useProxy: true});
           }}
       /> 
    </View>
  );
}

// TO TEST

// export default class ImgRequests extends React.Component {
//   state = {
//     login: []
//   }



//   render() {
//    return (
//        <View>
//           <Text>Profile page</Text>
//       </View>
//     )
//   }
// }
