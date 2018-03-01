import React from 'react';

class Time extends React.Component {
  render() {
    const time = this.props.time;
    return (
      <div className="row time numeric-display clock-top">
        {time}
      </div>
    )
  }
}

export default Time;
