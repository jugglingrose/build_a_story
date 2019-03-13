import React from 'react';
import AddText from './AddText';
import { Container } from 'semantic-ui-react'

class Story extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cur_story : {},
    }
  }

  componentDidMount(){
    this.props.getStory( this.props.match.params.id, 
      (story) => {
        console.log("this is story:" + story.id);
        this.setState({cur_story: story});
      }
    );
  }

  render(){
    console.log('render Story');
    console.log(this.state.cur_state);
    return(
      <Container text>
      
        <h2>{this.state.cur_story.title}</h2>
        <p>{this.state.cur_story.text}</p>
        <AddText />
      
      </Container>

    )
  }
}

export default Story;