import React, { useState, useEffect } from "react";
import { getMsgOnTopic } from "../utilities/forum-service";
import Message from "./message";
import NewMessage from "./new-message";
import { Link } from "react-router-dom";

const Topic = props => {
  // props mi je lista data.topics

  let { topic } = props.location.state;
  console.log(props.location);

  let { topic_id, title, timestamp } = topic;

  let date = new Date(timestamp).toLocaleTimeString({ hour12: true });

  console.log(topic);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMsgOnTopic(topic_id).then(data => {
      if (data.success) {
        console.log(data);
        setMessages(data.messages);
      } else {
        console.log(data);
      }
    });
  }, [topic_id]);

  console.log(messages);

  return (
    <>
      <p key={topic_id}>
        <strong>{title}</strong>
      </p>
      ;
      <div className="msg-container">
        {messages.map(x => {
          return <Message key={x.message_id} msg={x} />;
        })}
      </div>
      <p>{date}</p>
      <div className="new-input">
        <NewMessage topic_id={topic_id}></NewMessage>
      </div>
      <br></br>
      <Link to="/topics">
        <button className="back-btn">Back to topics</button>
      </Link>
    </>
  );
};

export default Topic;
