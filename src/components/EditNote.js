import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Paper from './commons/Paper';
import LargeInput from './commons/LargeInput';
import Button from './commons/Button';
import Input from './commons/Input';
import * as actions from '../actions';
import _ from 'lodash';
import { ConfirmModal } from './commons/ConfirmModal';

class EditNote extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.note, (value, prop) => {
      this.props.updateNote({ prop, value });
    });
  }

  onAccept() {
    this.props.deleteNote(this.props.uid);
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  saveNote() {
    const { title, text, uid } = this.props;
    this.props.saveNote({ title, text, uid });
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
            placeholder="Note title"
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
            placeholder="Your notes here..."
            onChangeText={text => this.props.textChanged(text)}
          />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button
            overideButtonStyle={{ flex: 0.45, borderRadius: 0 }}
            onPress={() => this.saveNote()}
          >
            Edit
          </Button>
          <Button
            overideButtonStyle={{
              borderColor: 'red',
              borderRadius: 0,
              backgroundColor: 'red',
              flex: 0.45
            }}
            onPress={() => this.setState({ showModal: true })}
          >
            Delete
          </Button>
        </View>

        <ConfirmModal
          onAccept={() => this.onAccept()}
          onDecline={() => this.onDecline()}
          visible={this.state.showModal}
        />
      </Paper>
    );
  }
}

const styles = {
  containerStyle: { flexDirection: 'column', justifyContent: 'flex-start', flex: 1 }
};

function mapStateToProps(state) {
  const { title, text, uid } = state.addNote;
  return { title, text, uid };
}

export default connect(mapStateToProps, actions)(EditNote);
