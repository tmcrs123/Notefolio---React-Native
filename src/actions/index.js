import {
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  PASSWORD_CHANGED,
  EMAIL_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  TEXT_CHANGED,
  TITLE_CHANGED,
  UPDATE_NOTE,
  RESET_FORM
} from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

/**
 * AUTH
 */

export const passwordChanged = text => ({ type: PASSWORD_CHANGED, payload: text });
export const emailChanged = text => ({ type: EMAIL_CHANGED, payload: text });

export const loginUser = ({ email, password }) => dispatch => {
  dispatch({ type: LOGIN_USER });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      Actions.main();
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    })
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => dispatch({ type: LOGIN_USER_SUCCESS, payload: user }))
        .catch(() => dispatch({ type: LOGIN_USER_FAIL }));
    });
};

export const getNotes = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/notes`)
      .on('value', snapshot => {
        dispatch({ type: GET_NOTES, payload: snapshot.val() });
      });
  };
};

export const createNote = note => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/notes/`)
      .push(note)
      .then(() => {
        Actions.pop();
        dispatch({ type: CREATE_NOTE });
      });
  };
};

export const saveNote = ({ title, text, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/notes/${uid}`)
      .set({ title, text })
      .then(() => {
        Actions.main();
        dispatch({ type: RESET_FORM });
      });
  };
};

export const deleteNote = uid => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/notes/${uid}`)
      .remove()
      .then(() => Actions.pop());
  };
};

//action creator that changes the state of the reducer
export const updateNote = ({ prop, value }) => ({ type: UPDATE_NOTE, payload: { prop, value } });

export const titleChanged = text => ({ type: TITLE_CHANGED, payload: text });
export const textChanged = text => ({ type: TEXT_CHANGED, payload: text });
export const resetForm = () => ({ type: RESET_FORM });
