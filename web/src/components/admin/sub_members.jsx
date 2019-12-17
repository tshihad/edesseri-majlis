import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdminTable from '../sub_components/admin_table'
import axios from 'axios';
import { API_BASE_URL } from '../constants';

const Members = styled.div`
margin: 0vh 1vw;
`;
export default function MembersList(props) {
    const [memberLIst, setmemberLIst] = React.useState();
    const [searchkey, setsearchkey] = React.useState('');

    useEffect(() => {
        axios.get(API_BASE_URL + '/majlis/admin/member/' + searchkey, {
            headers: {
                "Authorization": localStorage.getItem('EdasseryMajlisToken')
            }
        })
            .then(response => {
                setmemberLIst(response.data.result)
            })
            .catch(err => alert(err))
    }, [props])
    const onSearchchange = (value) => {
        setsearchkey(value)
    }
    return (
        <Members>
            <AdminTable members={memberLIst} subscription={true} onSearchChange={onSearchchange} />
        </Members>
    )
}