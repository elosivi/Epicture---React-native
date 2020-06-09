import * as React from 'react';
import {Text, View } from 'react-native';
import axios from 'axios';

const url = 'https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats'

export default class ImgRequests extends React.Component {
    state = {
      imgList: []
    }
  
    componentDidMount() {
      axios.get('url')
        .then(res => {
          const imgList = res.data;
          this.setState({ imgList });
        })
    }
  
    render() {
     const {imgList} = this.state;
     return (
         <View>
            <Text>Home page</Text>
            { 
            imgList.map(img => <Text>{img.title}</Text>)
            }
        
        </View>
      )
    }
  }

