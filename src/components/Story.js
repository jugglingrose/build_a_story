import React from 'react';
import AddText from './AddText';

class Story extends React.Component{

  componentDidMount(){
    /*this.props.loadStory(this.props.match.params.id);*/
    var id = this.props.match.params.id;
    console.log(id);
    this.props.loadStory(id);
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