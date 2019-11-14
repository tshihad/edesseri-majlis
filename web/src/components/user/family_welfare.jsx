import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from '../sub_components/simple_table';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'



const FamilyWelfareCard = styled.div`
margin-top: 2vh`;

const EventColumns = [
    {
        id: 'WelfareDate',
        label: 'Date',
        align: 'center',
        minWidth: 90
    },
    {
        id: 'Title',
        label: 'Title',
        align: 'center',
        minWidth: 120
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
    const toStdDate = (date) => {
        var year = date.slice(0, 4)
        var month = date.slice(5, 7)
        var day = date.slice(8, 10)
        return day + "-" + month + "-" + year
    }
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
        if (localStorage.getItem('VerifiedUser')) {
            setLoading(true)
        } else {
            axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
                repsonse => {
                    if (repsonse.status != 200) {
                        window.location = "/MemberLogin"
                    }
                }
            ).catch(error => {
                window.location = "/MemberLogin"
                alert("Authentication Failed")
            })
        }
        setLoading(true)
        axios.get(API_BASE_URL+"/majlis/member/family-welfare",
            { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
            .then(({ data }) => {
                data.result.map((row) => {
                    row.WelfareDate = toStdDate(row.WelfareDate)
                })
                setrows(data.result)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            {canLoad === true ?
                <FamilyWelfareCard>
                    <Table tablename='Family Welfare' columns={EventColumns} rows={rows} />
                </FamilyWelfareCard>
                : <Loading />}
        </div>
    )
}