import React from 'react';

class MicScreen extends React.Component{
  constructor(){
    super();

  }


  render(){
    return (
      <div className="micscreen-container">
        <div className="button-mic">
          <i className="fa fa-microphone fa-5x mic-icon" aria-hidden="true"></i>
          <h1 className='play-button'>Tap to Record</h1>
        </div>
      </div>
    );
  }
}

export default MicScreen;
