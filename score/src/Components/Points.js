import React from 'react';

class Points extends React.Component {
  render() {
    const team = this.props.team;
    return (
      <div>
        <div className="row points numeric-display">
          {team.points}
        </div>
        <div className=" point-btn-container">
          <button
            className="btn point-btn"
            onClick={() => this.props.updateScore(team, 1)}
            >
              +1
            </button>
          <button
            className="btn point-btn"
            onClick={() => this.props.updateScore(team, 2)}
            >
              +2
            </button>
          </div>
        <div className=" point-btn-container">
            <button
              className="btn point-btn-red"
              onClick={() => this.props.updateScore(team, -1)}
              disabled={(team.points === 0) ? true : false}
              >
                -1
            </button>
            <button
              className="btn point-btn"
              onClick={() => this.props.updateScore(team, 3)}
              >
                +3
              </button>
        </div>
      </div>
    )
  }
}

export default Points;
