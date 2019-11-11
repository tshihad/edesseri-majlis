
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import PhoneInput from '../sub_components/phone_number_input';
import { Grid } from '@material-ui/core';
import '../../styles/contact.css';




const Contact = styled.div`
margin: 5vh 10vw 0 10vw;`;
const Headline = styled.h1`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
`;
export default function Contactmajlis(props) {
  useEffect(() => {
    axios.get('http://localhost:8080/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
      repsonse => {
        if (repsonse.status != 200) {
          window.location = "/MemberLogin"
        }
      }
    ).catch(error => {
      window.location = "/MemberLogin"
    })
    props.setLanButton(false)
    props.setUser("user")
    props.setState("ContactMajlis")
  }, [])
  return (
    <Contact>
      <Headline>Contact Majlis</Headline>
      <Formik
        initialValues={{ email: '', phone: '', firstname: '', lastname: '', place: '', country: '', content: '' }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post('http://localhost:8080/majlis/contact', {
            email: values.email,
            phone: values.phone,
            fname: values.firstname,
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
          firstname: Yup.string()
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
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="firstname">
                        First Name
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="firstname"
                        placeholder="Enter your First Name"
                        type="text"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.firstname && touched.firstname ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.firstname && touched.firstname ? (
                        <div className="input-feedback">{errors.firstname}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0}>
                    <Grid item xs={4} >
                      <label htmlFor="lastname" >
                        Last Name
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="lastname"
                        placeholder="Enter your Last Name"
                        type="text"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.lastname && touched.lastname ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.lastname && touched.lastname ? (
                        <div className="input-feedback">{errors.lastname}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <label htmlFor="email">
                        Email
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="email"
                        placeholder="Enter your email"
                        type="text"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? 'inputs text-input error' : 'inputs text-input'
                        }
                      />
                      {errors.email && touched.email ? (
                        <div className="input-feedback">{errors.email}</div>)
                        : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <label htmlFor="phone">
                        Phone
                      </label>
                    </Grid>
                    <Grid item xs={8}>
                      <PhoneInput id="phone" value={values.lastname}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <label htmlFor="place">
                        Place
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="place"
                        placeholder="Enter your place"
                        type="text"
                        value={values.place}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.place && touched.place ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.place && touched.place ? (
                        <div className="input-feedback">{errors.place}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <label htmlFor="country">
                        Country
                        </label>
                    </Grid>
                    <Grid item xs={8}><input
                      id="country"
                      placeholder="Enter your country"
                      type="text"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.country && touched.country ? 'inputs text-input error' : 'inputs text-input'}
                    />
                      {errors.country && touched.country ? (
                        <div className="input-feedback">{errors.country}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}</Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={0}>
                  <Grid item xs={2}>
                    <label htmlFor="content" style={{ verticalAlign: "top" }}>
                      Content
                        </label>
                  </Grid>
                  <Grid item xs={10}>
                    <textarea
                      id="content"
                      type="textArea"
                      rows="8"
                      placeholder="Type Content Here"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.content && touched.content ? 'text-input error' : 'text-input'
                      }
                    />
                    {errors.content && touched.content ? (
                      <div className="input-feedback">{errors.content}</div>)
                      : <div className="input-feedback">&nbsp;</div>}</Grid>
                </Grid>

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
            </form>
          );
        }}
      </Formik>
    </Contact >
  )
}