import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LeftSide from './leftside'
import Rightside from './rightside'
import styles from './style'

class Cv extends Component {
    render() {
        const { classes } = this.props
        return (
            <Grid container className={classes.root}>
                <Grid item xs={2} >
                    <LeftSide />
                </Grid>
                <Grid item xs={6} >
                    <Rightside />
                </Grid>
            </Grid >
        );
    }
}

export default withStyles(styles)(Cv);