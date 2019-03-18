import React from 'react';
import { Container } from 'semantic-ui-react'

class Footer extends React.Component{
  render(){
    return(
      <Container textAlign='center' fluid className='footer'>
        <p>Copyright 2019</p>
      </Container>
    )
  }
}

export default Footer;