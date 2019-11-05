import React, { useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Grid,
  Button,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '3% 8% 2% 10%',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(1),
    width: '70%',
    borderColor: "yellow !important",
  },
  margin: {
    margin: theme.spacing(0, 0, 1, 0),
  },
}));



export default function ContactMajlis(props) {
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  useEffect(() => {
    props.setState("ContactMajlis")
  }, [props])
  const classes = useStyles();
  return (
    <form>
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} className={classes.container}>
          <Grid item xs={6}>
            <h4>Contact us</h4>
            <TextField
              id="name"
              required
              className={classes.textField}
              label="Name"
              margin="normal"
              variant="outlined"
              color='secondary'
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="email"
              className={classes.textField}
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={8}>
            <TextField
              required
              id="content"
              multiline
              className={classes.textField}
              label="Content"
              margin="normal"
              variant="outlined"
              rows={6}
            />
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Button variant="outlined" size="medium" color="primary" className={classes.margin} id="submit">
              Submit
          </Button>
          </Grid>
        </Grid>
      </ThemeProvider>

    </form>
  )
}