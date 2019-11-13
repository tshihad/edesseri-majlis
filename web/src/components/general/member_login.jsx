import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { green } from '@material-ui/core/colors';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core';
import { API_BASE_URL } from '../constants'
function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://www.edasserymajlis.com">
        Edassery majlis
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: 'white'
  },
}));


function MemberLogin(props) {
  const [username, setUsername] = React.useState()
  const [password, setPassword] = React.useState()
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    axios.post(API_BASE_URL + '/majlis/signin', {
      member_id: username,
      password: password
    })
      .then((response) => {
        if (response.status === 200) {
          props.setLoggedIn(true)
          localStorage.setItem('EdasseryMajlisToken', response.data.result.token)
          localStorage.setItem('VerifiedUser', true)
          localStorage.setItem('Username', response.data.result.name)
          localStorage.setItem('MemberId', response.data.result.member_id)
          localStorage.setItem('UserImageURL', response.data.result.image_url)
          props.history.push('/User/UserOptions/Subscriptions')
        } else {
          alert("Incorrect Username or Password")
        }
      }).catch((err) => {
        alert("Server Error")
      })

  }
  useEffect(() => {
    props.setLanButton(false)
    props.setUser("general")
    props.setState("MemberLogin")
  }, [props])
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
      </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="memberid"
              label="Member ID"
              name="username"
              autoFocus
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className={classes.submit}
            >
              Sign In
        </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </ThemeProvider>
    </Container>
  )
}

export default withRouter(MemberLogin);