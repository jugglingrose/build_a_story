import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom'


import Auth from './Auth';
import Nav from './Nav';
import Footer from './Footer';
import StoriesList from './StoriesList';
import Story from './Story';
import {getStories, getStory, getChildStories, addStory} from '../interface.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isSignedIn: false
    }
    this.updateSignedIn = this.updateSignedIn.bind(this);
  }

  updateSignedIn(value){
    console.log('update signed in');
    this.setState({isSignedIn : value});
  }

  render() {
    return(
      <div>
        <Nav isSignedIn={this.state.isSignedIn} />
        <div className='content'>
          <Switch>
            <Route exact path="/" render={(props) => (<StoriesList {...props} getStories={getStories} />)} />/>
            <Route exact path="/login" render={(props) => (<Auth {...props} isSignedIn={this.state.isSignedIn} updateSignedIn={this.updateSignedIn} />) } />
            <Route exact path="/story/:id" render={(props) => (<Story {...props} key={props.location.pathname} addStory={addStory} getStory={getStory} getChildStories={getChildStories} />)} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;