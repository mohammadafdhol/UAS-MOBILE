import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import Textarea from 'react-native-textarea';
import axios from 'axios';
import Header from './Header'

export default class HapusLcd extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code_lcd: "",
    }
  }

  _hapus = () => {
    axios.post('https://afdhol.000webhostapp.com/HapusLcd.php', {
      code_lcd: this.state.code_lcd,
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
            <Text> Kode LCD : </Text>
          </View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
            onChangeText={(code_lcd) => this.setState({code_lcd})}
            value={this.state.code_lcd}
          />
        </View>

          <TouchableHighlight
            style={{
              width: '80%', height: 50, marginHorizontal: '10%', marginTop : 20, justifyContent: 'center', borderRadius: 5, alignItems: 'center', backgroundColor: 'brown'
            }}
            onPress={
              () => {
                this._hapus();
                this.props.navigation.navigate('Main')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Hapus Data</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}