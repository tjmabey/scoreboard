import React from 'react';

class Points extends React.Component {
  render() {
    const team = this.props.team;
    return (
      <div>
        <div className="row points">
          {team.points}
        </div>
        <div className="row point-btn-container">
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
