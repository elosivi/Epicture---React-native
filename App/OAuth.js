import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { View, Text } from "react-native";
import { Button } from 'react-native';

export default class ImgRequests extends React.Component {
  state = {
    login: []
  }



  render() {
   return (
       <View>
          <Text>Profile page</Text>

      </View>
    )
  }
}

// TO TEST

// WebBrowser.maybeCompleteAuthSession();

// Endpoint
// const discovery = {
//   authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
//   tokenEndpoint: 'https://api.imgur.com/oauth2/token',
//   revocationEndpoint: 'https://api.coinbase.com/oauth/revoke',
// };

// export default function OAuth() {

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>profile</Text>
//     </View>
//   );
// }


// export default function OAuth() {
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId: '46400aaa58368bf',
//       scopes: ['wallet:accounts:read'],
//       // For usage in managed apps using the proxy
//       redirectUri: makeRedirectUri({
//         // For usage in bare and standalone
//         native: 'myapp://redirect', //scheme:myapp in app.json
//       }),
//     },
//     discovery
//   );

//   React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { code } = response.params;
//       }
//   }, [response]);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>EPICTURE</Text>
//     </View>
//       {/* <Text>by Elo*</Text>
//       <Button
//         disabled={!request}
//         title="Login with Imgur"
//         onPress={() => {
//           promptAsync();
//           }}
//       /> */}
//     </View>
//   );
// }
