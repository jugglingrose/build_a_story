import React from 'react';
import AddText from './AddText';
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Story extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cur_story : undefined
    }
  }

  componentDidMount(){
    console.log('Story component did mount');
    this.props.getStory( this.props.match.params.id, 
      (story) => {
        console.log(story);
        this.setState({cur_story: story});
      }
    );
  }

  render(){
    console.log('render Story');
    if (this.state.cur_story === undefined) {
      return (
        <div>Loading...</div>
      )
    }

    return(
      <Container text>
        <h2>title</h2>
        <p>text</p>
       
        <AddText /> 
      </Container>

    )
  }
}

export default Story;