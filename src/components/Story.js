import React from 'react';
import AddText from './AddText';

class Story extends React.Component{
  componentDidMount(){
    /*this.props.loadStory(this.props.match.params.id);*/
    this.props.loadStory();
    
  }


  render(){
    
    return(
      <div>
        <h2>Story Title</h2>
        <p>Story Text Goes Here</p>
        <AddText />
      </div>

    )
  }
}

export default Story;