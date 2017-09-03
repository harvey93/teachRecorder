import React from 'react';

class MicScreen extends React.Component{
  constructor(){
    super();
    
  }


  render(){
    return (
      <div className="micscreen-container">
        <i className="fa fa-microphone fa-5x mic-icon" aria-hidden="true"></i>
      </div>
    );
  }
}

export default MicScreen;
