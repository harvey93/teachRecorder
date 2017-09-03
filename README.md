# Teach Recorder

Teach Recorder is a simple non-functional home screen for a recording application. Teach recorder is built using React.

## Features and Implementation

### Sidebar Menu

The sidebar menu will appear when tapped and disappear when another part of the screen is tapped.

![Add Payment](/docs/sidebar.gif)

```
<Menu width='200px'>
  <a className="menu-item" href="/LastRecording">Last Recording</a>
  <a className="menu-item" href="/ClassRecordings">Class Recordings</a>
  <a className="menu-item" href="/Analytics">Analytics</a>
  <a className="menu-item" href="/Schedule">Schedule</a>
  <a className="menu-item" href="/MyProfile">My Profile</a>
</Menu>

```

### Record/Pause/Resume and Finish Recording features

Different buttons are rendered conditionally based on the state of the application.

![Update Payment](/docs/conditionalRendering.gif)

```
constructor(){
  super();
  this.state = {"recordingState": 1};
  this.renderButton = this.renderButton.bind(this);
  this.changeRecordingState = this.changeRecordingState.bind(this);
}

changeRecordingState(state){
  this.setState({"recordingState": state});
}

```

## Running Teach Recorder Locally

* `git clone https://github.com/harvey93/teachRecorder.git`
* `cd teachRecorder`
* `npm install`
* `npm start`
* Navigate to "http://localhost:3000/" in your browser
