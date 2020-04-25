import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        left: 20,
        bottom: 20,
        right: 0,
        backgroundColor: "#282c34",
        color: "#c7c7c7",
        fontFamily: "Open Sans"
    },
    paper: {
        padding: theme.spacing(2),
        backgroundColor: "#282c34",
        color: "white",
        elevation: "0"
    },
    gridleft: {
        backgroundColor: "#282c34",
        textAlign: "left"
    },
    gridright: {
        backgroundColor: "#282c34",
        textAlign: "right"
    }

}));

export default function FootBar() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} style={{ width: "100%" }}>
                <Grid className={classes.gridleft} item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0} >#EUvsVirus</Paper>
                </Grid>
                <Grid className={classes.gridright} item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0} >@U4U_Milan Team</Paper>
                </Grid>
            </Grid>
        </div>
    )
}