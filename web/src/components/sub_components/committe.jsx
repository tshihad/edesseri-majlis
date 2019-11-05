import React from 'react'

import {
    Paper,
    Typography,
    makeStyles,
    CardMedia,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor:"#f8faf8",
        marginTop: "1em",
        padding: "1em .5em"
    },
    avatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    headings: {
        fontSize: "1.5em",
        color:"#1d4219",
        textAlign: 'center',
    },
    from:{
        textAlign: 'center',
        color:"#556b2f",
    }
}));

export function MemberCard(props) {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <Typography variant="h" component="h3" className={classes.headings}>
                {props.position}
            </Typography>
            <CardMedia
                className={classes.avatar}
                image={props.image}
            />
            <Typography variant="h5" component="h3" className={classes.headings} 
            style={{ fontSize: props.len === "large" ? "1.3em" : "1.5em" }}>
                {props.name}
            </Typography>
            <Typography component="p" className={classes.from}>
                From {props.date}
            </Typography>
        </Paper>
    )
}
