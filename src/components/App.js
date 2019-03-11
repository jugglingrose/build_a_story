import React from 'react';
import ReactDOM from 'react-dom';
import Auth from './Auth';

const title = "Corean's Auth App";


class App extends React.Component {
  render() {
    return(
      <div>
        <div>{title}</div>
        <Auth />
      </div>
    )
  }
}

export default App;