import React from 'react';

class Time extends React.Component {
  render() {
    const time = this.props.time.time;
    const running = this.props.time.running;
    const buttonText = running ? 'Stop' : 'Start';
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      <div>
        <div className="row time numeric-display clock-top">
          {minutes}:{seconds < 10 ? '0' + seconds : seconds}
        </div>
        <div className="row flex flex-row justify-content-center">
          <button
            className="btn possession-btn"
            onClick={() => this.props.updateClock()}
          >
            {buttonText}
          </button>
          <button className="btn possession-btn">Reset</button>
        </div>
      </div>
    )
  }
}

export default Time;
