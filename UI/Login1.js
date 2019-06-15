import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bigBlue: {
      color: 'steelblue',
      fontWeight: 'bold',
      fontSize: 20
    },
    smallBlue: {
      color: 'steelblue',
      fontWeight: 'bold',
      fontSize: 15
    },
  });

export default class Login1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: '', 
    password: '',
    usernamePlaceholder: 'Informe seu CPF ou CNPJ',
    profile: 1};
  }

  switchProfile(){
      this.setState({profile: this.state.profile === 1 ? 2 : 1, usernamePlaceholder: this.state.profile === 1 ? 'Informe seu CPF' : 'Informe seu CPF ou CNPJ'});
      //Alert.alert(this.state.profile.toString());
  }

  doLogin(){
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>

        <Image style={{flex: 4 , margin:10, width: undefined, height: undefined }} source={require('../images/dsmlogo.png')} />

        <View style={{flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.bigBlue}>Seja bem-vindo(a)</Text>
            <Text style={styles.smallBlue}>Por favor, identifique-se:</Text>
        </View>

        

      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('PedMobileNative', () => Login1);