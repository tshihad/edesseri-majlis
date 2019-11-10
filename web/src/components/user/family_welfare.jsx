import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from '../sub_components/simple_table';
import axios from 'axios'

const FamilyWelfareCard = styled.div`
margin: 2vh 10vw 0 10vw;
`;

const EventColumns = [
    {
        id: 'Date',
        label: 'Date',
        align: 'center',
        minWidth: 90
    },
    {
        id: 'Description',
        label: 'Description',
        align: 'center',
        minWidth: 120
    },
    {
        id: 'Currency',
        label: 'Currency',
        align: 'center',
        minWidth: 200
    },
    {
        id: 'Amount',
        label: 'Amount',
        align: 'center',
        minWidth: 200
    }]
export default function EventCalendar(props) {
    const [rows, setrows] = React.useState([])
    props.setUser("user")
    const toStdDate = (date)=>{
        var year = date.slice(0,4)
        var month = date.slice(5,7)
        var day = date.slice(8,10)
        return day+"-"+month+"-"+year
      }
    useEffect(() => {
        props.setState("Home")
        axios.get("http://10.4.5.22:8080/majlis/event-calendar")
            .then(({ data }) => {
                data.result.map((row)=>{
                    row.EventDate = toStdDate(row.EventDate)
                })
                setrows(data.result)
            }).catch((err)=>{
                alert(err)
            })
    }, []);

    return (
        <FamilyWelfareCard>
            <Table tablename='Family Welfare' columns={EventColumns} rows={rows} />
        </FamilyWelfareCard>
    )
}