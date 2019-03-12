import React from 'react';
import AddText from './AddText';


class Story extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getStory( this.props.match.params.id, 
      (story) => {
        console.log(story);
      }
    );
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