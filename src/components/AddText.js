import React from 'react';
import { Form } from 'semantic-ui-react';

class AddText extends React.Component{
  constructor(props){
    super(props);
  
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      id: '',
      parent_id: '',
      title: '',
      chapter: ''
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});   
  }

  createStory(){
    console.log("create story called");
    const story = {
      title: this.title.value
    }
    console.log(story);
  }

  render(){
    return(
      <div>
        <h2>Enter Your Story</h2>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input type="text" name="title" value={this.state.title} onChange={this.handleChange} label='Title' placeholder='Title ' />
          </Form.Group>
          <Form.TextArea label='Path' name="chapter" value={this.state.chapter} onChange={this.handleChange} placeholder='Add your story segment here....' />
          <Form.Button onClick={this.createStory}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AddText;