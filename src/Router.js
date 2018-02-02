import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import LoginForm from './components/LoginForm';
import EditNote from './components/EditNote';
import * as actions from './actions';

class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth" initial component={LoginForm} />

          <Scene key="main">
            <Scene
              key="noteList"
              rightTitle="Add Note"
              onRight={() => Actions.addNote()}
              rightButtonTextStyle={{ fontSize: 18, paddingLeft: 5 }}
              component={NoteList}
              title={'Note List'}
            />
            <Scene
              key="addNote"
              onExit={() => this.props.resetForm()}
              component={AddNote}
              title="Add Note"
            />
            <Scene
              onExit={() => this.props.resetForm()}
              key="editNote"
              component={EditNote}
              title="Edit Note"
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default connect(null, actions)(RouterComponent);
