import React from 'react';
import Synopsis from './Synopsis';
import PropTypes from 'prop-types';
import { getStories } from '../interface';
import { Container, Header } from 'semantic-ui-react'

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
      <Container text>
        <Container textAlign="center">
          <Header as='h1'>Stories</Header>
        </Container>
          {
            root_stories.map((story, id) =>  <Synopsis id={id} key={id} details={story} /> )
          }
      </Container>
    )
  }
}

StoriesList.propTypes = {
  stories: PropTypes.array
}

export default StoriesList;