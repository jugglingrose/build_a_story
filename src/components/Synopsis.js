import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Synopsis extends React.Component{
  render(){
    console.log("synopsis rendered");
    var story = this.props.details;
    console.log("synopsis story objet key:" + story.id);
    

    /* is story.id okay?  It relies on the value id rather than the key name.  could this cause problems later? */
    return(
      <div>
        
        <Link to= {"/story/" + story.id}> <h2>{story.title}</h2> </Link>
        <p>{story.text}</p>
      </div>
    )
  }
}

Synopsis.propTypes = {
  story: PropTypes.object
}

export default Synopsis;