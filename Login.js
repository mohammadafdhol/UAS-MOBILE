import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,Image} from "react-native";
import Header from "./Header";   
class Login extends Component {
  static navigationOptions = {
      header: null
  }
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',

      };
    }
    Login= () =>{
      if(this.state.username == 'Afdhol' && this.state.password == '1234'){
        this.props.navigation.navigate('Main')
      }else{
        Alert.alert('Masukan Username dan Password yang Benar!!!');
    }
  }
  render() {     
      return (
        <View style={styles.vMain}>
        <ScrollView>            
            <View style={styles.vHeader}>
                <Header header={"Aplikasi Mobile Mohammad Afdhol 1715051078"} />
                <View style={styles.box4}>
                <Text style={styles.txtBox4}>SISTEM PEMINJAMAN LCD</Text>
                </View>
                    <Image 
            			style={styles.gambar} 
            			source={require("./lcd.png")} 
            			resizeMode = "stretch" 
        			/> 
            <View style={styles.box}>
               	<View style={styles.box1}>
                    <Text style={styles.textInput}>Username</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Username atau Email"  
                  onChangeText={username => this.setState({ username})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.textInput}>Password</Text>
                  <TextInput
                  style={styles.txtBox1}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>LOGIN</Text>
                  </TouchableHighlight>
                  </View>
                </View>   
            </View>
        </ScrollView>
        </View>
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
      flex: 1,
      backgroundColor: 'white',
    },
    vHeader: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 0.8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:500,
        borderRadius: 5,
        margin:10
    },
    box4: {
      flex: 0.1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      margin : 20
  }, 
  txtBox4: {
      color: 'brown',
      alignItems: 'center',
      fontSize: 25,
  },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
    },
    gambar:{
        marginTop : 10,
        height: 150,
        width: 150,
    },
    txtBox1: {
      width: 220,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#191970',
      alignItems: 'center',
      justifyContent: 'center', 
      
    },
    textBox1:{
      color: 'white',
      fontSize: 15,    
    },
    textInput:{
        color: 'black',
        fontSize: 15,    
      },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'white',
      fontSize: 20,
      width: '100%',
      height: 40, 
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'brown',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '100%',
      height: 50, 
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});
export default Login;