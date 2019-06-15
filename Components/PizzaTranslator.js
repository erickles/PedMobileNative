import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
        <Button onPress={() => {
            Alert.alert('You tapped the button!');
        }}
        title="Press Me"
        />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('PedMobileNative', () => PizzaTranslator);