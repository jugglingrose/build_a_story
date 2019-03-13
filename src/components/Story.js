import React from 'react';
import AddText from './AddText';
import { Container } from 'semantic-ui-react'

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

    console.log(this.state.cur_story.child_story[1].title);
    return(
      <Container text>
        <h2>{this.state.cur_story.title}</h2>
        <p>{this.state.cur_story.text}</p>
        {
          this.state.cur_story.child_story.map((story, id) => <p>{this.state.cur_story.child_story[id].title}</p> )
        }
       
        
       
        <AddText />
      
      </Container>

    )
  }
}

export default Story;