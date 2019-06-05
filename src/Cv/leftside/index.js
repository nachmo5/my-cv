import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Phone from "@material-ui/icons/Phone";
import AlternateEmail from "@material-ui/icons/Email";
import Home from "@material-ui/icons/Home";

import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./style";

class Left extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.image}>
          <img
            style={{ height: "100%", width: "100%", marginLeft: "-19%" }}
            src="./photo.PNG"
          />
        </Grid>
        <Grid item xs={12} className={classes.subImage}>
          <Typography variant="h5" align="center" className={classes.title}>
            Mohamed Nachit
            <br />
          </Typography>
          <br />
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            className={classes.subtitle}
          >
            Ingénieur études et dévelopement FullStack
          </Typography>
          <br />
          {/* ___________________________________________________________________________________________________*/}
          <Typography variant="h6" gutterBottom className={classes.subsubtitle}>
            Profil
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            25 ans Célibataire Permis B
          </Typography>
          <br />

          {/* ___________________________________________________________________________________________________*/}
          <Typography variant="h6" gutterBottom className={classes.subsubtitle}>
            Stack
          </Typography>
          <Grid container className={classes.iconContainer}>
            <Grid item xs={6}>
              <Typography align="center">
                <i className={"fab fa-java " + classes.icon} align="right" />
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                className={classes.subtitle}
                align="center"
              >
                Java
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="center">
                <i className={"fas fa-leaf " + classes.icon} align="right" />
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                className={classes.subtitle}
                align="center"
              >
                Spring
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.iconContainer}>
            <Grid item xs={6}>
              <Typography align="center">
                <i className={"fab fa-react " + classes.icon} align="right" />
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                className={classes.subtitle}
                align="center"
              >
                React JS
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align="center">
                <i className={"fab fa-node-js " + classes.icon} align="right" />
              </Typography>

              <Typography
                variant="body2"
                gutterBottom
                className={classes.subtitle}
                align="center"
              >
                Node JS
              </Typography>
            </Grid>
          </Grid>
          <br />
          {/* ___________________________________________________________________________________________________*/}
          <Typography variant="h6" gutterBottom className={classes.subsubtitle}>
            Langues
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            Français
          </Typography>
          <LinearProgress
            variant="determinate"
            value={90}
            className={classes.progress}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            Anglais
          </Typography>
          <LinearProgress
            variant="determinate"
            value={90}
            className={classes.progress}
          />
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            Arabe
          </Typography>
          <LinearProgress
            variant="determinate"
            value={100}
            className={classes.progress}
          />
          <br />
          {/* ___________________________________________________________________________________________________*/}
          <Typography variant="h6" gutterBottom className={classes.subsubtitle}>
            Contact
          </Typography>

          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            <Grid container>
              <Grid item xs={1} />
              <Phone className={classes.smallIcon} />
              <Grid item xs={8} align="right">
                (33) 658974641
              </Grid>
            </Grid>
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            <Grid container>
              <Grid item xs={1} />
              <AlternateEmail className={classes.smallIcon} />
              <Grid item xs={9} align="center">
                mohamed.nachit @etu.univ-nantes.fr
              </Grid>
            </Grid>
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.subtitle}
          >
            <Grid container>
              <Grid item xs={1} />
              <Home className={classes.smallIcon} />
              <Grid item xs={9} align="center">
                6 avenue des orchidées, Nantes 44300
              </Grid>
            </Grid>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Left);
