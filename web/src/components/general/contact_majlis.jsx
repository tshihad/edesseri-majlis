
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
// import PhoneInput from '../sub_components/phone_number_input';
import { Grid } from '@material-ui/core';
import '../../styles/contact.css';
import { API_BASE_URL } from '../constants';
import MediaQuery from 'react-responsive'

const Contact = styled.div`
margin: 5vh 10vw 0 10vw;
@media (max-width:700px){
  margin: 5vh 0 0 1vw;
}`;

const Headline = styled.h1`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
@media (max-width:700px){
  padding-left: 2vw;
}
`;

export default function Contactmajlis(props) {
  useEffect(() => {
    props.setLanButton(false)
    window.scrollTo(0, 0)
    props.setState("ContactMajlis")
  })
  const [phone, setState] = React.useState()
  const handleOnChange = (value) => {
    setState(value)
  }
  const phoneRegExp = /^\+?[0-9]{10,14}$/;

  var FormReset
  return (
    <Contact>
      <Headline>Contact Majlis</Headline>
      <Formik
        initialValues={{ email: '', phone: '', firstname: '', lastname: '', place: '', country: '', content: '' }}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          if (!values.phone.match(phoneRegExp)) {
            setErrors({ phone: 'Invalid Phone ' });
            setSubmitting(false);
            return;
          }

          axios.post(API_BASE_URL + '/majlis/contact', {
            email: values.email,
            phone: values.phone,
            fname: values.firstname,
            lname: values.lastname,
            place: values.place,
            country: values.country,
            content: values.content
          })
            .then((response) => {
              alert("Information Recorded Successfully");
              FormReset()
            })
            .catch(function (error) {
              console.log(error);;
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
            .required('Required'),
          phone: Yup.string().required('Required'),
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
          FormReset = handleReset;
          return (
            <div>
              <MediaQuery minDeviceWidth={900}>
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
                            Phone Number
                        </label>
                        </Grid>
                        <Grid item xs={8}>
                          <input
                            id="phone"
                            name="phone"
                            placeholder="Enter your Phone Number"
                            type="text"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.phone && touched.phone ? 'inputs text-input error' : 'inputs text-input'
                            }
                          />
                          {/* <PhoneInput defaultCountry={'in'} id="phone" value={values.phone} onChange={handleOnChange}
                        disableAreaCodes
                        inputExtraProps={{
                          name: 'phone',
                          id: 'phone',
                          required: true,
                        }}
                        inputStyle={{ backgroundColor: "#eefaece0", minWidth: "300px", fontSize: "16px" }}
                        buttonStyle={{ width: "40px", backgroundColor: "#7bb419" }}
                      /> */}
                          {errors.phone && touched.phone ? (
                            <div className="input-feedback">{errors.phone}</div>)
                            : <div className="input-feedback">&nbsp;</div>}
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
              </MediaQuery>
              <MediaQuery minDeviceWidth={500} maxDeviceWidth={900}>
                <form onSubmit={handleSubmit} className="form">
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={4}>
                          <label htmlFor="phone">
                            Phone Number
                      </label>
                        </Grid>
                        <Grid item xs={8}>
                          <input
                            id="phone"
                            name="phone"
                            placeholder="Enter your Phone Number"
                            type="text"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.phone && touched.phone ? 'inputs text-input error' : 'inputs text-input'
                            }
                          />
                          {/* <PhoneInput defaultCountry={'in'} id="phone" value={values.phone} onChange={handleOnChange}
                      disableAreaCodes
                      inputExtraProps={{
                        name: 'phone',
                        id: 'phone',
                        required: true,
                      }}
                      inputStyle={{ backgroundColor: "#eefaece0", minWidth: "300px", fontSize: "16px" }}
                      buttonStyle={{ width: "40px", backgroundColor: "#7bb419" }}
                    /> */}
                          {errors.phone && touched.phone ? (
                            <div className="input-feedback">{errors.phone}</div>)
                            : <div className="input-feedback">&nbsp;</div>}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
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
              </MediaQuery>
              <MediaQuery maxDeviceWidth={500}>
                <form onSubmit={handleSubmit} className="form">
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0} className="field">
                        <Grid item xs={12}>
                          <label htmlFor="firstname">
                            First Name
                      </label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            id="firstname"
                            placeholder="Enter your First Name"
                            type="text"
                            value={values.firstname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.firstname && touched.firstname ? 'inputs text-input error width' : 'inputs text-input width'}
                          />
                          {errors.firstname && touched.firstname ? (
                            <div className="input-feedback">{errors.firstname}</div>
                          ) : <div className="input-feedback">&nbsp;</div>}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={0}>
                        <Grid item xs={12} >
                          <label htmlFor="lastname" >
                            Last Name
                      </label>
                        </Grid>
                        <Grid item xs={12}>
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
                    <Grid item xs={122}>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <label htmlFor="email">
                            Email
                      </label>
                        </Grid>
                        <Grid item xs={12}>
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
                    <Grid item xs={122}>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <label htmlFor="phone">
                            Phone Number
                      </label>
                        </Grid>
                        <Grid item xs={12}>
                          <input
                            id="phone"
                            name="phone"
                            placeholder="Enter your Phone Number"
                            type="text"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={
                              errors.phone && touched.phone ? 'inputs text-input error' : 'inputs text-input'
                            }
                          />
                          {/* <PhoneInput defaultCountry={'in'} id="phone" value={values.phone} onChange={handleOnChange}
                      disableAreaCodes
                      inputExtraProps={{
                        name: 'phone',
                        id: 'phone',
                        required: true,
                      }}
                      inputStyle={{ backgroundColor: "#eefaece0", minWidth: "300px", fontSize: "16px" }}
                      buttonStyle={{ width: "40px", backgroundColor: "#7bb419" }}
                    /> */}
                          {errors.phone && touched.phone ? (
                            <div className="input-feedback">{errors.phone}</div>)
                            : <div className="input-feedback">&nbsp;</div>}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={122}>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <label htmlFor="place">
                            Place
                      </label>
                        </Grid>
                        <Grid item xs={12}>
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
                    <Grid item xs={122}>
                      <Grid container spacing={0}>
                        <Grid item xs={12}>
                          <label htmlFor="country">
                            Country
                      </label>
                        </Grid>
                        <Grid item xs={12}><input
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
                      <Grid item xs={12}>
                        <label htmlFor="content" style={{ verticalAlign: "top" }}>
                          Content
                      </label>
                      </Grid>
                      <Grid item xs={12}>
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

                    <Grid item xs={1}></Grid>
                    <Grid item xs={5} style={{ display: "inline-block" }}>
                      <button
                        type="button"
                        className="buttons outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                    </button>
                    </Grid>
                    <Grid item xs={5} style={{ display: "inline-block" }}>
                      <button type="submit" className="buttons" disabled={isSubmitting}>
                        Submit
                    </button>
                    </Grid>
                    <Grid item xs={1}></Grid>
                  </Grid>
                </form>
              </MediaQuery>
            </div>
          );
        }}
      </Formik>
    </Contact >

  )
}

