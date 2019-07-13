import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class UpdateLcd extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      code_lcd: "",
      merk_lcd: "",
      type_lcd: "",
      
    }
  }

  _simpan = () => {
    axios.post('https://afdhol.000webhostapp.com/UpdateLcd.php', {
      
      code_lcd: this.state.code_lcd,
      merk_lcd: this.state.merk_lcd,
      type_lcd: this.state.type_lcd,

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{flex: 1,
        backgroundColor: 'white',}}>
            <Header header={"Mohammad Afdhol 1715051078"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
            <Text>Kode LCD : </Text>
          </View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
            onChangeText={(code_lcd) => this.setState({code_lcd})}
            value={this.state.code_lcd}/>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Merk LCD : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(merk_lcd) => this.setState({merk_lcd})}
              value={this.state.merk_lcd}
            />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Type LCD : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(type_lcd) => this.setState({type_lcd})}
              value={this.state.type_lcd}
            />
        </View>

          <TouchableHighlight
            style={{
              width: '80%', height: 50, marginHorizontal: '10%', marginTop : 20, justifyContent: 'center', borderRadius: 5, alignItems: 'center', backgroundColor: 'brown'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Main')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Simpan Data</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}