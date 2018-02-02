import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import Note from './Note';
import Paper from './commons/Paper';

class NoteList extends Component {
  componentWillMount() {
    this.props.getNotes();
    this.createDataSource(this.props.notes);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.notes);
  }

  createDataSource(notes) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(notes);
  }

  renderRow(note) {
    return <Note note={note} />;
  }

  render() {
    if (Object.values(this.props.notes).length > 0) {
      return (
        <ListView
          style={{ flexDirection: 'column', marginBottom: 10 }}
          contentContainerStyle={{ alignItems: 'center' }}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    }
    return (
      <Paper overidePaperStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.noNotes}>You don't have any notes yet</Text>
        <Text style={styles.noNotes}>Add a note to get started</Text>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  const notes = _.map(state.notes, (val, uid) => ({ ...val, uid }));
  return { notes };
}

const styles = {
  noNotes: {
    fontSize: 22
  }
};

export default connect(mapStateToProps, actions)(NoteList);
