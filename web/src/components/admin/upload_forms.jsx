import React, { useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Loading from '../sub_components/loading';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import { DropzoneArea } from 'material-ui-dropzone';
import { Grid } from '@material-ui/core';
import { isNoSubstitutionTemplateLiteral } from 'typescript';

export default function UploadForms(props) {
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        axios.get(API_BASE_URL + '/majlis/auth/admin', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
            repsonse => {
                if (repsonse.status != 200) {
                    window.location = "/Admin/Login"
                }
            }
        ).catch(error => {
            window.location = "/Admin/Login"
            alert("Authentication Failed")
        })
        setLoading(true)

        props.setUser("admin")
        props.setState("UploadForms")
    }, [ ])
    const Uploads = styled.div`
    margin: 5vh 10vw 0 10vw;
    padding-bottem: 200px;`;
    const Headline = styled.h1`
    color:#1d4219;
    font-size: 1.7em;
    font-family: 'Comfortaa', cursive;
    `;
    const tab = {
        fontSize: "1.3em",
        color: "#1d4219",
        padding: ".5em 1.5em",
        fontWeight: 600,
    }
    const content = {

    }
    return (
        <div>
            {canLoad === true ?
                <Uploads>
                    <Headline>UploadForms</Headline>
                    <Tabs>
                        <TabList>
                            <Tab style={tab}>For All</Tab>
                            <Tab style={tab}>For Members</Tab>
                        </TabList>

                        <TabPanel>
                            <Headline style={{ fontSize: "1.4em", textAlign: "center", paddingBottom: "3vh" }} >Add Public Downloads</Headline>
                            <Formik
                                initialValues={{ title: '', description: '', file: '' }}
                                onSubmit={(values, { setSubmitting }) => {
                                    alert(JSON.stringify(values))
                                    axios.post(API_BASE_URL + '/admin/majlis/uploads/public', {
                                        title: values.title,
                                        description: values.description,
                                        file: values.file,
                                    })
                                        .then((response) => {
                                            alert("Document Added");
                                        })
                                        .catch(function (error) {
                                            alert(error)
                                            console.log(error);;
                                        });
                                    setSubmitting(false);

                                }}
                                validationSchema={Yup.object().shape({
                                    title: Yup.string()
                                        .required('Required'),
                                    description: Yup.string()
                                        .required('Required'),
                                    file: Yup.mixed()
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
                                        setFieldValue,
                                    } = props;
                                    const handleImageChange = file => {
                                        setFieldValue("file", ...file)
                                    }
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <Grid container justify="center">
                                                <Grid xs={4}>
                                                    <DropzoneArea
                                                        dropzoneText="Drag and drop file here or click"
                                                        onChange={handleImageChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container justify="center">
                                                <Grid item xs={12}>&nbsp;</Grid>
                                            </Grid>
                                            <Grid container justify="center">
                                                <Grid item xs={2}>
                                                    <label htmlFor="title">
                                                        Title
                                                    </label>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <input
                                                        id="title"
                                                        placeholder="Enter Document Title"
                                                        type="text"
                                                        value={values.title}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.title && touched.title ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                    />
                                                    {errors.title && touched.title ? (
                                                        <div className="input-feedback" >{errors.title}</div>
                                                    ) : <div className="input-feedback">&nbsp;</div>}
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <label htmlFor="description">
                                                        Description
                        </label>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <textarea
                                                        id="description"
                                                        type="textArea"
                                                        placeholder="Type description Here"
                                                        value={values.content}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.content && touched.content ? 'text-input error' : 'text-input'
                                                        }
                                                    />
                                                    {errors.description && touched.description ? (
                                                        <div className="input-feedback">{errors.description}</div>)
                                                        : <div className="input-feedback">&nbsp;</div>}
                                                </Grid>
                                            </Grid>
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
                                        </form>)
                                }}
                            </Formik>
                        </TabPanel>
                        <TabPanel>
                            <Headline style={{ fontSize: "1.4em", textAlign: "center", paddingBottom: "3vh" }}>Add Member Downloads</Headline>
                            <Formik
                                initialValues={{ title: '', description: '', file: '' }}
                                onSubmit={(values, { setSubmitting }) => {
                                    alert(JSON.stringify(values))
                                    axios.post(API_BASE_URL + '/admin/majlis/uploads/member', {
                                        title: values.title,
                                        description: values.description,
                                        file: values.file,
                                    })
                                        .then((response) => {
                                            alert("Document Added");
                                        })
                                        .catch(function (error) {
                                            alert(error)
                                            console.log(error);;
                                        });
                                    setSubmitting(false);

                                }}
                                validationSchema={Yup.object().shape({
                                    title: Yup.string()
                                        .required('Required'),
                                    description: Yup.string()
                                        .required('Required'),
                                    file: Yup.mixed()
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
                                        setFieldValue,
                                    } = props;
                                    const handleImageChange = file => {
                                        setFieldValue("file", ...file)
                                    }
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <Grid container justify="center">
                                                <Grid xs={4}>
                                                    <DropzoneArea
                                                        dropzoneText="Drag and drop file here or click"
                                                        onChange={handleImageChange}
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container justify="center">
                                                <Grid item xs={12}>&nbsp;</Grid>
                                            </Grid>
                                            <Grid container justify="center">
                                                <Grid item xs={2}>
                                                    <label htmlFor="title">
                                                        Title
                                                    </label>
                                                </Grid>
                                                <Grid item xs={3}>
                                                    <input
                                                        id="title"
                                                        placeholder="Enter Document Title"
                                                        type="text"
                                                        value={values.title}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.title && touched.title ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                    />
                                                    {errors.title && touched.title ? (
                                                        <div className="input-feedback" >{errors.title}</div>
                                                    ) : <div className="input-feedback">&nbsp;</div>}
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <label htmlFor="description">
                                                        Description
                        </label>
                                                </Grid>
                                                <Grid item xs={4}>
                                                    <textarea
                                                        id="description"
                                                        type="textArea"
                                                        placeholder="Type description Here"
                                                        value={values.content}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.content && touched.content ? 'text-input error' : 'text-input'
                                                        }
                                                    />
                                                    {errors.description && touched.description ? (
                                                        <div className="input-feedback">{errors.description}</div>)
                                                        : <div className="input-feedback">&nbsp;</div>}
                                                </Grid>
                                            </Grid>
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
                                        </form>)
                                }}
                            </Formik>
                        </TabPanel>
                    </Tabs>
                </Uploads>
                : <Loading />}</div>
    )
}