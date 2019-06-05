import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import School from "@material-ui/icons/TrendingUp";

import styles from "./style";

class Education extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12} className={classes.header}>
          <School className={classes.icon} />
          <Typography variant="h6" gutterBottom className={classes.headerTxt}>
            Expériences professionnelles
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Ingénieur études et développement - Taillis Labs
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            Octobre 2017 - Septembre 2018
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement d'un CRM pour un centre d'appel: <b className= {classes.technos}>Microservices, Graphql, Kafka, CQRS, Event sourcing</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement d'une application de facturation: <b className= {classes.technos}>Graphql, Express</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement d'une application de booking: <b className= {classes.technos}>Express, Mongodb</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement d'une application de mise en relation
            patient/médecin: <b className= {classes.technos}>Microservices, Webrtc</b>
          </Typography>
          <br />
          <Divider light />
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Stage de Fin d’études : Développeur Symfony 3, AngularJS - Appartoo
            Paris
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            Février 2017 - Août 2018
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement d'un site de mise en relation entre colocataires
          </Typography>
          <br />
          <Divider light />
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Autres
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.date}
            >
              Freelance : Septembre - Janvier 2018
            </Typography>
            - Développement d'un LMS pour l'entreprise GEERD
            <br />
            <Typography
              variant="subtitle2"
              gutterBottom
              className={classes.date}
            >
              Stage : Juillet - Septembre 2016
            </Typography>
            - Développement d'un site de gestion du centre Doctorale pour la
            faculté des lettres Fès
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Education);
