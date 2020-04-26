import React, { Component } from 'react';
import { ThumbUp, ThumbDown, ThumbsUpDown } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

class PredResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            prediction: props.results ? props.results : null,
            hasError: props.hasError ? props.hasError : null
        }
    }

    render() {
        if (this.props.hasError) {
            return (
                <div>
                    <p> We're sorry, something went wrong during prediction :( </p>
                </div>
            )
        } else if (this.props.class === "REAL") {
            return (
                <div>
                    <Grid container spacing={1} style={{ width: "100%" }}>
                        <Grid item xs={12} >
                            <p style={{ fontSize: "3em" }}> Great! The news seems to be {this.props.class} </p>
                        </Grid>
                        <Grid item m xs={12} style={{ zIndex: "1" }} >
                            <ThumbUp fontSize="large" style={{ color: "#238823", fontSize: "5em" }} />
                        </Grid>
                    </Grid>
                </div>
            );
        } else if (this.props.class === "FAKE") {
            return (
                <div>
                    <Grid container spacing={1} style={{ width: "100%" }}>
                        <Grid item xs={12} >
                            <p style={{ fontSize: "3em" }}> Watch out! The news seems to be {this.props.class} </p>
                        </Grid>
                        <Grid item m xs={12} style={{ zIndex: "1" }} >
                            <ThumbDown style={{ color: "#D2222D", fontSize: "5em" }} />
                        </Grid>
                    </Grid>
                </div>
            );
        } else if (this.props.class === "DOUBTFUL") {
            return (
                <div>
                    <Grid container spacing={1} style={{ width: "100%" }}>
                        <Grid item xs={12} >
                            <p style={{ fontSize: "3em" }}> Watch out! The news seems to be {this.props.class} </p>
                        </Grid>
                        <Grid item m xs={12} style={{ zIndex: "1" }} >
                            <ThumbsUpDown style={{ color: "#FFBF00", fontSize: "5em" }} />
                        </Grid>
                    </Grid>
                </div>
            );
        } else {
            return null
        }
    }
};

export default PredResult;
