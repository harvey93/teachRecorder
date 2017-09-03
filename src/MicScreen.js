import React from 'react';

class MicScreen extends React.Component{
  constructor(){
    super();
    this.state = {"recordingState": 4};
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton(){
    if(this.state.recordingState === 1){
      return(
        <div className="play-button-div">
          <h1 className='play-button'>Record</h1>
        </div>
      );
    }else if(this.state.recordingState === 2){
      return(
        <div className="play-button-div">
          <h1 className='play-button'>Pause</h1>
          <h1 className='play-button'>Finish</h1>
        </div>
      );
    }else if(this.state.recordingState === 3){
      return(
        <div className="play-button-div">
          <h1 className='play-button'>Resume</h1>
          <h1 className='play-button'>Finish</h1>
        </div>
      );
    }else if (this.state.recordingState === 4){
      return(
        <div>
          <h1 className='rec-message'>Your Recording Has been Sent!</h1>
          <div className="play-button-div">
            <h1 className='play-button'>Start New Recording</h1>
          </div>
        </div>
      );
    }
  }


  render(){
    return (
      <div className="micscreen-container">
        <div className="button-mic">
          <i className="fa fa-microphone fa-5x mic-icon" aria-hidden="true"></i>
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default MicScreen;
