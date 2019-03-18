import React from 'react';
import { Form } from 'semantic-ui-react';



class AddText extends React.Component{
  constructor(props){
    super(props);
  
    this.handleChange = this.handleChange.bind(this);
    this.newChapter = this.newChapter.bind(this);

    this.state = {
      /*when we develop our backend, the id will need to be empty and our UUID will need to be generated in the backend on submti.  For now,
      we have a temporary id generator in place */
      id: Math.floor(Math.random() * 100000000),
      parent_id: this.props.cur_story.id,
      title: ' ',
      chapter: ''
    }
  }
  

  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value});   
  }

  newChapter(){
    const newChapter = this.state;
    this.props.addStory(newChapter);
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
          <Form.Button onClick={this.newChapter}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default AddText;