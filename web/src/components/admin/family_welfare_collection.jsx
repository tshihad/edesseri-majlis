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
import { FormText } from 'reactstrap';


const EventCalendarCard = styled.div`
`;

const EventColumns = [
    {
        id: 'Code',
        label: 'welfare Code',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'Description',
        label: 'Description',
        align: 'center',
        minWidth: 200
    },
    {
        id: 'CampaignCode',
        label: 'Campaign Code',
        align: 'center',
        minWidth: 70
    },
    {
        id: 'MemberID',
        label: 'Member Id',
        align: 'center',
        minWidth: 70
    },
    {
        id: 'Amount',
        label: 'Amount',
        align: 'center',
        minWidth: 70
    },
]
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

        axios.get(API_BASE_URL + "/majlis/admin/welfare/collection",
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
            <EventTable tablename='Welfare Collections' columns={EventColumns} rows={rows}
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
                initialValues={{ campaign_code: '', member_id: '', amount: '' }}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    axios.post(API_BASE_URL + '/majlis/admin/welfare/collection', {
                        campaign_code: values.campaign_code,
                        member_id: values.member_id,
                        amount: values.amount,
                    },
                        {
                            headers: {
                                'Authorization': localStorage.getItem('EdasseryMajlisToken')
                            }
                        })
                        .then((response) => {
                            if (response.status === 200) {
                                alert("welfare Collection Added");
                                props.setreload(Math.random())
                                FormReset()
                            }else{
                                alert("Invalid Data")
                            }
                        })
                        .catch(function (error) {
                            console.log(error);;
                        });
                    setSubmitting(false);

                }}
                validationSchema={Yup.object().shape({
                    campaign_code: Yup.string()
                        .required('Required'),
                    member_id: Yup.string()
                        .required('Required'),
                    amount: Yup.string()
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
                                                placeholder="Enter Campaign Code"
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
                                            <label htmlFor="member_id">
                                                Member Id
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="member_id"
                                                placeholder="Enter Member ID"
                                                type="text"
                                                value={values.member_id}
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
                                            <label htmlFor="amount">
                                                Amount
                                            </label>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <input
                                                id="amount"
                                                placeholder="Enter Amount"
                                                type="number"
                                                value={values.amount}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.amount && touched.amount ? 'inputs text-input error' : 'inputs text-input'}
                                            />
                                            {errors.amount && touched.amount ? (
                                                <div className="input-feedback">{errors.amount}</div>
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
                                        Add
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