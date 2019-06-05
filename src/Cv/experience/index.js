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
          Ingénieur Études Et Développement Java - Accenture Saint-Herblain
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            Février 2019 - Août 2019
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Conception d'architecture logicielle: <b className= {classes.technos}>M.O.M</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement: <b className= {classes.technos}>Java, Spring, Camel</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Analyse et optimisation des performances
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Intégration continue: <b className= {classes.technos}>Jenkins, Sonar</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Tests unitaires et tests automatisés
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Agilité: <b className= {classes.technos}>Scrum</b>
          </Typography>
          <br />
          <Divider light />
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Ingénieur Études et Développement FullStack Javascript - Taillis Labs
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            Octobre 2017 - Septembre 2018
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Conception d'architecture logicielle: <b className= {classes.technos}>Microservices, CQRS, Event Sourcing</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Développement: <b className= {classes.technos}>ReactJS, GraphQL</b>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Tests unitaires
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            - Agilité: <b className= {classes.technos}>Scrum</b>
          </Typography>
          <br />
          <Divider light />
        </Grid>
        <Grid item xs={12} className={classes.cardBody}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Développeur Symfony 3, AngularJS - Appartoo Paris
          </Typography>
          <Typography variant="subtitle2" gutterBottom className={classes.date}>
            Février 2017 - Août 2017
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
              Projet personnel : Septembre 2018 - Février 2019
            </Typography>
            - Développement d'un LMS pour l'université Mohamed VI: <b className= {classes.technos}>NodeJS, ReactJS</b>
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
            <br />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Education);
