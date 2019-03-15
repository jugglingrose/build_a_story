import React from 'react';
import AddText from './AddText';
import { Container, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class Story extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      cur_story : undefined,
      child_stories: undefined,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
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
        <h2>Enter Your Story</h2>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input type="text" name="title" value={this.state.value} onChange={this.handleChange} label='Title' placeholder='Title ' />
          </Form.Group>
          <Form.TextArea label='Path' name="chapter" value={this.state.value} onChange={this.handleChange} placeholder='Add your story segment here....' />
          <Form.Button onClick={this.createStory}>Submit</Form.Button>
        </Form>
      </Container>

    )
  }
}

export default Story;