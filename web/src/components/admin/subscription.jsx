import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import styled from 'styled-components';
import * as Yup from 'yup';

const SubscriptionCard = styled.div`
margin: 5vh 10vw 0 10vw;`;
const Headline = styled.h1`
color:#1d4219;
font-size: 1.7em;
font-family: 'Comfortaa', cursive;
`;
export default function Subscriptions(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("Subscriptions")
    })
    const YearRegExp = /^[1-9]{4}$/;

    return (
        <SubscriptionCard>
            <Headline>Add Subscription</Headline>
            <Formik
                initialValues={{ member_id: '', sub_year: '', sub_month: '', sub_amount: '', sub_type: '', payment_date: '', payment_event: '', created_by: '' }}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    if (!values.sub_year.match(YearRegExp)) {
                        setErrors({ sub_year: 'Invalid Year' });
                        setSubmitting(false);
                        return;
                    }
                    axios.post('http://localhost:8080/majlis/admin/subscription', {
                        member_id: values.member_id,
                        sub_year: values.sub_year,
                        sub_month: values.sub_month,
                        sub_amount: values.sub_amount,
                        sub_type: values.sub_type,
                        payment_date: values.country,
                        payment_event: values.payment_event,
                        created_by: values.created_by
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
                    member_id: Yup.string()
                        .required('Required'),
                    sub_year: Yup.string()
                        .required('Required'),
                    sub_month: Yup.string()
                        .required('Required'),
                    sub_amount: Yup.string()
                        .required('Required'),
                    sub_type: Yup.string()
                        .required('Required'),
                    payment_date: Yup.string()
                        .required('Required'),
                    payment_event: Yup.string()
                        .required('Required'),
                    created_by: Yup.string()
                        .required('Required'),
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
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Member ID
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="member_id"
                                                placeholder="Enter Member ID"
                                                type="text"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.member_id && touched.member_id ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.member_id && touched.member_id ? (
                                                <div className="input-feedback">{errors.member_id}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Subscription Year
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="sub_year"
                                                placeholder="Enter Subscription Year"
                                                type="number"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.sub_year && touched.sub_year ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.sub_year && touched.sub_year ? (
                                                <div className="input-feedback">{errors.sub_year}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Subscription Month
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <select id="sub_month"
                                                type="text"
                                                value={values.sub_month}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.sub_month && touched.sub_month ? 'inputs text-input error' : 'inputs text-input'}>
                                                <option >Month</option>
                                                <option value="0">January</option>
                                                <option value="1">February</option>
                                                <option value="2">March</option>
                                                <option value="3">April</option>
                                                <option value="4">May</option>
                                                <option value="5">June</option>
                                                <option value="6">July</option>
                                                <option value="7">August</option>
                                                <option value="8">September</option>
                                                <option value="9">October</option>
                                                <option value="10">November</option>
                                                <option value="11">December</option>

                                            </select>
                                            {errors.sub_month && touched.sub_month ? (
                                                <div className="input-feedback">{errors.sub_month}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Subscription Amount
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="sub_amount"
                                                placeholder="Enter Subscription Amount"
                                                type="number"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.sub_amount && touched.sub_amount ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.sub_amount && touched.sub_amount ? (
                                                <div className="input-feedback">{errors.sub_amount}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Subscription type
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <select id="sub_type"
                                                type="text"
                                                value={values.sub_type}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.sub_type && touched.sub_type ? 'inputs text-input error' : 'inputs text-input'}>
                                                <option >type</option>
                                                <option value="0">Normal</option>
                                                <option value="1">Concession</option>
                                            </select>
                                            {errors.sub_type && touched.sub_type ? (
                                                <div className="input-feedback">{errors.sub_type}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Payment Date
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="payment_date"
                                                placeholder="Enter Payment Date"
                                                type="date"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ padding: ".4em" }}
                                                className={
                                                    errors.payment_date && touched.payment_date ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.payment_date && touched.payment_date ? (
                                                <div className="input-feedback">{errors.payment_date}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Payment Event
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="payment_event"
                                                placeholder="Enter Payment Event"
                                                type="text"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.payment_event && touched.payment_event ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.payment_event && touched.payment_event ? (
                                                <div className="input-feedback">{errors.payment_event}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="firstname">
                                                Created By
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="created_by"
                                                placeholder="Enter Created By"
                                                type="text"
                                                value={values.firstname}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.created_by && touched.created_by ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.created_by && touched.created_by ? (
                                                <div className="input-feedback">{errors.created_by}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
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
        </SubscriptionCard>
    )
}