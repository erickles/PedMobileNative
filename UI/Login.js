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

export default class Login extends Component {
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
    const {navigate} = this.props.navigation;
    navigate('Login1', {name: 'Jane'})}
    //Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>

        <Image style={{flex: 4 , margin:10, width: undefined, height: undefined }} source={require('../images/dsmlogo.png')} />

        <View style={{flex: 2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.bigBlue}>Seja bem-vindo(a)</Text>
            <Text style={styles.smallBlue}>Por favor, identifique-se:</Text>
        </View>

        <Button style={{flex: 1}} onPress={this.switchProfile.bind(this)} title="Empresa Representante" />
        <Button style={{flex: 1}} onPress={this.switchProfile.bind(this)} title="Colaborador" />

        <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1}} placeholder={this.state.usernamePlaceholder} onChangeText={(username) => this.setState({username})} />

        <TextInput style={{flex:1, height: 40, borderColor: 'gray', borderWidth: 1}} placeholder="Informe sua senha" onChangeText={(password) => this.setState({password})} />

        <Button onPress={this.doLogin.bind(this)} title="Entrar" />

        <View style={{flex: 2, flexDirection: 'column', justifyContent: 'space-evenly', paddingTop: 5, alignItems: 'center'}}>
            <Text style={styles.smallBlue}>Primeiro acesso</Text>
            <Text style={styles.smallBlue}>Esqueci minha senha</Text>    
        </View>

      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('PedMobileNative', () => Login);