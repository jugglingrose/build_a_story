import React from 'react';
import { Link } from 'react-router-dom';
import AddText from './AddText';
import { Container, Header, Grid} from 'semantic-ui-react';

class Story extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cur_story : undefined,
      child_stories: undefined,
    }
    this.getChildren = this.getChildren.bind(this);
  }

  getChildren(){
     /* Gather our cur_story child stories*/
     this.props.getChildStories( this.props.match.params.id, 
      (stories) => {
        this.setState({child_stories : stories}); 
      });
  }

  /* Gather our Current Story based on our url param*/
  componentDidMount(){
    console.log('Story componentDidMount()');
    this.props.getStory( this.props.match.params.id, 
      (story) => {
        this.setState({cur_story: story});
      }
    );

    this.getChildren();  
  }

  render(){
    console.log("<Story /> render()");
    //const areChildren = this.state.child_stories != undefined;
    if (this.state.cur_story === undefined || this.state.child_stories === undefined) {
      return (
        <div>Loading...</div>
      )
    }
    return(
      <Container className="story_container" text>
        <Container className="h2" textAlign="center">
          <Header as='h2'>{this.state.cur_story.title}</Header>
        </Container>
        <p>{this.state.cur_story.chapter}</p>
      
        {
            this.state.child_stories.map((story)=> <Link to={"/story/" + story.id}> <p>{story.title}</p> </Link> )
        }
     
        <AddText cur_story={this.state.cur_story} getChildren={this.getChildren} addStory={this.props.addStory} />  
      </Container>
    )
  }
}

export default Story;