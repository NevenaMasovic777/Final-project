import React from "react";
import { useState } from "react";
import { getUsername } from "../utilities/forum-service";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = ({ match }) => {
  const [userID] = useState(match.params.user_id);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUsername(userID).then(data => {
      setUser(data.user);
      console.log("a", data);
    });
  }, [userID]);

  return (
    <>
      <div className="profile">
        <p>
          <strong>Name:</strong>
          {user.name}
        </p>
        <p>
          <strong>Surname:</strong>
          {user.surname}
        </p>
        <p>
          <strong>Email:</strong>
          {user.email}
        </p>
        <p>
          <strong>Username:</strong>
          {user.username}
        </p>
      </div>
      <Link to="/topics">
        <button className="back-btn" style={{ marginTop: "20px" }}>
          Back to topics
        </button>
      </Link>
    </>
  );
};

export default Profile;
