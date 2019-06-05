import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import School from "@material-ui/icons/School";

import styles from "./style";

class Education extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <School className={classes.icon} />
          <Typography variant="h6" gutterBottom className={classes.headerTxt}>
            Education
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Master 2 - Architecture Logicielle
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            2018 - 2019
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subtitle}
          >
            Université de Nantes - UFR Sciences et Techniques
          </Typography>
          <Divider light />
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Diplôme d‘ingénieur en Génie Informatique
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            2011 - 2017
          </Typography>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subtitle}
          >
            Ecole Nationale des sciences Appliquées de Fès
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Education);
