import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Education from "../education";
import Experience from "../experience";
import Summary from "../summary";
import styles from "./style";

class Right extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        className={classes.root}
        justify="space-between"
        direction="row"
        spacing={32}
      >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Summary />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Education />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Experience />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Right);
