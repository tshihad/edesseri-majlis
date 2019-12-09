import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components';
import axios from 'axios';

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
const Button = styled.button`
  background-color: #282c34;
  border:0;
  outline:0;
  color:white;
  margin:.7vw 2vw 0 0;
  float:right;
  font-size:1.3vw;
  width :15vw;
  height:3.1vw;
  border-radius:4px;
  &:hover {
   background-color: black;
 }
`;

const KeyAndValue = styled.div`
float:right;
margin:1.2vw 35px 0 0;
font-size:1.45vw;
font-family:'Arial';
background-color: #4a505ae7;
border-radius:4px;
color:white;
padding:.5vw 1vw;
`;


export default function CommonTable(props) {
    useEffect(() => {
        console.log(props.members)
    }, [props])
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
    const Idcolumns = ['MemberID', 'Name', 'ph_number_1', 'Email'];
    const columns = ['MemberID', 'Name', 'Phone Number', 'Email']
    return (
        <Paper className={classes.root}>
            <div>
                <div className={classes.heading}>{props.tablename}</div>
            </div>
            <div className={classes.tableWrapper}>
                <Table stickyHeader>
                    <TableHead style={{ zIndex: "-1" }}>
                        <TableRow >
                            {columns.map(column => (
                                <TableCell className={classes.cell}
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontSize: "1.1em", color: '#f1f1f1', backgroundColor: "rgb(85, 107, 47)" }}
                                >
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(props.members || []).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.member_id}>
                                    {Idcolumns.map(column => {
                                        const value = row[column];
                                        return (
                                            <TableCell title="Go to user Details">
                                                {column === 'MemberID' ? <a href={'user/profile?MemberID=' + value}>{value}</a> : value}
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
                    count={props.members ? props.members.length : 1}
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

function LinkButton(props) {
    return (
        <Link to={props.link}>
            <Button>{props.title}</Button>
        </Link>
    )
}

function Field(props) {
    return (
        <KeyAndValue>{props.name} : {props.value}</KeyAndValue>
    )
}