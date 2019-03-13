import React from 'react';
import { Form} from 'semantic-ui-react'

class AddText extends React.Component{
  render(){
    return(
      <div>
        <h2>Enter Your Story</h2>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input  label='Title' placeholder='Title ' />
          </Form.Group>
          <Form.TextArea label='Path' placeholder='Add your story segment here....' />
          <Form.Button>Submit</Form.Button>
        </Form>

      </div>
    )
  }
}

export default AddText;