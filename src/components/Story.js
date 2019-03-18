import React from 'react';
import { Link } from 'react-router-dom';
import AddText from './AddText';
import { Container} from 'semantic-ui-react';

class Story extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cur_story : undefined,
      child_stories: undefined,
    }
  }

  /* Gather our Current Story based on our url param*/
  componentDidMount(){
    console.log('Story componentDidMount()');
    this.props.getStory( this.props.match.params.id, 
      (story) => {
        this.setState({cur_story: story});
      }
    );

    /* Gather our cur_story child stories*/
    this.props.getChildStories( this.props.match.params.id, 
      (stories) => {
        this.setState({child_stories : stories}); 
      })
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
      <Container text>
        <h2>{this.state.cur_story.title}</h2>
        <p>{this.state.cur_story.chapter}</p>
        {
            this.state.child_stories.map((story)=> <Link to={"/story/" + story.id}> <p>{story.title}</p> </Link> )
        }
        
        
        <AddText cur_story={this.state.cur_story} addStory={this.props.addStory} />
        
      </Container>
    )
  }
}

export default Story;