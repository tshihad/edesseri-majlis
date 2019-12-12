import React, { useEffect } from 'react'
import Select from 'react-select';
import { DropzoneArea } from 'material-ui-dropzone';
import styled from 'styled-components'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
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
import { API_BASE_URL } from '../constants'
import Loading from '../sub_components/loading'


const JoinMajlisCard = styled.div`
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

const yesnoOptions = [
    {
        label: 'yes',
        value: 'yes'
    },
    {
        label: 'no',
        value: 'no'
    }
];
export default function JoinMajlis(props) {
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
    }, [ ])
    var FormReset
    return (
        <div>
            {canLoad === true ?
                <JoinMajlisCard>
                    <Paper>
                        <Formik
                            initialValues={{
                                email: props.userFields.email || '',
                                name: props.userFields.name || '',
                                housename: props.userFields.housename || '',
                                fathername: props.userFields.fathername || '',
                                place: props.userFields.place || '',
                                country: props.userFields.country || '',
                                content: props.userFields.content || '',
                                phone_number_1: props.userFields.phone_number_1 || '',
                                phone_number_2: props.userFields.phone_number_2 || '',
                                office_phone_number: props.userFields.office_phone_number || '',
                                home_phone_number: props.userFields.home_phone_number || '',
                                bloodgroup: props.userFields.bloodgroup || '',
                                passport: props.userFields.passport || '',
                                dob: props.userFields.dob || '',
                                job: props.userFields.job || '',
                                company_name: props.userFields.company_name || '',
                                postcode: props.userFields.postcode || '',
                                area: props.userFields.area || '',
                                emirates: props.userFields.emirates || '',
                                education: props.userFields.education || '',
                                jobqualification: props.userFields.jobqualification || '',
                                residential: props.userFields.residential || '',
                                area: props.userFields.area || '',
                                building: props.userFields.building || '',
                                flat: props.userFields.flat || '',
                                emirates_residential: props.userFields.emirates_residential || '',
                                marriage_status: props.userFields.marriage_status || '',
                                family_status: props.userFields.family_status || '',
                                no_of_boys: props.userFields.no_of_boys || '',
                                no_of_girls: props.userFields.no_of_girls || '',
                                closest_relative: props.userFields.closest_relative || '',
                                relative_phone: props.userFields.relative_phone || '',
                                address: props.userFields.address || '',
                                place_home: props.userFields.place_home || '',
                                person_to_contact: props.userFields.person_to_contact || '',
                                person_to_contact_relation: props.userFields.person_to_contact_relation || '',
                                phone_home: props.userFields.phone_home || '',
                                mahal_phone: props.userFields.mahal_phone || '',
                                file: props.userFields.file || ''
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                axios.post(API_BASE_URL + '/majlis/add/member', {
                                    email: values.email,
                                    name: values.name,
                                    housename: values.housename,
                                    fathername: values.fathername,
                                    place: values.place,
                                    country: values.country,
                                    content: values.content,
                                    phone_number_1: values.phone_number_1,
                                    phone_number_2: values.phone_number_2,
                                    office_phone_number: values.office_phone_number,
                                    home_phone_number: values.home_phone_number,
                                    bloodgroup: values.bloodgroup,
                                    passport: values.passport,
                                    dob: values.dob,
                                    job: values.job,
                                    company_name: values.company_name,
                                    postcode: values.postcode,
                                    area: values.area,
                                    emirates: values.emirates,
                                    education: values.education,
                                    jobqualification: values.jobqualification,
                                    residential: values.residential,
                                    area: values.area,
                                    building: values.building,
                                    flat: values.flat,
                                    emirates_residential: values.emirates_residential,
                                    marriage_status: values.marriage_status,
                                    family_status: values.family_status,
                                    no_of_boys: values.no_of_boys,
                                    no_of_girls: values.no_of_girls,
                                    closest_relative: values.closest_relative,
                                    relative_phone: values.relative_phone,
                                    address: values.address,
                                    place_home: values.place_home,
                                    person_to_contact: values.person_to_contact,
                                    person_to_contact_relation: values.person_to_contact_relation,
                                    phone_home: values.phone_home,
                                    mahal_phone: values.mahal_phone,
                                    file: values.file
                                })
                                    .then((response) => {
                                        alert("Information Recorderd for Admin Verification");
                                        FormReset()
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });
                                setSubmitting(false);

                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email()
                                    .required('Required')
                                ,
                                name: Yup.string()
                                    .required('Required')
                                ,
                                housename: Yup.string()
                                // .required('Required')
                                ,
                                fathername: Yup.string()
                                // .required('Required')
                                ,
                                lastname: Yup.string()
                                // .required('Required')
                                ,
                                place: Yup.string()
                                // .required('Required')
                                ,
                                country: Yup.string()
                                // .required('Required')
                                ,
                                content: Yup.string()
                                // .required('Required')
                                ,
                                phone_number_1: Yup.number()
                                // .required('Required')
                                ,
                                phone_number_2: Yup.number(),
                                office_phone_number: Yup.number(),
                                home_phone_number: Yup.number(),
                                bloodgroup: Yup.object(),
                                passport: Yup.string()
                                // .required('Required')
                                ,
                                dob: Yup.date()
                                // .required('Required')
                                ,
                                job: Yup.string()
                                // .required('Required')
                                ,
                                company_name: Yup.string()
                                // .required('Required')
                                ,
                                postcode: Yup.number(),
                                area: Yup.string(),
                                emirates: Yup.string(),
                                education: Yup.string()
                                // .required('Required')
                                ,
                                jobqualification: Yup.string()
                                // .required('Required')
                                ,
                                residential: Yup.string()
                                // .required('Required')
                                ,
                                area: Yup.string(),
                                building: Yup.string(),
                                flat: Yup.string(),
                                emirates_residential: Yup.string(),
                                marriage_status: Yup.object()
                                // .required('Required')
                                ,
                                family_status: Yup.object()
                                // .required('Required')
                                ,
                                no_of_boys: Yup.number(),
                                no_of_girls: Yup.number(),
                                closest_relative: Yup.string(),
                                relative_phone: Yup.number(),
                                address: Yup.string()
                                // .required('Required')
                                ,
                                place_home: Yup.string()
                                // .required('Required')
                                ,
                                person_to_contact: Yup.string()
                                // .required('Required')
                                ,
                                person_to_contact_relation: Yup.string()
                                // .required('Required')
                                ,
                                phone_home: Yup.number()
                                // .required('Required')
                                ,
                                mahal_phone: Yup.number()
                                // .required('Required')
                                ,
                                file: Yup.mixed()
                                // .required('Required')
                                ,
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
                                FormReset = handleReset
                                const onChange = value => {
                                    console.log(values);
                                    setFieldValue("bloodgroup", value);
                                }
                                const onInstitutionChange = value => {
                                    setFieldValue("institution", value);
                                }
                                const onMarriageChange = value => {
                                    setFieldValue("marriage_status", value);
                                }
                                const onFamilyStatusChange = value => {
                                    setFieldValue("family_status", value);
                                }
                                const handleImageChange = file => {
                                    setFieldValue("file", ...file)
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
                                                            value={values.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.name && touched.name ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.housename && touched.housename ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.fathername && touched.fathername ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.phone_number_1 && touched.phone_number_1 ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.phone_number_2 && touched.phone_number_2 ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.office_phone_number && touched.office_phone_number ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.home_phone_number && touched.home_phone_number ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.email && touched.email ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                        <label htmlFor="bloodgroup" style={{ color: 'black', fontSize: '16px' }}>
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
                                                                errors.bloodgroup && touched.bloodgroup ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                            type="text"
                                                            value={values.passport}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.passport && touched.passport ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.dob && touched.dob ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                                errors.job && touched.job ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                            Company Name
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
                                                                errors.company_name && touched.company_name ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                            Postcode
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
                                                                errors.postcode && touched.postcode ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                            Area
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
                                                                errors.area && touched.area ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                            State
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="emirates"
                                                            placeholder="State"
                                                            type="text"
                                                            value={values.emirates}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.emirates && touched.emirates ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                            onChange={onInstitutionChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.institution && touched.institution ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.institution && touched.institution ? (
                                                            <div className="input-feedback">{errors.institution}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}><Headline>Educational Details</Headline></Grid>
                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="education">
                                                            Educational Qualification
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="education"
                                                            placeholder="Education"
                                                            value={values.education}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.education && touched.education ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.education && touched.education ? (
                                                            <div className="input-feedback">{errors.education}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="jobqualification">
                                                            Job Qualification
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="jobqualification"
                                                            placeholder="Job Qualification"
                                                            value={values.jobqualification}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.jobqualification && touched.jobqualification ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.jobqualification && touched.jobqualification ? (
                                                            <div className="input-feedback">{errors.jobqualification}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="licence">
                                                            Licence
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="licence"
                                                            placeholder="Licence"
                                                            value={values.licence}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.licence && touched.licence ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.licence && touched.licence ? (
                                                            <div className="input-feedback">{errors.licence}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}><Headline>Residential Details</Headline></Grid>
                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="residential">
                                                            Residential
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="residential"
                                                            placeholder="Residential(U.A.E)"
                                                            value={values.residential}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.residential && touched.residential ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.residential && touched.residential ? (
                                                            <div className="input-feedback">{errors.residential}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="area">
                                                            Area
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="area"
                                                            placeholder="Area"
                                                            value={values.area}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.area && touched.area ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
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
                                                        <label htmlFor="building">
                                                            Building
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="building"
                                                            placeholder="Building"
                                                            value={values.building}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.building && touched.building ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.building && touched.building ? (
                                                            <div className="input-feedback">{errors.building}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="Flat">
                                                            Flat/Room No
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="flat"
                                                            placeholder="Flat/Room No"
                                                            value={values.flat}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.flat && touched.flat ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.flat && touched.flat ? (
                                                            <div className="input-feedback">{errors.flat}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="emirates_residential">
                                                            State
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="emirates_residential"
                                                            placeholder="State"
                                                            value={values.emirates_residential}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.emirates_residential && touched.emirates_residential ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.emirates_residential && touched.emirates_residential ? (
                                                            <div className="input-feedback">{errors.emirates_residential}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="marriage_status">
                                                            Married
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Select
                                                            id="marriage_status"
                                                            options={yesnoOptions}
                                                            placeholder="Married"
                                                            value={values.marriage_status}
                                                            onChange={onMarriageChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.marriage_status && touched.marriage_status ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.marriage_status && touched.marriage_status ? (
                                                            <div className="input-feedback">{errors.marriage_status}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="family_status">
                                                            Family living with you
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <Select
                                                            options={yesnoOptions}
                                                            id="family_status"
                                                            placeholder="Family living with you"
                                                            value={values.family_status}
                                                            onChange={onFamilyStatusChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.family_status && touched.family_status ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.family_status && touched.family_status ? (
                                                            <div className="input-feedback">{errors.family_status}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="no_of_boys">
                                                            No of children(Boys)
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="no_of_boys"
                                                            type="number"
                                                            placeholder="No of children(Boys)"
                                                            value={values.no_of_boys}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.no_of_boys && touched.no_of_boys ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.no_of_boys && touched.no_of_boys ? (
                                                            <div className="input-feedback">{errors.no_of_boys}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="no_of_girls">
                                                            No of children(girls)
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="no_of_girls"
                                                            type="number"
                                                            placeholder="No of children(Girls)"
                                                            value={values.no_of_girls}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.no_of_girls && touched.no_of_girls ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.no_of_girls && touched.no_of_girls ? (
                                                            <div className="input-feedback">{errors.no_of_girls}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="closest_relative">
                                                            Closest Relative in U.A.E
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="closest_relative"
                                                            placeholder="Closest Relative in U.A.E"
                                                            value={values.closest_relative}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.closest_relative && touched.closest_relative ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.closest_relative && touched.closest_relative ? (
                                                            <div className="input-feedback">{errors.closest_relative}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="relative_phone">
                                                            Relative's Phone U.A.E
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="relative_phone"
                                                            type="number"
                                                            placeholder="Relative's Phone U.A.E"
                                                            value={values.relative_phone}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.relative_phone && touched.relative_phone ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.relative_phone && touched.relative_phone ? (
                                                            <div className="input-feedback">{errors.relative_phone}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="relation">
                                                            Relationship
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="relation"
                                                            type="number"
                                                            placeholder="Relationship"
                                                            value={values.relation}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.relation && touched.relation ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.relation && touched.relation ? (
                                                            <div className="input-feedback">{errors.relation}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12}><Headline>Residential Details(Home)</Headline></Grid>
                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="address">
                                                            Address(Home)
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="address"
                                                            placeholder="Address"
                                                            value={values.address}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.address && touched.address ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.address && touched.address ? (
                                                            <div className="input-feedback">{errors.address}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="place_home">
                                                            Place(Home)
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="place_home"
                                                            placeholder="Place"
                                                            value={values.place_home}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.place_home && touched.place_home ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.place_home && touched.place_home ? (
                                                            <div className="input-feedback">{errors.place_home}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="person_to_contact">
                                                            Person To Contact
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="person_to_contact"
                                                            placeholder="Person To Contact"
                                                            value={values.person_to_contact}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.person_to_contact && touched.person_to_contact ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.person_to_contact && touched.person_to_contact ? (
                                                            <div className="input-feedback">{errors.person_to_contact}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="person_to_contact_relation">
                                                            Relationship
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="person_to_contact_relation"
                                                            placeholder="Relationship"
                                                            value={values.person_to_contact_relation}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.person_to_contact_relation && touched.person_to_contact_relation ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.person_to_contact_relation && touched.person_to_contact_relation ? (
                                                            <div className="input-feedback">{errors.person_to_contact_relation}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="phone_home">
                                                            Phone Number(Home)
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="phone_home"
                                                            placeholder="Phone Number"
                                                            value={values.phone_home}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.phone_home && touched.phone_home ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.phone_home && touched.phone_home ? (
                                                            <div className="input-feedback">{errors.phone_home}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="mahal_phone">
                                                            Mahal Number
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <input
                                                            id="mahal_phone"
                                                            placeholder="Mahal Number"
                                                            value={values.mahal_phone}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.mahal_phone && touched.mahal_phone ? 'cal-inputs text-input error' : 'cal-inputs text-input'}
                                                        />
                                                        {errors.mahal_phone && touched.mahal_phone ? (
                                                            <div className="input-feedback">{errors.mahal_phone}</div>
                                                        ) : <div className="input-feedback">&nbsp;</div>}
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={6}>
                                                <Grid container spacing={0} className="field">
                                                    <Grid item xs={4}>
                                                        <label htmlFor="mahal_phone">
                                                            Profile Image
                        </label>
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <DropzoneArea id="file"
                                                            onChange={handleImageChange}
                                                        />
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
                : <Loading />}</div>

    )
}