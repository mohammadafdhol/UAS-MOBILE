import React from 'react';
import { Text ,View,FlatList, Image, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class ViewLcd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("https://afdhol.000webhostapp.com/getDataLcd.php")
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
                            <ListItem onPress={()=>this.props.navigation.navigate("DetailLcd",{code_lcd:item.code_lcd})}
                            title={item.code_lcd}
                            leftAvatar={{
                                 source: { uri:"https://afdhol.000webhostapp.com/api/uploads/"+item.gambar},
                            }}
                        />

                        
                    )
                    }
                />
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('post') }>
                        <Text style={styles.txtBox2}>Tambah LCD</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('HapusLcd') }>
                        <Text style={styles.txtBox2}>Hapus LCD</Text>
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
        flex: 0.8,
        margin:20,
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
    }
});
