import React from 'react';
import Synopsis from './Synopsis';
import PropTypes from 'prop-types';

class StoriesList extends React.Component{
  render(){
    var stories = this.props.stories;
    return(
      <div>
        <h1>Stories</h1>

        {
          stories.map((story, id) => <Synopsis key={id} details={this.props.stories[id]} /> )
        }

      </div>
    )
  }
}

StoriesList.propTypes = {
  stories: PropTypes.array
}

export default StoriesList;