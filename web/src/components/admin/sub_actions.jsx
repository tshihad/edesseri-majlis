import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdminTable from '../sub_components/admin_table'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Table from '../sub_components/simple_table' 

const SubscriptionColumns = [
    {
        id: 'CreatedBy',
        label: 'Created By',
        align: 'center',
        minWidth: 80
    },
    {
        id: 'ID',
        label: 'Loan Id',
        align: 'center',
        minWidth: 30
    },
    {
        id: 'MemberID',
        label: 'Member Id',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'SubMonth',
        label: 'Month',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'SubYear',
        label: 'Year',
        align: 'center',
        minWidth: 30
    },
    {
        id: 'SubAmount',
        label: 'Amount',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'SubStatus',
        label: 'Status',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'PaymentEvent',
        label: 'Payment Event',
        align: 'center',
        minWidth: 50
    },
    {
        id: 'PaymentDate',
        label: 'Payment Time',
        align: 'center',
        minWidth: 80
    },]

const Members = styled.div`
margin: 0vh 1vw;
`;
export default function MembersList(props) {
    const [Subscriptiondetails, setDetails] = React.useState([]);
    const [searchkey, setsearchkey] = React.useState('');

    useEffect(() => {
        axios.get(API_BASE_URL + '/majlis/admin/subscription', {
            headers: {
                "Authorization": localStorage.getItem('EdasseryMajlisToken')
            }
        })
            .then(response => {
                setDetails(response.data.result)
            })
            .catch(err => alert(err))
    }, [])

    const onSearchChange = (key) => {
        setsearchkey(key)
        let URL
        if (key === '') {
            URL = '/majlis/admin/member'
        } else {
            URL = '/majlis/admin/member/search/'
        }
        axios.get(API_BASE_URL + URL + key, {
            headers: {
                "Authorization": localStorage.getItem('EdasseryMajlisToken')
            }
        })
            .then(response => {
                setDetails(response.data.result)
            })
            .catch(err => alert(err))
    }
    return (
        <Members>
            <Table tablename='Subscription Actions' columns={SubscriptionColumns} rows={Subscriptiondetails} onSearchChange={onSearchChange}></Table>
        </Members>
    )
}