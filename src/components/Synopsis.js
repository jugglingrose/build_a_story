import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Synopsis extends React.Component{
  render(){
    console.log("synopsis rendered");
    var story = this.props.details;
    console.log(story);
    console.log(this.props.key);
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