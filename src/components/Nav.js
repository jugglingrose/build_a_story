import React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  render(){

  var isSignedIn = this.props.isSignedIn;

    return(
      <Container fluid className='nav'>
        <ul>
        {isSignedIn ? (
            <li>Log Out</li>
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