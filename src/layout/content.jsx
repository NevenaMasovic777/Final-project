import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Topics from "../components/topics";
import Profile from "../components/profile";
import Topic from "../components/topic";

const Content = () => {
  return (
    <div>
      <Switch>
        <Route path="/profile/:user_id" component={Profile} />
        <Route path="/topic/:topic_id" component={Topic} />
        <Route path="/topics" component={Topics} />
      </Switch>
    </div>
  );
};

export default withRouter(Content);
