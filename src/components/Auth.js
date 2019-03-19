import React from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Auth extends React.Component {
  constructor() {
    super();
  
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


  /*componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
    );
  };*/

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  
  render() {
    /*if(this.props.isSignedIn === true) {
      return (
        <>
        <div>Logged In</div>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        </>
      )
    }*/
    if(this.props.isSignedIn === false) {
      return (
        <>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </>
      )
    }
    /*else{
      return (
        <div>undefined logged in state</div>
      )
    }*/

  }
}

export default Auth;