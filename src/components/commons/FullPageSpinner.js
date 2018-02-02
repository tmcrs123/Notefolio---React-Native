import React from 'react';
import { View } from 'react-native';
import Spinner from './Spinner';

const FullPageSpinner = props => (
  <View style={[styles.containerStyle, props.overidePaperStyle]}>
    <Spinner />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ddd'
  }
};

export default FullPageSpinner;
