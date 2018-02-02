import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reduxThunk from 'redux-thunk';
import keys from '../keys';
import Router from './Router';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(keys);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
