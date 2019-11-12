import React, { useEffect } from 'react'
import Select from 'react-select';
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
import {API_BASE_URL} from '../constants'


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

const bloodgroupOptions = [
  {
      value: 'A+',
      label: 'A+',
  },
  {
      value: 'B+',
      label: 'B+',
  },
  {
      value: 'AB+',
      label: 'AB+',
  },
  {
      value: 'O+',
      label: 'O+',
  },
  {
      value: 'A-',
      label: 'A-',
  },
  {
      value: 'B-',
      label: 'B-',
  },
  {
      value: 'AB-',
      label: 'AB-',
  },
  {
      value: 'B-',
      label: 'B-',
  },
  {
      value: 'O-',
      label: 'O-',
  },
];

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

            axios.post(API_BASE_URL+'/majlis/contact', {
              email: values.email,
              phone: values.phone,
              fname: values.housename,
              lname: values.lastname,
              place: values.place,
              country: values.country,
              content: values.content
            })
              .then((response) => {
                alert("Information Recorderd for Admin Verification");
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
              .required('Required'),
            phone_number_1: Yup.number()
              .required('Required'),
            phone_number_2: Yup.number(),
            office_phone_number: Yup.number(),
            home_phone_number: Yup.number(),
            bloodgroup: Yup.object(),
            passport: Yup.number()
            .required('Required'),
            dob: Yup.date()
            .required('Required'),
            job: Yup.date()
            .required('Required'),
            company_name: Yup.string()
            .required('Required'),
            postcode: Yup.number(),
            area: Yup.string(),
            emirates: Yup.string(),


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
              setFieldValue
            } = props;

            const onChange = value => {
              console.log(values);
              setFieldValue("bloodgroup",value);
            }
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
                        House Name
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
                        Father's Name
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

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="name">
                        Phone Number 1
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="phone_number_1"
                        placeholder="Enter Your Name"
                        type="number"
                        value={values.phone_number_1}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.phone_number_1 && touched.phone_number_1 ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.phone_number_1 && touched.phone_number_1 ? (
                        <div className="input-feedback">{errors.name}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="housename">
                        Phone Number 2
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="phone_number_2"
                        placeholder="Phone number 2"
                        type="number"
                        value={values.phone_number_2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.phone_number_2 && touched.phone_number_2 ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.phone_number_2 && touched.phone_number_2 ? (
                        <div className="input-feedback">{errors.phone_number_2}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="housename">
                        Office Phone Number
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="office_phone_number"
                        placeholder="Office Phone number"
                        type="number"
                        value={values.office_phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.office_phone_number && touched.office_phone_number ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.office_phone_number && touched.office_phone_number ? (
                        <div className="input-feedback">{errors.office_phone_number}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>
                  
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="housename">
                        Home Phone Number
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="home_phone_number"
                        placeholder="Home Phone number"
                        type="number"
                        value={values.home_phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.home_phone_number && touched.home_phone_number ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.home_phone_number && touched.home_phone_number ? (
                        <div className="input-feedback">{errors.home_phone_number}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="housename">
                         E-mail
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="email"
                        placeholder="E-mail"
                        type="string"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.email && touched.email ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.email && touched.email ? (
                        <div className="input-feedback">{errors.email}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="bloodgroup" style={{color:'black',fontSize:'16px'}}>
                         Blood Group
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <Select
                        id="bloodgroup"
                        placeholder="Blood Group"
                        options={bloodgroupOptions}
                        value={values.bloodgroup}
                        onChange={onChange}
                        onBlur={handleBlur}
                        className={
                          errors.bloodgroup && touched.bloodgroup ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.bloodgroup && touched.bloodgroup ? (
                        <div className="input-feedback">{errors.bloodgroup}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}><Headline>Personal Identification</Headline></Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="passport">
                         Passport
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="passport"
                        placeholder="Passport"
                        type="number"
                        value={values.passport}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.passport && touched.passport ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.passport && touched.passport ? (
                        <div className="input-feedback">{errors.passport}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="dob">
                         Date of Birth
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="dob"
                        placeholder="dob"
                        type="date"
                        value={values.dob}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.dob && touched.dob ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.dob && touched.dob ? (
                        <div className="input-feedback">{errors.dob}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12}><Headline>Company Information</Headline></Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="job">
                         Job
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="job"
                        placeholder="Job"
                        type="text"
                        value={values.job}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.job && touched.job ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.job && touched.job ? (
                        <div className="input-feedback">{errors.job}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="company_name">
                         Job
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="company_name"
                        placeholder="Company Name"
                        type="text"
                        value={values.company_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.company_name && touched.company_name ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.company_name && touched.company_name ? (
                        <div className="input-feedback">{errors.company_name}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="postcode">
                         Job
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="postcode"
                        placeholder="Postcode"
                        type="number"
                        value={values.postcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.postcode && touched.postcode ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.postcode && touched.postcode ? (
                        <div className="input-feedback">{errors.postcode}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="area">
                         Job
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="area"
                        placeholder="Area"
                        type="text"
                        value={values.area}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.area && touched.area ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.area && touched.area ? (
                        <div className="input-feedback">{errors.area}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="emirates">
                         Job
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <input
                        id="emirates"
                        placeholder="Emirates"
                        type="text"
                        value={values.emirates}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.emirates && touched.emirates ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.emirates && touched.emirates ? (
                        <div className="input-feedback">{errors.emirates}</div>
                      ) : <div className="input-feedback">&nbsp;</div>}
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container spacing={0} className="field">
                    <Grid item xs={4}>
                      <label htmlFor="institution">
                         Institution
                        </label>
                    </Grid>
                    <Grid item xs={8}>
                      <Select
                        id="institution"
                        placeholder="Institution"
                        value={values.institution}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.institution && touched.institution ? 'inputs text-input error' : 'inputs text-input'}
                      />
                      {errors.institution && touched.institution ? (
                        <div className="input-feedback">{errors.institution}</div>
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