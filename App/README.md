
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
*1-to start*:
>npm install

then, answer yes:

>This command requires Expo CLI.<br/>
Do you want to install it globally [Y/n]? y<br/>

*2-if needed to run*:

>npm install -g expo-cli  
>yarn add expo <br/>
>expo install ...

*3-if needed to debugg*:

>npm cache clean  
>npm cache clean --force

If you want to make sure everything is consistent, use:
>npm cache verify

to use a temporary cache instead of nuking the actual one:
>npm install --cache /tmp/empty-cache

>npm install
>npm install npm -g

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

# 6 -Some buggs and solutions

**1 General**<br/>
*solution:*<br/>
Verify package.json : module and version are they ok ?<br/>
If yes try to re-install with npm install<br/>
if not : install the package .... or write it (name+version) + npm install<br/>

**2 ERROR ENOENT**<br/>
*error:*<br/>
> npm ERR! code ENOENT
npm ERR! syscall open

*solution:*<br/>
Are you in the good directory?<br/>


**3 ERROR ELIFECYCLE**<br/>
*error:*<br/>
> npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ android: `expo start --android`

*solution:*<br/>
1- verify the port, on windows10:<br/>
> netstat -ano | findstr :19000 

idem for :<br/>
"packagerPort": 19001,<br/>
"packagerPid": 7440,<br/>a
"devToolsPort": 19002,<br/>
"expoServerPort": 19000<br/>

if needed kill<br/>

> taskkill /PID PORT_NUMBER /F

Locate the PID of the process that's using the port you want and replace PORT_NUMBER with the PID number (process identifier)

2- try to clean cache
>npm cache clean --force