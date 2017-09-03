import React, { Component } from 'react';
import Menu from './SideBar.js';
import MicScreen from './MicScreen.js';


class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Menu/>
        <MicScreen />
      </div>
    );
  }
}

export default App;
