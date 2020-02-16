
import React, { useEffect } from 'react';
import { Formik, yupToFormErrors } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import PhoneInput from '../sub_components/phone_number_input';
import '../../styles/contact.css';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core';


const Loan = styled.div`
margin-top: 5vh;
`;
const Headline = styled.h1`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
@media (max-width:700px){
    font-size: 1.5em;
    padding-left: 5vw; 
  }
`;

const Head = styled.div`
color: #1d4219;
font-weight: 600;
font-size: 1.4em;
padding-left: 3vw; 
`;
const Button = styled.button`
border:0;
outline: 0;
margin:1em;
width:90%
background-color: #556b2f;
color: white;
padding: .4em 1em;
font-size: 1.1em;
border: 1px solid #556b2f;
border-radius: .15em;
&:hover{
    font-weight: 600;
    background-color: transparent;
    color: #556b2f;
}
@media (max-width:700px){
    margin: 1vh ;
}
`;
export default function Loans(props) {
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem('VerifiedUser')) {
            setLoading(true)
        } else {
            axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
                repsonse => {
                    if (repsonse.status != 200) {
                        window.location = "/MemberLogin"
                    }
                }
            ).catch(error => {
                window.location = "/MemberLogin"
                alert("Authentication Failed")
            })
        }
        setLoading(true)
    }, [])
    const phoneRegExp = /^\+?[0-9]{10,14}$/;

    return (
        <div>
            {canLoad === true ?
                <div>
                    <MediaQuery minDeviceWidth={701}>
                        <Loan>
                            <Headline>Loan Application</Headline>
                            <Formik
                                initialValues={{ request_amount: '', phone: '', installment: '', purpose: '', membership_id: '' }}

                                onSubmit={(values, { setSubmitting, setErrors }) => {
                                    if (!values.phone.match(phoneRegExp)) {
                                        setErrors({ phone: 'Invalid Phone Number' });
                                        setSubmitting(false);
                                        return;
                                    }
                                    axios.post(API_BASE_URL + '/majlis/member/loan', {
                                        request_amount: values.request_amount,
                                        installment: values.installment,
                                        purpose: values.purpose,
                                        g_member_id: values.membership_id,
                                        g_phone: values.phone,
                                    }, { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
                                        .then((response) => {
                                            if (response.status == 201) {
                                                alert("Information Recorderd for Admin Verification");
                                            } else if (response.status == 203) {
                                                alert(response.statusText)
                                            }
                                        })
                                        .catch(function (error) {
                                            console.log(error);;
                                        });
                                    setSubmitting(false);
                                }}
                                validationSchema={Yup.object().shape({
                                    request_amount: Yup.number()
                                        .required('A Number Value Required'),
                                    installment: Yup.number()
                                        .required('A Number Value Required'),
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
                                        <form onSubmit={handleSubmit} className="form">
                                            <div className="head" style={{ paddingBottom: "2%" }}>Requester</div>
                                            <div style={{ paddingLeft: "3vw" }}>
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.request_amount}</div>)
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.installment}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="field" style={{ display: "inline-block" }}>
                                                        <label htmlFor="purpose" style={{ verticalAlign: "top", width: "200px", paddingRight: "2em" }}>
                                                            Purpose
                                    </label>
                                                        <textarea style={{ width: "50%" }}
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.purpose}</div>)
                                                            : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="head" style={{ paddingBottom: "2%" }}>Guarenter</div>
                                            <div style={{ paddingLeft: "3vw" }}>
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.membership_id}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                                                        <label htmlFor="phone" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                                                            Phone
                                    </label>
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
                                                        {errors.phone && touched.phone ? (
                                                            <div className="input-feedback">{errors.phone}</div>)
                                                            : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
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
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={700}>
                        <Loan>
                            <Headline>Loan Application</Headline>
                            <Formik
                                initialValues={{ request_amount: '', phone: '', installment: '', purpose: '', membership_id: '' }}

                                onSubmit={(values, { setSubmitting, setErrors }) => {
                                    if (!values.phone.match(phoneRegExp)) {
                                        setErrors({ phone: 'Invalid Phone Number' });
                                        setSubmitting(false);
                                        return;
                                    }
                                    axios.post(API_BASE_URL + '/majlis/member/loan', {
                                        request_amount: values.request_amount,
                                        installment: values.installment,
                                        purpose: values.purpose,
                                        g_member_id: values.membership_id,
                                        g_phone: values.phone,
                                    }, { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
                                        .then((response) => {
                                            if (response.status == 201) {
                                                alert("Information Recorderd for Admin Verification");
                                            } else if (response.status == 203) {
                                                alert(response.statusText)
                                            }
                                        })
                                        .catch(function (error) {
                                            console.log(error);;
                                        });
                                    setSubmitting(false);
                                }}
                                validationSchema={Yup.object().shape({
                                    request_amount: Yup.number()
                                        .required('A Number Value Required'),
                                    installment: Yup.number()
                                        .required('A Number Value Required'),
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
                                        <form onSubmit={handleSubmit} className="form">
                                            <Head style={{ paddingBottom: "2%" }}>Requester</Head>
                                            <div style={{ paddingLeft: "3vw" }}>
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.request_amount}</div>)
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.installment}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="field" style={{ display: "inline-block" }}>
                                                        <label htmlFor="purpose" style={{ verticalAlign: "top", width: "200px", paddingRight: "2em" }}>
                                                            Purpose
                                    </label>
                                                        <textarea style={{ width: "90%" }}
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.purpose}</div>)
                                                            : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <Head style={{ paddingBottom: "2%" }}>Guarenter</Head>
                                            <div style={{ paddingLeft: "3vw" }}>
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
                                                            <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.membership_id}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style={{ display: "inline-block", verticalAlign: "top" }}>
                                                        <label htmlFor="phone" style={{ display: "inline-block", width: "200px", paddingRight: "2em" }}>
                                                            Phone
                                    </label>
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
                                                        {errors.phone && touched.phone ? (
                                                            <div className="input-feedback">{errors.phone}</div>)
                                                            : <div className="input-feedback">&nbsp;</div>}
                                                    </div>
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
                        <Grid container spacing={0}>
                            <Grid xs={1}></Grid>
                            <Grid item xs={11}><Link to="/User/UserOptions/Subscriptions" ><Button>Subscriptions</Button></Link></Grid>
                            <Grid xs={1}></Grid>
                            <Grid item xs={11}><Link to="/User/UserOptions/FamilyWelfare"><Button>Family Welfare</Button></Link></Grid>
                        </Grid>
                    </MediaQuery>
                </div>


                : <Loading />}
        </div>
    )
}