import React from 'react';

class Time extends React.Component {
  render() {
    const time = this.props.time.time;
    const running = this.props.time.running;
    const buttonText = running ? 'Stop' : 'Start';
    return (
      <div>
        <div className="row time numeric-display clock-top">
          {time}
        </div>
        <div className="row flex flex-row">
          <button>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default Time;
