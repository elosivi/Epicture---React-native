
# 1- What is this app?
This cross-platform / mobile app was dev by Elodie Barbe during the codacademy by Epitech, @2020<br/>
It was dev in React-native<br/>
This app is connected with the Imgur API

# 2- Fonctionalities <br/>
Login with Imgur API
Get data from API

# 3- dev schema & tools
## Expo / npm / react essentials modules used
**The bottom navbar** was build with @react-navigation/material-bottom-tabs + @react-navigation/native <br/>
**The authentification** run with Oauth2 and Imgur API + expo-auth-session  <br/>
**The API call**, with axios  <br/>
**The design**, with StyleSheet.create + react-native-elements + '@expo/vector-icons  <br/>

## Doc <br/>
*to dev...* <br/>
https://reactnative.dev/docs/environment-setup
https://docs.expo.io/
https://apidocs.imgur.com/?version=latest
https://reactnavigation.org/

*to debugg...* <br/>
https://stackoverflow.com/

## Tools <br/>
**Visual Studio Code** to dev in react-native <br/>
**AndroidStudio** : android virtual device manager to get the views in real time and check the result during the dev <br/>
**Expo app on mobile** : to get the views in real time and check the result during the dev <br/>

# 4- Before to run, install npm+expo packages & modules
>npm install

then, answer yes:

>This command requires Expo CLI.<br/>
Do you want to install it globally [Y/n]? y<br/>

if needed:

>npm install -g expo-cli  
>yarn add expo<br/>
>expo install ...<br/>



# 5 -To run the app
*1. on android device*<br/>
open android studio<br/>
configure a  AVD manager (top right of tools bar)<br/>
run the android device<br/>
back to react-native code (on visual studio code for exemple)<br/>
open terminal


> npm run android 


*2. on mobile phone*<br/>
install Expo on mobile<br/>
run it<br/>
back to react-native code (on visual studio code for exemple)<br/>
open terminal

> npm start (or expo start)

scan the qr code with Expo app on mobile phone

---
