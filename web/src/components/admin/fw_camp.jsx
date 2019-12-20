import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { API_BASE_URL } from '../constants';
import { Grid } from '@material-ui/core';
import '../../styles/calendar.css';
import { Formik } from 'formik'
import * as Yup from 'yup';


const EventCalendarCard = styled.div`
`;

const EventColumns = [
    {
        id: 'campaign_code',
        label: 'Campaign Code',
        align: 'center',
        minWidth: 60
    },
    {
        id: 'welfare_code',
        label: 'Welfare Code',
        align: 'center',
        minWidth: 60
    },
    {
        id: 'fiscal_period',
        label: 'Fiscal Period',
        align: 'center',
        minWidth: 60
    },
    {
        id: 'start_date',
        label: 'Start Date',
        align: 'center',
        minWidth: 60
    },
    {
        id: 'end_date',
        label: 'End Date',
        align: 'center',
        minWidth: 60
    },
    {
        id: 'campaign_note',
        label: 'Campaign Note',
        align: 'center',
        minWidth: 60
    },
    {
        id: 'status',
        label: 'Status',
        align: 'center',
        minWidth: 60
    }]
export default function Campaign(props) {
    const [rows, setrows] = React.useState([])
    const [reload, setreload] = React.useState([])
    const toStdDate = (date) => {
        var year = date.slice(0, 4)
        var month = date.slice(5, 7)
        var day = date.slice(8, 10)
        return day + "-" + month + "-" + year
    }
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
        axios.get(API_BASE_URL + "/majlis/admin/welfare/campaign",
            {
                headers: {
                    'Authorization': localStorage.getItem('EdasseryMajlisToken')
                }
            })
            .then((response) => {
                if (response.data.result.length > 0) {
                    setrows(response.data.result)
                }
            }).catch((err) => {
                console.log(err)
            })
    }, [reload]);

    const deleteEvent = (eventId) => {
        axios.delete(API_BASE_URL + '/majlis/admin/event-calendar/' + eventId, {
            headers: {
                'Authorization': localStorage.getItem('EdasseryMajlisToken')
            }
        })
            .then(response => {
                console.log("deleted", response)
                window.location.reload()
            })
            .catch(err => console.log("Netwoek Error", err));
    }

    return (
        <EventCalendarCard>
            <EventTable columns={EventColumns} rows={rows}
                tablename="Welfare Campaigns" deleteEvent={deleteEvent} setreload={setreload} />
        </EventCalendarCard>
    )
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: "#e5eee5"
    },
    tableWrapper: {
        maxHeight: '70vh',
        overflow: 'auto',
        padding: '0 .5vw'
    },
    heading: {
        display: "inline-block",
        padding: '1em',
        color: '#1d4219',
        minHeight: '4vw',
        fontSize: '1.7em',
        fontWeight: '600',
    },
    cell: {
        padding: "1vw .5vw",
        fontSize: ".9vw",
        zIndex: "0",
        fontSize: "1em",
    },
});

const MainButton = styled.button`
border:0;
outline: 0;
margin-top:1em;
background-color: #556b2f;
color: white;
width:80%;
padding: .4em 1em;
font-size: 1.1em;
border: 1px solid #556b2f;
border-radius: .15em;
&:hover{
    font-weight: 600;
    background-color: transparent;
    color: #556b2f;
}
`;
export function EventTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    var FormReset
    const toStdDate = (date) => {
        var year = date.slice(0, 4)
        var month = date.slice(5, 7)
        var day = date.slice(8, 10)
        return day + "-" + month + "-" + year
    }
    return (
        <Paper className={classes.root}>
            <div>
                <div className={classes.heading}>{props.tablename}</div>
            </div>
            <Formik
                initialValues={{ campaign_code: '', welfare_code: '', fiscal_period: '', amount: '', start_date: '', end_date: '', campaign_note: '', status: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    alert("fdskbg")
                    alert(JSON.stringify(values))
                    axios.post(API_BASE_URL + '/majlis/admin/welfare/campaign', {
                        campaign_code: values.campaign_code,
                        welfare_code: values.welfare_code,
                        fiscal_period: values.fiscal_period,
                        amount: values.amount,
                        start_date: values.start_date,
                        end_date: values.end_date,
                        campaign_note: values.campaign_note,
                        status: values.status,
                    }, {
                        headers: {
                            'Authorization': localStorage.getItem('EdasseryMajlisToken')
                        }
                    })
                        .then((response) => {
                            alert("Subscription Added");
                            FormReset()
                        })
                        .catch(function (error) {
                            alert(error)
                            console.log(error);
                        });
                    setSubmitting(false);

                }}
                validationSchema={Yup.object().shape({
                    campaign_code: Yup.string()
                        .required('Required'),
                    welfare_code: Yup.string()
                        .required('Required'),
                    fiscal_period: Yup.string()
                        .required('Required'),
                    amount: Yup.string()
                        .required('Required'),
                    start_date: Yup.string()
                        .required('Required'),
                    end_date: Yup.string()
                        .required('Required'),
                    campaign_note: Yup.string()
                        .required('Required'),
                    status: Yup.string()
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
                    FormReset = handleReset
                    return (
                        <form onSubmit={handleSubmit} className="form">
                            <Grid container spacing={0}>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="campaign_code">
                                                Campaign Code
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="campaign_code"
                                                placeholder="Enter Campaign code"
                                                type="text"
                                                value={values.campaign_code}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.campaign_code && touched.campaign_code ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.campaign_code && touched.campaign_code ? (
                                                <div className="input-feedback">{errors.campaign_code}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="welfare_code">
                                                Welfare Code
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="welfare_code"
                                                placeholder="Enter Welfare Code"
                                                type="text"
                                                value={values.welfare_code}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.welfare_code && touched.welfare_code ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.welfare_code && touched.welfare_code ? (
                                                <div className="input-feedback">{errors.welfare_code}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="fiscal_period">
                                                Fiscal Period
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input id="fiscal_period"
                                                type="number"
                                                value={values.fiscal_period}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.fiscal_period && touched.fiscal_period ? 'inputs text-input error' : 'inputs text-input'}
                                            />

                                            {errors.fiscal_period && touched.fiscal_period ? (
                                                <div className="input-feedback">{errors.fiscal_period}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="start_date">
                                                Start Date
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="start_date"
                                                type="date"
                                                value={values.start_date}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.start_date && touched.start_date ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.start_date && touched.start_date ? (
                                                <div className="input-feedback">{errors.start_date}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="end_date">
                                                End Date
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input id="end_date"
                                                type="date"
                                                value={values.end_date}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.end_date && touched.end_date ? 'inputs text-input error' : 'inputs text-input'} />
                                            {errors.end_date && touched.end_date ? (
                                                <div className="input-feedback">{errors.end_date}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="campaign_note">
                                                Campaign Note
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="campaign_note"
                                                type="text"
                                                value={values.campaign_note}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                style={{ padding: ".4em" }}
                                                className={
                                                    errors.campaign_note && touched.campaign_note ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.campaign_note && touched.campaign_note ? (
                                                <div className="input-feedback">{errors.campaign_note}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="status">
                                                Status
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <select id="status"
                                                type="text"
                                                value={values.status}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.status && touched.status ? 'inputs text-input error' : 'inputs text-input'}>
                                                <option >status</option>
                                                <option value="Active">Active</option>
                                                <option value="Inactive">Inactive</option>
                                            </select>
                                            {errors.status && touched.status ? (
                                                <div className="input-feedback">{errors.status}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}></Grid>
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
                                        ADD
                                                </button>
                                </Grid>
                                <Grid item xs={4}></Grid>

                            </Grid>

                        </form>
                    );
                }}
            </Formik>

            <div className={classes.tableWrapper}>
                <Table stickyHeader>
                    <TableHead style={{ zIndex: "-1" }}>
                        <TableRow >
                            {props.columns.map(column => (
                                <TableCell className={classes.cell}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontSize: "1.1em", color: '#f1f1f1', backgroundColor: "rgb(85, 107, 47)" }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                            <TableCell style={{ fontSize: "1.1em", color: '#f1f1f1', backgroundColor: "rgb(85, 107, 47)" }} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {props.columns.map(column => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell className={classes.cell} key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}

                                    {/* <TableCell >
                                        <Button variant="contained" color="secondary" onClick={() => props.deleteEvent(row.ID)} >
                                            Delete
                                        </Button>
                                    </TableCell> */}

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
            <div style={{ fontSize: '0px' }}>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    component="div"
                    count={props.rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'previous page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'next page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                /></div>
        </Paper>

    );
}