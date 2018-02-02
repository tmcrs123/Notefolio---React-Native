import React from 'react';
import { TextInput } from 'react-native';

const Input = props => (
  <TextInput
    placeholder={props.placeholder}
    style={[style.textInputStyle, props.overideInputStyle]}
    onChangeText={props.onChangeText}
    secureTextEntry={props.secureTextEntry}
    value={props.value}
    underlineColorAndroid="transparent"
  />
);

const style = {
  textInputStyle: {
    height: 40,
    borderColor: '#ddd',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }
};

export default Input;
