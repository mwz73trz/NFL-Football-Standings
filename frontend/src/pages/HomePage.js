import { Component } from "react";
import { Link } from "react-router-dom";
import nflAPI from "../api/nflAPI";
import Division from "../components/Division";
import UserContext from "../contexts/UserContext";

class HomePage extends Component {
  state = {
    divisions: [],
  };

  getDivisions = async () => {
    try {
      let token = this.context ? this.context.token : null;
      if (token) {
        let divisionData = await nflAPI.getDivisions(token);
        this.setState({ divisions: divisionData });
      }
    } catch {}
  };

  componentDidMount() {
    this.getDivisions();
  }

  renderWelcome() {
    if (!this.context) {
      return (
        <Link to="/login">
          <button>Login</button>
        </Link>
      );
    }
    let divisionElements = this.state.divisions.map((division, index) => {
      return (
        <li key={`division-${index}`}>
          <Division division={division} />
        </li>
      );
    });

    return (
      <div>
        <h2>Welcome to your NFL Standings App {this.context.user.username}</h2>
        <h2>Divisions</h2>
        <ul style={{ listStyle: "none" }}>{divisionElements}</ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.renderWelcome()}
      </div>
    );
  }
}

HomePage.contextType = UserContext;

export default HomePage;
