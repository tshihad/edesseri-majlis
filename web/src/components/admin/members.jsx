import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdminTable from '../sub_components/admin_table'
import axios from 'axios';
import { API_BASE_URL } from '../constants';

const Members = styled.div`
margin: 3vh 10vw 0 10vw;
`;
export default function MembersList(props) {
    let member;
    const [memberLIst, setmemberLIst] = React.useState();

    useEffect(() => {
        props.setUser("admin")
        props.setState("Members")
        axios.get(API_BASE_URL + '/majlis/admin/member', {
            headers: {
                "Authorization": localStorage.getItem('EdasseryMajlisToken')
            }
        })
            .then(response => {
                member = response.data.result;
                setmemberLIst(response.data.result)
            })
            .catch(err => alert(err))
    }, [props])
    return (
        <Members>
            <AdminTable tablename='Member List' members={memberLIst} />
        </Members>
    )
}