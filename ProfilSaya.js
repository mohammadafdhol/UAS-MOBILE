import React from 'react';
import { Text ,View,Image, FlatList,StyleSheet } from 'react-native';
import Header from "./Header";

const foto = require('./afdhol19.jpg')
const axios = require('axios');
export default class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("http://mhs.rey1024.com/apibudaya/getListCategory.php")
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error); 
  });

}
    render() {
        return (
            <View style={styles.vHeader}>
            <Header header={"Mohammad Afdhol 1715051078"} />
                <View style={styles.bioContainer}>
                <View style={styles.photoContainer}>
                                <Image source={foto} style={styles.photo}/>
                            </View>
                           <View style={styles.detailContainer}>
                               <Text style={styles.textBio}>Nama :Mohammad Afdhol</Text>
                               <Text style={styles.textBio}>NIM : 1715051078</Text>
                               <Text style={styles.textBio}>Kelas : 4D</Text>
                           </View>
                       </View>
                     </View>
        
            );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor : 'white'
          },
          detailContainer : {
            flex: 0.6,
            justifyContent: 'center',
            marginLeft:25,
        },
        vHeader: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
        photo:{
            width: 150,
            height: 200,
            // backgroundColor: '#005ff0',
        },
        bioContainer : {
          flex: 1,
          flexDirection: 'row',
          marginTop: 10,
          marginBottom :10,
          backgroundColor : "brown",
        
        },
        photoContainer : {
          flex: 0.4,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
          borderRadius:40
        },
        textBio:{
          fontSize: 15,
          justifyContent: 'center',
          color : 'white'
        },
        text:{
            fontSize:20,
            color:'white',
        },
        });
