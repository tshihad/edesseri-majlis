import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import * as Yup from 'yup';
import { API_BASE_URL } from '../constants';

const SubscriptionCard = styled.div`
margin: 5vh 10vw 0 10vw;`;
const Headline = styled.h1`
color:#1d4219;
font-size: 1.7em;
text-align:center;
font-family: 'Comfortaa', cursive;
`;

export default function Subscriptions(props) {

    const [startDate, setStartDate] = React.useState('');
    const [endDate, setEndDate] =React.useState('');
    const [subscriptionData, setSubscriptionData] = React.useState([]);

    useEffect(() => {
        props.setUser("admin")
        props.setState("Subscriptions")
    })
    const handleChange = (event) =>{
        if(event.target.id==='start_date')
            setStartDate(event.target.value);
        else
           setEndDate(event.target.value);
           console.log(startDate,endDate)
    }

    const getSubscriptions = () =>{
        axios.post(API_BASE_URL+'/majlis/admin/subscription',{'start_date':startDate,'end_date':endDate},{
            headers:{
                'Authorization':'3c2546eac5ab0221d40c58c36579f47d'
            }
        })
        .then(response=>{console.log(response);setSubscriptionData(response.data.result)})
        .catch(err =>{console.log("network error", err)})
    }
    return (
        <SubscriptionCard>
            <Headline>Subscription</Headline>
            <Grid container spacing={0} justify="center">
                <Grid item xs={5}>
                    <span>Start Date : </span><input type="date" id="start_date" onChange={handleChange}/>
                </Grid>
                <Grid item xs={5}>
                <span>End Date : </span> <input type="date" id="end_date" onChange={handleChange} />
                </Grid>
                <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={getSubscriptions}>
                    Search
                </Button>
                </Grid>
                
            </Grid>
            <Grid container spacing={0} justify="center">
                {subscriptionData.length>0 &&
                <SubscriptionTable subscriptions={setSubscriptionData}/>}
            </Grid>
        </SubscriptionCard>
    )
}


const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor:"#e5eee5"
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
        zIndex:"0",
        fontSize: "1em",
    },
});


 function SubscriptionTable(props) {
    useEffect(()=>{
        console.log(props)
    },[props])
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
    const Idcolumns = ['member_id','sub_year','sub_month','sub_amount','sub_status',
    'payment_date date','payment_event','created_by']
    const columns = ['MemberID','Subscription Year','Subscription Month','Amount','Status','Paid date','Payment Event', 'Created By']
    return (
        <Paper className={classes.root}>
            <div>
                <div className={classes.heading}>{props.tablename}</div>
            </div>
            <div className={classes.tableWrapper}>
                <Table stickyHeader>
                    <TableHead style={{zIndex:"-1"}}>
                        <TableRow >
                            {columns.map(column => (
                                <TableCell className={classes.cell}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontSize: "1.1em", color: '#f1f1f1',backgroundColor:"rgb(85, 107, 47)" }}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.subscriptions&&(props.subscriptions||[]).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.member_id}>
                                    {Idcolumns.map(column => {
                                        const value = row[column];
                                        return (
                                            <TableCell>
                                                {column==='MemberID'?<a href={'user/profile?MemberID='+value}>{value}</a>:value}
                                            </TableCell>
                                        );
                                    })}
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
                    count={props.members?props.members.length:1}
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
                />
                </div>
        </Paper>

    );
}