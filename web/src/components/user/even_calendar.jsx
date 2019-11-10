import 'date-fns';
import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {Redirect} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    },
    button: {
        margin: theme.spacing(3),
    },
    input: {
        display: 'none',
    },
    calendar: {
        width: "100%",
    },
    event_container: {
        borderTop: "1px solid black",
        backgroundColor: "white",
        overflow: "auto",
        height: "60vh"
    },
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function EventCalendar(props) {
    useEffect(() => {
        props.setState("EventCalendar")
    }, [props])
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    };
    const classes = useStyles();
    return (
        <div>
        {props.isLogged === true ?
        <div >
            <Grid container spacing={4}>
                <Grid item xs={2}></Grid>
                <Grid item xs={7}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    margin="normal"
                                    id="date-picker-dialog"
                                    label="Select date"
                                    format="MM/dd/yyyy"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={7}>
                            <TextField
                                id="add_event"
                                className={classes.textField}
                                label="Event Name"
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" href="#contained-buttons" className={classes.button}>Add Event</Button>
                        </Grid>

                        <Grid item xs={10}>
                            <Grid container spacing={3} className={classes.event_container}>
                                <Grid item xs={12}>
                                    <Paper className={classes.root}>
                                        <Typography variant="h5" component="h3">
                                            27/3/2019
                                        </Typography>
                                        <Typography component="p">
                                            This is the sample event added
                                             <IconButton style={{float:"right"}} aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>Data - 2</Grid>
                                <Grid item xs={12}>Data - 3</Grid>
                                <Grid item xs={12}>Data - 4</Grid>
                                <Grid item xs={12}>Data - 1</Grid>
                                <Grid item xs={12}>Data - 2</Grid>
                                <Grid item xs={12}>Data - 3</Grid>
                                <Grid item xs={12}>Data - 4</Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={2}></Grid>

                    </Grid>
                </Grid>
                <Grid item xs={3}></Grid>

            </Grid>
        </div>
        :<Redirect to='/MemberLogin'/>}</div>
    )
}