import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import PhoneInput from '../sub_components/phone_number_input';
import '../../styles/contact.css';
import {
  Paper,
  Grid,
  Typography,
  MenuItem,
  TextField,
  makeStyles,
  Button,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core';

const JoinMajlisCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;
const Heading = styled.h1`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
`;
const Headline = styled.h5`
color:#1d4219;
font-size: 1.5em;
font-family: 'Comfortaa', cursive;
`;
export default function JoinMajlis(props) {
  useEffect(() => {
    props.setLanButton(false)
    props.setState("JoinMajlis")
  }, [props])
  return (
    <JoinMajlisCard>
      <Heading>Join Majlis</Heading>
      <Paper>
        <Formik
          initialValues={{ email: '', phone: '', housename: '', lastname: '', place: '', country: '', content: '' }}
          onSubmit={(values, { setSubmitting }) => {

            axios.post('http://localhost:8080/majlis/contact', {
              email: values.email,
              phone: values.phone,
              fname: values.housename,
              lname: values.lastname,
              place: values.place,
              country: values.country,
              content: values.content
            })
              .then((response) => {
                alert(response.statusText);
              })
              .catch(function (error) {
                alert(error);
              });
            setSubmitting(false);

          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Required'),
            housename: Yup.string()
              .required('Required'),
            lastname: Yup.string()
              .required('Required'),
            place: Yup.string()
              .required('Required'),
            country: Yup.string()
              .required('Required'),
            content: Yup.string()
              .required('Required')
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit} className="form">
                <Grid container spacing={0}>
                  <Grid item xs={12}><Headline>Personal Details</Headline></Grid>
                  <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="name">
                        First Name
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="name"
                        placeholder="Enter Your Name"
                        type="text"
                        value={values.housename}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.name && touched.name ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.name && touched.name ? (
                        <div className="input-feedback">{errors.name}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="housename">
                        First Name
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="housename"
                        placeholder="Enter your House Name"
                        type="text"
                        value={values.housename}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.housename && touched.housename ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.housename && touched.housename ? (
                        <div className="input-feedback">{errors.housename}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="fathername">
                        First Name
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="fathername"
                        placeholder="Enter your fathers Name"
                        type="text"
                        value={values.fathername}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.fathername && touched.fathername ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.fathername && touched.fathername ? (
                        <div className="input-feedback">{errors.fathername}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>







                  <Grid container spacing={0}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={2} style={{ display: "inline-block" }}>
                      <button
                        type="button"
                        className="buttons outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </button>
                    </Grid>
                    <Grid item xs={2} style={{ display: "inline-block" }}>
                      <button type="submit" className="buttons" disabled={isSubmitting}>
                        Submit
                      </button>
                    </Grid>
                    <Grid item xs={4}></Grid>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>
      </Paper>
    </JoinMajlisCard>
  )
}