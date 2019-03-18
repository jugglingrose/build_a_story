import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react'



class Synopsis extends React.Component{
  render(){
    console.log("synopsis rendered");
    var story = this.props.details;
    console.log("synopsis story objet key:" + story.id);

    /* is story.id okay?  It relies on the value id rather than the key name.  could this cause problems later? */
    return(
      <Container className="synopsis_box">   
        <Container textAlign="center" className="synopsis_title">
          <Link to= {"/story/" + story.id}> 
            <Header as='h2'>{story.title}</Header> 
          </Link>
        </Container> 
        <p className="synopsis_text">{story.chapter.substr(0,100)}...</p>
      </Container>
    )
  }
}

Synopsis.propTypes = {
  story: PropTypes.object
}

export default Synopsis;