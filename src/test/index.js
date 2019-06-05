import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class Test extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={2}>
          <ul>
            <li>Home</li>
            <li>
              <Link to="/users">User</Link>
            </li>
            <li>
              <Link to="quiz">Quiz</Link>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <Switch>
            <Route path="/users" exact component={() => <div>Users</div>} />
            <Route path="/quiz/" exact component={() => <div>Quiz</div>} />
          </Switch>
        </Grid>
      </Grid>
    );
  }
}

export default Test;
