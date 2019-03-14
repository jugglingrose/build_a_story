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

  //Grab all of our stories from our database with their key:value pairs and set local state//
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

    // Here we want to filter out stories and gather only our top level stories.  These stories have no parent //
    var root_stories = Object.values(this.state.stories).filter((story) => story.parent_id == null);
    console.log(root_stories);

    // Display our root stories using synopsis component //
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