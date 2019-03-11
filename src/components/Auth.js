import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: undefined
    }
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callback: {
        signInSuccessWithAuthResult: () => false
      }
    }
  }
  
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
    );
  };

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  
  render() {
    if(this.state.isSignedIn === true) {
      return (
        <>
        <div>I'm logged in</div>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </>
      )
    }
    else if(this.state.isSignedIn === false) {
      return (
        <>
          <div>NOT logged in</div>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </>
      )
    }
    else{
      return (
        <div>undefined logged in state</div>
      )
    }

  }
}

export default Auth;