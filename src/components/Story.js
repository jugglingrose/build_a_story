import React from 'react';
import AddText from './AddText';
import { Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Story extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cur_story : undefined,
      child_stories: undefined,
    }
  }

  componentDidMount(){
    console.log('Story componentDidMount()');
    this.props.getStory( this.props.match.params.id, 
      (story) => {
        this.setState({cur_story: story});
      }
    );

    this.props.getChildStories( this.props.match.params.id, 
      (stories) => {
        this.setState({child_stories : stories}); 
      })
  }


  render(){
    console.log('render <Story />');
    const areChildren = this.state.child_stories != undefined;
    console.log("are Children?" + areChildren);
    if (this.state.cur_story === undefined || this.state.child_stories === undefined) {
      return (
        <div>Loading...</div>
      )
    }

    return(
      <Container text>
        <h2>{this.state.cur_story.title}</h2>
        <p>{this.state.cur_story.text}</p>
        
        {
            this.state.child_stories.map((story)=> <Link to={"/story/" + story.id}> <p>{story.title}</p> </Link> )

          }
        
      
        <AddText /> 
      </Container>

    )
  }
}

export default Story;