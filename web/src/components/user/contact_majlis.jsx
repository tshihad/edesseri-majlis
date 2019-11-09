
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../styles/contact.css';
import styled from 'styled-components';
import axios from 'axios';
import PhoneInput from '../sub_components/phone_number_input'


const Contact = styled.div`
margin: 10vh 10vw 0 10vw;`;
export default function Contactmajlis() {
  return (
    <Contact>
      <div className="head">Contact Majlis</div>
      <Formik
        initialValues={{ email: '', phone: '', firstname: '', lastname: '', place: '', country: '', content: '' }}
        onSubmit={(values, { setSubmitting }) => {

          axios.post('http://10.4.5.22:8080/majlis/contact', {
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
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="firstname" style={{ display: "inline-block" }}>
                    First Name                </label>
                  <input
                    id="firstname"
                    placeholder="Enter your place"
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
                </div>
                <div className="field" style={{ display: "inline-block", marginLeft: "2%" }}>
                  <label htmlFor="lastname" style={{ display: "inline-block" }}>
                    Last Name                </label>
                  <input
                    id="lastname"
                    placeholder="Enter your country"
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
                </div>
              </div>
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="email" style={{ display: "inline-block" }}>
                    Email
                </label>
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
                </div>
                <div style={{ display: "inline-block", verticalAlign: "top", marginLeft: "3%" }}>
                  <label htmlFor="phone" style={{ display: "inline-block" }}>
                    Phone
                </label>
                  <PhoneInput id="phone" value={values.lastname}
                  />
                  {errors.place && touched.place ? (
                    <div className="input-feedback">{errors.place}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="place" style={{ display: "inline-block" }}>
                    Place                </label>
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
                </div>
                <div className="field" style={{ display: "inline-block", marginLeft: "3%" }}>
                  <label htmlFor="country" style={{ display: "inline-block" }}>
                    Country                </label>
                  <input
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
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>
              <div className="field">
                <label htmlFor="content" style={{ verticalAlign: "top" }}>
                  content
                </label>
                <textarea
                  id="content"
                  type="textArea"
                  rows="8"
                  cols="83"
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
                  : <div className="input-feedback">&nbsp;</div>}
              </div>
              <div style={{ textAlign: "center" }}>
                <button
                  type="button"
                  className="buttons outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
            </button>
                <button type="submit" className="buttons" disabled={isSubmitting}>
                  Submit
            </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </Contact>

  )
}