import React from 'react';
import Synopsis from './Synopsis';
import PropTypes from 'prop-types';
import { getStories } from '../interface';

class StoriesList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stories : []
    };
  }

  componentDidMount(){
    this.props.getStories(
      (stories) => {
        this.setState({ stories : stories});
      }
    );
  }

  render(){
  
    return(
      <div>
        <h1>Stories</h1>

        {
          this.state.stories.map((story, id) => <Synopsis key={id} details={this.state.stories[id]} /> )
        }

      </div>
    )
  }
}

StoriesList.propTypes = {
  stories: PropTypes.array
}

export default StoriesList;