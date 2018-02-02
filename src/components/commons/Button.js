import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ overideButtonStyle, buttonTextStyle, children, onPress }) => (
  <TouchableOpacity style={[styles.buttonStyle, overideButtonStyle]} onPress={onPress}>
    <Text style={[styles.buttonTextStyle, buttonTextStyle]}>{children}</Text>
  </TouchableOpacity>
);

const styles = {
  buttonStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    backgroundColor: '#007aff'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
