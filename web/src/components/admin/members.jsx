import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from '../sub_components/admin_table';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading'

const Members = styled.div`
margin: 3vh 10vw 0 10vw;
`;

export default function MembersList(props) {
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {

        axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
            repsonse => {
                if (repsonse.status != 200) {
                    window.location = "/Admin/Login"
                }
            }
        ).catch(error => {
            window.location = "/Admin/Login"
            alert("Authentication Failed")
        })

        props.setUser("admin")
        props.setState("Members")
    })
    return (
        <div>
            {canLoad === true ?
                <Members>
                    <Table heading="Members" />
                </Members>
                : <Loading />}</div>
    )
}