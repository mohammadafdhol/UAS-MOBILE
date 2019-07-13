import React from 'react';
import { Text ,View,FlatList, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios'); 
export default class ViewPnjm extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: []
        };
    }
    componentDidMount(){
    axios.get('https://afdhol.000webhostapp.com/getPeminjaman.php')
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
            <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"Mohammad Afdhol 1715051078"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                            
                            <Text>ID Peminjaman : {item.id_pnjm}</Text>
                            <Text>NIM Mahasiswa : {item.nim_mhs}</Text>
                            <Text>Kode LCD : {item.code_lcd}</Text>
                            <Text>Tanggal peminjaman : {item.tanggal_pnjm}</Text>
                            <Text></Text>
                            </View>
                    

                        
                    )
                    }
                />
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('TambahPnjm') }>
                        <Text style={styles.txtBox2}>Tambah Peminjaman</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('UpdatePnjm') }>
                        <Text style={styles.txtBox2}>Edit Peminjaman</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('HapusPnjm') }>
                        <Text style={styles.txtBox2}>Hapus Peminjaman</Text>
                    </TouchableHighlight>
                </View>
            </View>
            </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            backgroundColor: 'white',
        },
        box1: {
            flex: 0.1,
            margin:5,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
        },
        txtBox2: {
            color: 'white',
            alignItems: 'center',
            fontSize: 18,
    
        },
        BoxStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'brown',
          borderRadius: 5,
          width: '80%',
          height: 50,
          marginBottom : 20
        }
    });
    
