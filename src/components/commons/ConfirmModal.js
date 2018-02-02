import React from 'react';
import { Text, View, Modal } from 'react-native';
import Button from './Button';

export const ConfirmModal = ({ visible, onAccept, onDecline }) => (
  <Modal
    visible={visible}
    supportedOrientations={[
      'portrait',
      'portrait-upside-down',
      'landscape',
      'landscape-left',
      'landscape-right'
    ]}
    animationType="slide"
    onRequestClose={() => {}}
  >
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}> Delete?</Text>
      <Button overideButtonStyle={{ marginTop: 20 }} onPress={onAccept}>
        Yes
      </Button>
      <Button
        overideButtonStyle={{
          borderColor: 'red',
          backgroundColor: 'red',
          marginTop: 20
        }}
        onPress={onDecline}
      >
        No
      </Button>
    </View>
  </Modal>
);

const styles = {
  textStyle: {
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    flex: 2,
    justifyContent: 'center',
    padding: 30
  }
};
