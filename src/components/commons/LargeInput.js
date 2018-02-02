import React from 'react';
import { TextInput } from 'react-native';

const LargeInput = props => (
  <TextInput
    multiline
    placeholder={props.placeholder}
    autoCorrect={false}
    style={[style.textInputStyle, props.overideLargeInputStyle]}
    onChangeText={props.onChangeText}
    value={props.value}
    underlineColorAndroid="transparent"
  />
);

const style = {
  textInputStyle: {
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

export default LargeInput;
