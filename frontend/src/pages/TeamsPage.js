import { Component } from "react";
import { Link } from "react-router-dom";
import nflAPI from "../api/nflAPI";
import UserContext from "../contexts/UserContext";

class TeamPage extends Component {
  state = {
    division: null,
  };

  async getDivision() {
    try {
      let divisionId = this.props.match.params.divisionId;
      let token = this.context ? this.context.token : null;
      let divisionData = await nflAPI.getDivisionById(divisionId, token);
      if (divisionData) {
        this.setState({ division: divisionData });
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getDivision();
  }

  renderTeams() {
    let teamElements = this.state.division.teams.map((team, index) => {
      return (
        <tbody key={`team-${index}`}>
          <tr>
            <td>{team.team}</td>
            <td>{team.wins}</td>
            <td>{team.losses}</td>
            <td>{team.ties}</td>
            <td>
              <Link to={`/teams/${team.id}`}>Update</Link>
            </td>
          </tr>
        </tbody>
      );
    });
    return (
      <table border="1">
        <thead>
          <tr>
            <th>Team</th>
            <th>wins</th>
            <th>Losses</th>
            <th>Ties</th>
          </tr>
        </thead>
        {teamElements}
      </table>
    );
  }

  renderDivision() {
    if (!this.state.division) {
      return <p>No Teams Found!</p>;
    }
    return (
      <div>
        <h1>{this.state.division.name}</h1>
        {this.renderTeams()}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Team Standings Page</h1>
        {this.renderDivision()}
      </div>
    );
  }
}

TeamPage.contextType = UserContext;

export default TeamPage;
