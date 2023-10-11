import { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";

const User = () => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const data = await fetch(GITHUB_API);
    const user = await data.json();
    setUser(user);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

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
};

export default User;
