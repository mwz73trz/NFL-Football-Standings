import { Component } from "react";
import { Link } from "react-router-dom";

class Division extends Component {
  render() {
    return (
      <span>
        <Link to={`/divisions/${this.props.division.id}`}>
          {this.props.division.name}
        </Link>
      </span>
    );
  }
}

export default Division;
