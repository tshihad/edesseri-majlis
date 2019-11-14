import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import '../../styles/contact.css';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'



const Welfare = styled.div`
 padding: 0 8vw;
`;

export default function FamilyWelfare(props) {
  const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {

            axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
              repsonse => {
                if (repsonse.status != 200) {
                  window.location = "/Admin/Login"
                }
              }
            ).catch(error => {
              window.location = "/Admin/Login"
              alert("Authentication Failed")
            })
          
    props.setUser("admin")
    props.setState("FamilyWelfare")
  })
  return (
    <div>
      {canLoad === true ?
    <Welfare>
      <Formik
        initialValues={{ member_id: '', welfare_date: '', title: '', description: '', amount: '', currency: '' }}
        onSubmit={(values, { setSubmitting }) => {

          axios.post(API_BASE_URL + '/majlis/familywelfare', {
            member_id: values.member_id,
            welfare_date: values.welfare_date,
            title: values.title,
            purpose: values.purpose,
            amount: values.amount
          })
            .then((response) => {
              alert("Information Recorded Successfully");
            })
            .catch(function (error) {
              console.log(error);
            });
          setSubmitting(false);

        }}
        validationSchema={Yup.object().shape({
          member_id: Yup.number()
            .required('Required'),
          title: Yup.string()
            .required('Required'),
          description: Yup.string()
            .required('Required'),
          amount: Yup.number()
            .required('Required'),
          welfare_date: Yup.string()
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
            <form onSubmit={handleSubmit} className="form" style={{ padding: "2% 4% 4% 8%" }}>
              <div className="head" style={{ paddingBottom: "2%" }}>Family Welfare</div>
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="member_id" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Member Id
                </label>
                  <input
                    id="member_id"
                    placeholder="Enter your Member Id"
                    type="number"
                    value={values.member_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.member_id && touched.member_id ? 'inputs text-input error' : 'inputs text-input'
                    }
                  />
                  {errors.member_id && touched.member_id ? (
                    <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.member_id}</div>)
                    : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="title" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Title                </label>
                  <input
                    id="title"
                    placeholder="Enter your Title"
                    type="text  "
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.title && touched.title ? 'inputs text-input error' : 'inputs text-input'}
                  />
                  {errors.title && touched.title ? (
                    <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.title}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>

              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="description" style={{ verticalAlign: "top", width: "200px", paddingRight: "2em" }}>
                    Description
                </label>
                  <textarea style={{ width: "50%" }}
                    id="description"
                    type="textArea"
                    rows="8"
                    cols="83"
                    placeholder="Type description here"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.description && touched.description ? 'text-input error' : 'text-input'
                    }
                  />
                  {errors.description && touched.description ? (
                    <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.description}</div>)
                    : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>

              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="amount" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Amount  </label>
                  <input
                    id="amount"
                    placeholder="Enter Amount here"
                    type="number"
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.amount && touched.amount ? 'inputs text-input error' : 'inputs text-input'}
                  />
                  {errors.amount && touched.amount ? (
                    <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.amount}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>

              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="currency" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Currency  </label>
                  <select id="currency"
                    placeholder="Enter Amount here"
                    type="text"
                    value={values.currency}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.currency && touched.currency ? 'inputs text-input error' : 'inputs text-input'}>
                    <option value="Rupees">Rupees</option>
                    <option value="Dirham">Dirham</option>
                  </select>
                  {errors.currency && touched.currency ? (
                    <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.currency}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>

              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="welfare_date" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Welfare Date  </label>
                  <input
                    id="welfare_date"
                    placeholder="Enter welfare_date here"
                    type="date"
                    value={values.welfare_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.welfare_date && touched.welfare_date ? 'inputs text-input error' : 'inputs text-input'}
                  />
                  {errors.welfare_date && touched.welfare_date ? (
                    <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.welfare_date}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
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
    </Welfare>
: <Loading />}</div>
  )
}