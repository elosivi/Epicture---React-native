import * as React from 'react';
import {Text, View } from 'react-native';
import axios from 'axios';
import { ActivityIndicator,Dimensions,StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';



const url = 'https://api.imgur.com/3/gallery/search/day/1?q=cats'
const { width : WIDTH} = Dimensions.get('window');

export default class ImgRequests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: []
    }
  }
  
    componentDidMount(){
      axios.get(
        url,
        {
        headers:{
          Authorization:'Client-ID 0fa8ab9c054485e',
          Accept:'*/*',
        },
       }) 
        .then(res => {
          this.setState({ imgList: res.data.data });
          // console.log ( "RES.DATA===> ",res.data.data)
       
        })
        .catch(err => {
          if (err.response) {
            console.log("ERROR ==> .catch => err.response===>",err.response)
          } else if (err.request) {
            console.log("ERROR ==> .catch => err.request===>",err.request)
          } else {
            console.log("ERROR ==> .catch => else===>",error)
          }
          
      })
    }


    render() {
      const images = this.state.imgList.map(function(name,id) {
        return (
          <View key={id} style={styles.card}> 
            <Text style={styles.title}> {name.title} </Text> 
            <Text style={styles.byUser}> by {name.account_url} </Text>  
            <Image
              source={{ uri: name.link }}
              style={{ width: 200, height: 200 }}
              PlaceholderContent={<ActivityIndicator />}
            />
            <View style={{flex:1}}>
              <Text>{name.views} views</Text>
              <Text>{name.points} points</Text>
            </View>
          </View>
        )
      });
    
      // console.log("render() ==> this.state.imgList:", this.state.imgList)
      return (
        <View>
            <Text h1>Home page</Text>
            <View>{images}</View>
            <Text>(end of list)</Text> 
        </View>
      )
    }
}

  // ======================================= S T Y L E ====================================== //
const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: 'center',
    width : WIDTH,
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    
    backgroundColor: "#eaeaea",
    borderColor:'red',
  },
  title:{
    fontSize:15,
    // color:"black",

  },
  byUser:{
    fontSize:7,
    // color: "red",

  }
})
