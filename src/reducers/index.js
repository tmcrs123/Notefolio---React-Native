import { combineReducers } from 'redux';
import NotesReducer from './NotesReducer';
import AuthReducer from './AuthReducer';
import AddNoteReducer from './AddNoteReducer';

export default combineReducers({
  notesInfo: NotesReducer,
  auth: AuthReducer,
  addNote: AddNoteReducer
});
