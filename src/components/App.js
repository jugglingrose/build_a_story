import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Auth from './Auth';
import Nav from './Nav';
import Footer from './Footer';
import StoriesList from './StoriesList';
import Story from './Story';
import {getStories} from '../interface.js';



class App extends React.Component {
  constructor(props) {
    console.log('constructor called');

    super(props);
    this.loadStory = this.loadStory.bind(this);

  }

  componentDidMount(){
    /*this.props.loadStory(this.props.match.params.id);*/
    console.log("component did mount");
  }


  loadStory(id) {
    console.log("loadStory called" + id);  
  } 

  render() {
    console.log("render called");
    return(
      <div>
        <Nav />
        {/* <Auth /> */}
        <Switch>
          <Route exact path="/" render={(props) => (<StoriesList {...props} getStories={getStories} />)} />/>
          <Route exact path="/story/:id" render={(props) => (<Story {...props} loadStory={this.loadStory} />)} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;