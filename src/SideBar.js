import React from 'react';
import { push as Menu } from 'react-burger-menu';

class SideBar extends React.Component {


  render () {
    return (
      <div>
        <Menu className="screen">
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>

        </Menu>
      </div>
    );
  }
}

export default SideBar;
