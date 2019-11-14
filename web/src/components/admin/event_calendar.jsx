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
import '../../styles/contact.css';
import { Formik } from 'formik'
import * as Yup from 'yup';


const EventCalendarCard = styled.div`
margin: 2vh 10vw 0 10vw;
`;

const EventColumns = [
    {
        id: 'EventDate',
        label: 'Event Date',
        align: 'center',
        minWidth: 90
    },
    {
        id: 'Title',
        label: 'Event Title',
        align: 'center',
        minWidth: 120
    },
    {
        id: 'Description',
        label: 'Description',
        align: 'center',
        minWidth: 200
    }]
export default function EventCalendar(props) {
    const [rows, setrows] = React.useState([])
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
        props.setState("EventCalendar")
        props.setUser("admin")
        axios.get(API_BASE_URL + "/majlis/event-calendar")
            .then(({ data }) => {
                data.result.map((row) => {
                    row.EventDate = toStdDate(row.EventDate)
                })
                setrows(data.result)
            }).catch((err) => {
                alert(err)
            })
    }, []);

    const deleteEvent = (eventId) => {
        axios.delete(API_BASE_URL + '/majlis/admin/' + eventId, {
            headers: {
                'Authorization': 'token'
            }
        })
            .then(response => { console.log("deleted", response) })
            .catch(err => console.log("Netwoek Error", err));
    }

    return (
        <EventCalendarCard>
            <EventTable tablename='Event List' columns={EventColumns} rows={rows}
                tablename={"Event Calender"} deleteEvent={deleteEvent} />
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

    return (
        <Paper className={classes.root}>
            <div>
                <div className={classes.heading}>{props.tablename}</div>
            </div>
            <Formik
                initialValues={{ member_id: '', event_date: '', title: '', description: '', amount: '', currency: '' }}
                onSubmit={(values, { setSubmitting }) => {

                    axios.post(API_BASE_URL + '/majlis/familywelfare', {
                        member_id: values.member_id,
                        event_date: values.event_date,
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
                    event_date: Yup.string()
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
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={0}>
                                <Grid item xs={3}>
                                    <input
                                        id="event_date"
                                        placeholder="Enter event Date here"
                                        type="date"
                                        value={values.event_date}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{ padding: ".4em" }}
                                        className={
                                            errors.event_date && touched.event_date ? 'inputs text-input error' : 'inputs text-input'}
                                    />
                                    {errors.event_date && touched.event_date ? (
                                        <div className="input-feedback" style={{ marginLeft: "200px" }}>{errors.event_date}</div>
                                    ) : <div className="input-feedback">&nbsp;</div>}
                                </Grid>
                                <Grid item xs={3}>
                                    <input
                                        id="title"
                                        placeholder="Enter Event Title"
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
                                </Grid>
                                <Grid item xs={4}>
                                    <textarea
                                        id="description"
                                        type="textArea"
                                        rows="3"
                                        placeholder="Type description Here"
                                        value={values.content}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.content && touched.content ? 'text-input error' : 'text-input'
                                        }
                                        style={{ width: "80%" }}
                                    />
                                    {errors.content && touched.content ? (
                                        <div className="input-feedback">{errors.content}</div>)
                                        : <div className="input-feedback">&nbsp;</div>}
                                </Grid>
                                <Grid itrm xs={1}>
                                    <button type="submit" className="buttons" disabled={isSubmitting}>
                                        Submit
                      </button>
                                </Grid>
                            </Grid></form>)
                }}</Formik>

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

                                    <TableCell >
                                        <Button variant="contained" color="secondary" onClick={() => props.deleteEvent(row.title)} >
                                            Delete
                                        </Button>
                                    </TableCell>

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