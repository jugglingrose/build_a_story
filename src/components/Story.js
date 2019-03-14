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
        console.log(story);
        this.setState({cur_story: story});
      }
    );

    this.props.getChildStories( this.props.match.params.id, 
      (stories) => {
        console.log("here are my child stories:" + stories);
        this.setState({child_stories : stories}); 
      })
  }

  componentWillUnmount(){
    console.log("component unmounted");
  }

  render(){
    console.log('render <Story />');
    if (this.state.cur_story === undefined || this.state.child_stories === undefined) {
      return (
        <div>Loading...</div>
      )
    }

    console.log("child_stories:" + this.state.child_stories[0].id);
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