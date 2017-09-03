import React from 'react';
import { push as Menu } from 'react-burger-menu';

class SideBar extends React.Component {


  render () {
    return (
      <div>
        <Menu width='200px'>

          <a className="menu-item" href="/LastRecording">Last Recording</a>
          <a className="menu-item" href="/ClassRecordings">Class Recordings</a>
          <a className="menu-item" href="/Analytics">Analytics</a>
          <a className="menu-item" href="/Schedule">Schedule</a>
          <a className="menu-item" href="/MyProfile">My Profile</a>

        <div className="displacer"/>
        </Menu>
      </div>
    );
  }
}

export default SideBar;
