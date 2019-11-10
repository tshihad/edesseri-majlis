
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import PhoneInput from '../sub_components/phone_number_input';
import '../../styles/contact.css';



const Loan = styled.div`
 padding: 0 8vw;
`;

export default function Loans(props) {
  useEffect(()=>{
    // props.setUser("user")
  })
  return (
    <Loan>
      <div className="head">Loan</div>
      <Formik
        initialValues={{ request_amount: '', phone: '', installment: '', purpose: '', membership_id: ''}}
        onSubmit={(values, { setSubmitting }) => {

          axios.post('http://10.4.5.22:8080/majlis/contact', {
            request_amount: values.request_amount,
            phone: values.phone,
            installment: values.installment,
            purpose: values.purpose,
            membership_id: values.membership_id
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
          request_amount: Yup.number()
            .required('Required'),
          installment: Yup.string()
            .required('Required'),
          purpose: Yup.string()
            .required('Required'),
          membership_id: Yup.string()
            .required('Required'),
          phone: Yup.string()
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
            <form onSubmit={handleSubmit} className="form" style={{  padding: "2% 4% 4% 8%" }}>
              <div className="head" style={{ paddingBottom: "2%" }}>Requester</div>
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="request_amount" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Request Amount
                </label>
                  <input
                    id="request_amount"
                    placeholder="Enter your Request Amount"
                    type="number"
                    value={values.request_amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.request_amount && touched.request_amount ? 'inputs text-input error' : 'inputs text-input'
                    }
                  />
                  {errors.request_amount && touched.request_amount ? (
                    <div className="input-feedback" style={{marginLeft: "200px"}}>{errors.request_amount}</div>)
                    : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>
              <div>
              <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="installment" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                  Installment                </label>
                  <input
                    id="installment"
                    placeholder="Enter your Installmemt Amount"
                    type="number"
                    value={values.installment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.installment && touched.installment ? 'inputs text-input error' : 'inputs text-input'}
                  />
                  {errors.installment && touched.installment ? (
                    <div className="input-feedback" style={{marginLeft: "200px"}}>{errors.installment}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>
              
              <div>
              <div className="field" style={{ display: "inline-block" }}>
                <label htmlFor="purpose" style={{ verticalAlign: "top", width: "200px", paddingRight: "2em" }}>
                Purpose
                </label>
                <textarea style={{ width: "50%"}}
                  id="purpose"
                  type="textArea"
                  rows="8"
                  cols="83"
                  placeholder="Type Purpose Here"
                  value={values.purpose}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.purpose && touched.purpose ? 'text-input error' : 'text-input'
                  }
                />
                {errors.purpose && touched.purpose ? (
                  <div className="input-feedback" style={{marginLeft: "200px"}}>{errors.purpose}</div>)
                  : <div className="input-feedback">&nbsp;</div>}
              </div>
              </div>

              <div className="head" style={{ paddingBottom: "2%" }}>Guarenter</div> 
              <div>
                <div className="field" style={{ display: "inline-block" }}>
                  <label htmlFor="membership_id" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Membership Id  </label>
                  <input  
                    id="membership_id"
                    placeholder="Enter your Membership Id"
                    type="text"
                    value={values.membership_id}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.membership_id && touched.membership_id ? 'inputs text-input error' : 'inputs text-input'}
                  />
                  {errors.membership_id && touched.membership_id ? (
                    <div className="input-feedback" style={{marginLeft: "200px"}}>{errors.membership_id}</div>
                  ) : <div className="input-feedback">&nbsp;</div>}
                </div>
              </div>
              <div>
              <div style={{ display: "inline-block", verticalAlign: "top" }}>
                  <label htmlFor="phone" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                    Phone
                </label>
                  <PhoneInput id="phone" value={values.phone}
                  />
                  {errors.phone && touched.phone ? (
                    <div className="input-feedback" style={{marginLeft: "200px"}}>{errors.phone}</div>
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
    </Loan>

  )
}