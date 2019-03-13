import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './Auth';
import Nav from './Nav';
import Footer from './Footer';
import StoriesList from './StoriesList';
import Story from './Story';
import {getStories, getStory} from '../interface.js';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Nav />
        {/* <Auth /> */}
        <Switch>
          <Route exact path="/" render={(props) => (<StoriesList {...props} getStories={getStories} />)} />/>
          <Route exact path="/story/:id" render={(props) => (<Story {...props} getStory={getStory} />)} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;