import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

class Nav extends React.Component{
  render(){

  var isSignedIn = this.props.isSignedIn;

    return(
      <Container fluid className='nav'>
        <ul>
        {isSignedIn ? (
            <a onClick={() => firebase.auth().signOut()}><li>Log Out</li></a>
          ) : (
            <Link to="/login"><li>Log In</li></Link>
          )
        }
        
        </ul>
        
      </Container>
    )
  }
}

export default Nav;