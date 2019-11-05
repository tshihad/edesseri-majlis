import React, { useEffect } from 'react'
import {
  Grid,
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  Paper,
  CardMedia,
  Button
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import pdfImage from '../images/pdf-icon.png'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5%'
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
  avatar: {
    margin: 20,
    width: 80,
    height: 80,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Downloads(props) {
  useEffect(() => {
    props.setState("Downloads")
  }, [props])
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={1}></Grid>
      <Grid item xs={10} >
        <ThemeProvider theme={theme}>
          <Paper>
            <Grid container spacing={3} >
              <Grid item xs={1} alignItems="center" justify="center">
                <CardMedia
                  className={classes.avatar}
                  image={pdfImage}
                />

              </Grid>
              <Grid item xs={10} alignItems="center">
                <Grid container spacing={0}>
                  <Grid xs={10} style={{marginLeft:'5%'}}>
                    <h3>
                      <b>
                        Sample pdf dowload is available here
                        </b>
                    </h3>
                    <p>
                      Some more description will make this entry awsome
                    </p>
                    <h6>
                      uploaded date: 09/56/3444
                    </h6>
                  </Grid>
                  <Grid item xs={1}>
                    <Button variant="outlined" size="medium" color="primary" className={classes.margin} id="submit">
                      Download</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </ThemeProvider>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  )
}