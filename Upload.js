import React from 'react';
import {Modal, StyleSheet, Text, View, Button, ActivityIndicator,Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Pilih Gambar',
    takePhotoButtonTitle:'Ambil Dari Kamera Hp',
    chooseFromLibraryButtonTitle:'Ambil Dari Gallery',
}
export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state={
            avatarSource:null,
            uri:'',
            fileName:'',
            loading:false,
        };
    }

pilihGambar=()=>{
 //   new ImagePicker();
    //var ImagePicker = require('react-native-image-picker');
    //alert('clicked');
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
      
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }else {      
          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      
          this.setState({
            avatarSource: { uri: response.uri },
            uri:response.uri,
            fileName: response.fileName
          });

          
        }
      });
}

uploadGambar=()=>{
    console.log('mulai upload');
    this.setState({loading:true})
    
    const data = new FormData();
    data.append('fileToUpload', {
        uri: this.state.uri,
        type: 'images/jpeg',
        name: this.state.fileName,
    });
    const url="https://afdhol.000webhostapp.com/api/upload.php"
    fetch(url, {
        method:'post',
        body:data
    })
    .then((response) => response.json())
    .then((responseJson) =>
    {
        console.log(responseJson);
        this.setState({loading:false})
        
    });
        
}


    render(){
        return (

            <View style={styles.container}>
            {
                (this.state.loading==true)&&
                (
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.loading}
                    onRequestClose={()=>{
                        alert('Modal has been closed.');
                    }}
                >
                    <ActivityIndicator
                        animating={true}
                        style={styles.indicator}
                        size="large"
                    />
                </Modal>
            
                )
            }
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Upload Foto</Text>
                </View>

                <View style={styles.gambar}>
                    <Image source={this.state.avatarSource}
                    style={{height:500,width:300,margin:5}}
                    />
                </View>
                

                <View style={styles.vButton}>
                    <View style={styles.button}>
                        <Button onPress={this.pilihGambar} color="#2F4F4F" title="Pilih Gambar"/>
                    </View>

                    <View style={styles.button2}>
                        <Button onPress={this.uploadGambar} color="#2F4F4F" title="Upload Gambar" />
                    </View>

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    },

indicator:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    height:80
},

header:{
    backgroundColor:'#2F4F4F',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },

textHeader:{
    color:'white',
    fontSize:20
    },  

gambar: {
    justifyContent:'center',
    alignItems:'center'
    }, 

vButton:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    },  

button:{
    flexDirection:'column',
    marginRight:90,
    justifyContent:'center',
    alignItems:'center'
    },

button2:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
    },

textButton:{
    color:'white'
    }

});