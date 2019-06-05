import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import School from "@material-ui/icons/Check";

import styles from "./style";

class Summary extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <School className={classes.icon} />
          <Typography variant="h6" gutterBottom className={classes.headerTxt}>
            Compétences
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subtitle}
          >
            - Conception d'architectures maintenables et extensibles

          </Typography>

          <Divider light />
          <br />
          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subtitle}
          >
            - Grande expertise en développement et veille technologique
          </Typography>
          <Divider light />
          <br />

          <Typography
            variant="subtitle2"
            gutterBottom
            className={classes.subtitle}
          >
            - Respect des bonnes pratiques, Design Patterns
          </Typography>
          <Divider light />
          <br />

          <Typography variant="subtitle2" className={classes.subtitle}>
            - Rédaction des documents techniques
          </Typography>
          <br />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Summary);
