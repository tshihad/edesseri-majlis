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
        id: 'code',
        label: 'Code',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'description',
        label: 'Description',
        align: 'center',
        minWidth: 200
    },
    {
        id: 'nature',
        label: 'Nature',
        align: 'center',
        minWidth: 70
    },
    {
        id: 'type',
        label: 'Type',
        align: 'center',
        minWidth: 70
    },
    {
        id: 'mode',
        label: 'Mode',
        align: 'center',
        minWidth: 70
    },
    {
        id: 'status',
        label: 'Status',
        align: 'center',
        minWidth: 70
    }]
export default function EventCalendar(props) {
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

        axios.get(API_BASE_URL + "/majlis/admin/welfare/scheme",
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
        axios.delete(API_BASE_URL + '/majlis/admin/welfare/scheme' + eventId, {
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
            <EventTable tablename='Welfare Schema' columns={EventColumns} rows={rows}
                deleteEvent={deleteEvent} setreload={setreload} />
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
    const YearRegExp = /^[0-9]{4}$/;
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
                initialValues={{ code: '', description: '', nature: '', type: '', status: '', mode: '' }}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    axios.post(API_BASE_URL + '/majlis/admin/welfare/scheme', {
                        code: values.code,
                        description: values.description,
                        nature: values.nature,
                        type: values.type,
                        status: values.status,
                        mode: values.mode,
                    },
                        {
                            headers: {
                                'Authorization': localStorage.getItem('EdasseryMajlisToken')
                            }
                        })
                        .then((response) => {
                            alert("welfare Schema Added");
                            window.location.reload()
                        })
                        .catch(function (error) {
                            console.log(error);;
                        });
                    setSubmitting(false);

                }}
                validationSchema={Yup.object().shape({
                    code: Yup.string()
                        .required('Required'),
                    description: Yup.string()
                        .required('Required'),
                    nature: Yup.string()
                        .required('Required'),
                    type: Yup.string()
                        .required('Required'),
                    status: Yup.string()
                        .required('Required'),
                    mode: Yup.string()
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
                                            <label htmlFor="code">
                                                Code
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="code"
                                                placeholder="Enter Code"
                                                type="text"
                                                value={values.code}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.code && touched.code ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.code && touched.code ? (
                                                <div className="input-feedback">{errors.code}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="description">
                                                Description
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="description"
                                                placeholder="Enter Description"
                                                type="text"
                                                value={values.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.description && touched.description ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.description && touched.description ? (
                                                <div className="input-feedback">{errors.description}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="nature">
                                                Nature
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <select id="nature"
                                                type="text"
                                                value={values.nature}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.nature && touched.nature ? 'inputs text-input error' : 'inputs text-input'}>
                                                <option >nature</option>
                                                <option value="welfare">Welfare</option>
                                                <option value="operation">Operation</option>

                                            </select>
                                            {errors.nature && touched.nature ? (
                                                <div className="input-feedback">{errors.nature}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="type">
                                                Type
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <select id="type"
                                                type="text"
                                                value={values.type}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.type && touched.type ? 'inputs text-input error' : 'inputs text-input'}>
                                                <option >type</option>
                                                <option value="collection">Collection</option>
                                                <option value="payment">Payment</option>
                                            </select>
                                            {errors.type && touched.type ? (
                                                <div className="input-feedback">{errors.type}</div>
                                            ) : <div className="input-feedback">&nbsp;</div>}
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={0}>
                                        <Grid item xs={4} >
                                            <label htmlFor="mode">
                                                Mode
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <select id="mode"
                                                type="text"
                                                value={values.mode}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.mode && touched.mode ? 'inputs text-input error' : 'inputs text-input'}>
                                                <option >mode</option>
                                                <option value="normal">Normal</option>
                                                <option value="recurring">Recurring</option>
                                            </select>
                                            {errors.mode && touched.mode ? (
                                                <div className="input-feedback">{errors.mode}</div>
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
                                        Add Schema
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
                                            Edit
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