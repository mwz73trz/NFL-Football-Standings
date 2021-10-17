import { Component } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

class TeamData extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.props.team.team}</CardTitle>
            <CardText>Wins: {this.props.team.wins}</CardText>
            <CardText>Losses: {this.props.team.losses}</CardText>
            <CardText>Ties: {this.props.team.ties}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TeamData;
