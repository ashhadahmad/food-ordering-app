import React from "react";

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
        <img src={user.avatar_url}></img>
        <h3>{user.name}</h3>
        <a href={user.html_url}>{user.login}</a>
      </div>
    );
  }
}

export default UserClass;
