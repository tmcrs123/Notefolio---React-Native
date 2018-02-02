import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import Input from './commons/Input';
import Paper from './commons/Paper';
import Button from './commons/Button';
import * as actions from '../actions';
import Spinner from './commons/Spinner';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  loginUser() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorTextStyle}>Authentication Failed</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button
        onPress={() => this.loginUser()}
        overideButtonStyle={{
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 30
        }}
      >
        Login
      </Button>
    );
  }

  render() {
    return (
      <Paper overidePaperStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.headerText}>Notefolio</Text>
        <Input
          overideInputStyle={styles.inputStyleOveride}
          placeholder="john.doe@gmail.com"
          onChangeText={text => this.onEmailChange(text)}
        />
        <Input
          overideInputStyle={styles.inputStyleOveride}
          placeholder="password"
          onChangeText={text => this.onPasswordChange(text)}
          secureTextEntry
        />
        {this.renderButton()}
        {this.renderError()}
      </Paper>
    );
  }
}

const styles = {
  headerText: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  inputStyleOveride: {
    width: 200,
    marginTop: 30
  },
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
};

function mapStateToProps({ auth }) {
  return { email: auth.email, password: auth.password, error: auth.error, loading: auth.loading };
}

export default connect(mapStateToProps, actions)(LoginForm);
