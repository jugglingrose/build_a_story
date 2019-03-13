import React from 'react';
import Synopsis from './Synopsis';
import PropTypes from 'prop-types';
import { getStories } from '../interface';

class StoriesList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      stories : {}
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
    if (this.state.stories === undefined) {
      return (
        <div>Loading...</div>
      )
    }

    var root_stories = Object.values(this.state.stories).filter((story) => story.parent_id == null);
    console.log(root_stories);

    return(
      <div>
        <h1>Stories</h1>
        {
          root_stories.map((story, id) =>  <Synopsis id={id} details={story} /> )
        }
      </div>
    )
  }
}

StoriesList.propTypes = {
  stories: PropTypes.array
}

export default StoriesList;