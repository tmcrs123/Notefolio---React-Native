import React from 'react';
import { View } from 'react-native';

const Paper = props => (
  <View style={[styles.containerStyle, props.overidePaperStyle]}>{props.children}</View>
);

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ddd'
  }
};

export default Paper;
