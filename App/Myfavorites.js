

import * as React from 'react';
import {Text, View } from 'react-native';
import axios from 'axios';
import { ActivityIndicator,Dimensions,StyleSheet,ScrollView, } from 'react-native';
import { Image } from 'react-native-elements';



const baseURL = 'https://api.imgur.com/'
const path = '3/account/'
const username= 'Elodie31'
const favorites='/favorites/'
const page=''
const favoritesSort=''

const { width : WIDTH} = Dimensions.get('window');

export default class Myfavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesList: []
    }
  }
  
    // componentDidMount(){
    //   url=baseURL+path+username+favorites+page+favoritesSort
    //   console.log("===>call api: ",url)
    //   axios.get(
    //     url,
    //     {
    //     headers:{
    //       Authorization:'Client-ID 0fa8ab9c054485e',
    //       Accept:'*/*',
    //     },
    //    }) 
    //     .then(res => {
    //       this.setState({ favoritesList: res.data.data });
    //       // console.log ( "RES.DATA===> ",res.data.data)
       
    //     })
    //     .catch(err => {
    //       if (err.response) {
    //         console.log("ERROR ==> .catch => err.response===>",err.response)
    //       } else if (err.request) {
    //         console.log("ERROR ==> .catch => err.request===>",err.request)
    //       } else {
    //         console.log("ERROR ==> .catch => else===>",error)
    //       }
          
    //   })
    // }


    render() {
      const images = this.state.favoritesList.map(function(name,id) {
        return (
         
          <View key={id} style={styles.card}> 
            <Text>Test </Text>
            {/* <Text style={styles.title}> {name.title} </Text> 
            <Text style={styles.byUser}> by {name.account_url} </Text>  
            <Image
              source={{ uri: name.link }}
              style={{ width: 200, height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={styles.info}>
              <Text style={styles.infoText}>{name.views} views</Text>
              <Text style={styles.infoText}>{name.points} points</Text>
            </View> */}
          </View>
        

         
        )
      });
      // console.log("render() ==> this.state.favoritesList:", this.state.favoritesList)
      return (
        <ScrollView>
         <View>
            <Text style={styles.pagetitle}>My favorites</Text>
            {/* <View>{images}</View> */}
            
        </View>
        </ScrollView>
      )
    }
  }

  // ======================================= S T Y L E ====================================== //
const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: 'center',
    width : WIDTH-50,
    marginTop: 12,
    padding: 12,
    borderRadius: 15,
    backgroundColor: "#1F3451",
    borderColor:'#5B738F',
    borderWidth:1,
  },
  pagetitle:{
    marginTop:20, 
    width: WIDTH, 
    textAlign:'center', 
    height:'50', 
    backgroundColor:'#56BFC0',
  },
  title:{
    fontSize:20,
    color:"#F7FAFA",
    // marginBottom:-20,

  },
  byUser:{
    fontSize:10,
    color: "#56BFC0",
    marginBottom:5,
    marginTop:5,

  },
  info:{
    display:'flex',
    
  },
  infoText:{
    // flex:2,
    color:"#5B738F",
  }
})
