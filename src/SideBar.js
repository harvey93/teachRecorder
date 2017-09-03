import React from 'react';
import { push as Menu } from 'react-burger-menu';

class SideBar extends React.Component {


  render () {
    return (
      <div>
        <Menu width='200px'>

          <a className="menu-item" href="/">Last Recording</a>
          <a className="menu-item" href="/about">Class Recordings</a>
          <a className="menu-item" href="/contact">Analytics</a>
          <a className="menu-item" href="/contact">Schedule</a>
          <a className="menu-item" href="/contact">My Profile</a>

        <div className="displacer"/>
        </Menu>
      </div>
    );
  }
}

export default SideBar;
