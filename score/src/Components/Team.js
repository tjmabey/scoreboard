import React from 'react';

class Team extends React.Component {
  render() {
    const teamScore = this.props.teamScore;
    const side = this.props.side;
    return (
      <div className="team">
        <div className="row side">
          {side}
        </div>
        <div className="row points">
          {teamScore.points}
        </div>
        <div className="row bonus">
          {teamScore.bonus}
        </div>
        <div className="row fouls">
          <h3>Fouls</h3>
          {teamScore.fouls}
        </div>
      </div>
    )
  }
}

export default Team;
