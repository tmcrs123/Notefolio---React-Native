import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Note extends Component {
  onNotePress() {
    Actions.editNote({ note: this.props.note });
  }

  render() {
    const { title } = this.props.note;
    return (
      <TouchableWithoutFeedback onPress={() => this.onNotePress()}>
        <View style={styles.viewStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18
  },
  viewStyle: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    width: '90%'
  }
};

export default Note;
