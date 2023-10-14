import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/ashhadahmad");
    const user = await data.json();
    this.setState({
      user: user,
    });
    console.log(user);
  }
  render() {
    const { user } = this.state;
    if (user == null) {
      return <div>Loading...</div>;
    }
    return (
      <div className="user-card">
        {/* How to access context in a class based component */}
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <img src={user.avatar_url}></img>
        <h3>{user.name}</h3>
        <a href={user.html_url}>{user.login}</a>
      </div>
    );
  }
}

export default UserClass;
