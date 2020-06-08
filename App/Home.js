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

// =========================== T E S T ==================================== //
// const auth:"0e5e6710ac6c131800f1dbc844a6f8759187b78b"
// export default function Home() {

//     function getImgFromImgur() {
//         return fetch('https://reactnative.dev/picture.json',{
//             method: 'GET',
//             headers: {
//                 Authorization : auth
//             })
//           .then((response) => response.json())
//           .then((json) => {
//             return json.picture;
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }

//         return (
//             <View>
//                 <Text>All images</Text>
//             </View>
//           );
    
// }