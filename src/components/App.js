import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';
import Nav from './Nav';
import Footer from './Footer';
import StoriesList from './StoriesList';



class App extends React.Component {
  constructor() {
    super();

    this.state={
      stories: {},
      cur_story: {},
    }
  }

  
  render() {
    return(
      <div>
        <Nav />
        {/* <Auth /> */}
        <StoriesList />
        <Footer />
      </div>
    )
  }
}

export default App;