import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Paper from './commons/Paper';
import LargeInput from './commons/LargeInput';
import Button from './commons/Button';
import Input from './commons/Input';
import * as actions from '../actions';

class AddNote extends Component {
  state = { inputText: '' };

  createNote() {
    const { title, text } = this.props;
    this.props.createNote({ title, text });
  }

  render() {
    return (
      <Paper
        overidePaperStyle={{
          backgroundColor: '#ddd',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Input
            overideInputStyle={{ marginTop: 10, marginBottom: 10, flex: 0.9 }}
            value={this.props.title}
            placeholder="The title of your note here..."
            onChangeText={text => this.props.titleChanged(text)}
          />
        </View>
        <View style={{ flexDirection: 'row', flex: 0.75 }}>
          <LargeInput
            overideLargeInputStyle={{
              flex: 0.9,
              marginTop: 10,
              marginBottom: 20
            }}
            value={this.props.text}
            placeholder="Your note here..."
            onChangeText={text => this.props.textChanged(text)}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button
            overideButtonStyle={{ borderRadius: 0, flex: 0.9 }}
            onPress={() => this.createNote()}
          >
            Create
          </Button>
        </View>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  const { title, text } = state.addNote;
  return { title, text };
}

export default connect(mapStateToProps, actions)(AddNote);
