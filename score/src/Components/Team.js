import React from 'react';
import Points from './Points.js'
import Bonus from './Bonus.js'

class Team extends React.Component {
  constructor() {
    super();
    this.renderFoulButtons = this.renderFoulButtons.bind(this);
  }

  renderFoulButtons() {
    const teamScore = this.props.teamScore;

    if (teamScore.fouls > 0) {
      return(
        <div>
          <button
            className="btn foul-btn"
            onClick={() => this.props.updateFoul(teamScore, 1)}>
            + 1
          </button>
          <button
            className="btn foul-btn"
            onClick={() => this.props.updateFoul(teamScore, -1)}>
            - 1
          </button>
        </div>
      )
    } else {
      return <button
        className="btn foul-btn"
        onClick={() => this.props.updateFoul(teamScore, 1)}>
        + 1
      </button>
    }
  }

  render() {
    const teamScore = this.props.teamScore;
    const side = this.props.side;
    return (
      <div className="team">
        <div className="row side">
          {side}
        </div>
        <Points
          team={teamScore} updateScore={this.props.updateScore}
        />
        <Bonus team={teamScore}/>
        <div className="row fouls">
          <h2>Fouls</h2>
          <div className="foul-count numeric-display">{teamScore.fouls}</div>
          <div className="row foul-btn-container">
            {this.renderFoulButtons()}
          </div>
        </div>
      </div>
    )
  }
}

export default Team;
