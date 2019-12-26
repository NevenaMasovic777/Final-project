import React from "react";
import { withRouter } from "react-router-dom";

const Message = props => {
  let { msg } = props;
  let { username, message, timestamp, user_id } = msg;

  let date = new Date(timestamp).toLocaleTimeString({ hour12: true });

  return (
    <div className="one-msg-container">
      <div className="one-msg">
        <p onClick={() => props.history.push(`/profile/${user_id}`)}>
          <strong>Username</strong>:{username}
        </p>
        <p>{message.toString()}</p>
        <p>
          <strong>{date}</strong>
        </p>
      </div>
    </div>
  );
};

export default withRouter(Message);
