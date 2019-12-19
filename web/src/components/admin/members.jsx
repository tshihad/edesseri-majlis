import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdminTable from '../sub_components/admin_table'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { reach } from 'yup';

const Members = styled.div`
margin: 3vh 10vw 0 10vw;
`;
export default function MembersList(props) {
    const [memberLIst, setmemberLIst] = React.useState();
    const [searchkey, setSearchkey] = React.useState('')

    useEffect(() => {
        props.setUser("admin")
        props.setState("Members")
        axios.get(API_BASE_URL + '/majlis/admin/member', {
            headers: {
                "Authorization": localStorage.getItem('EdasseryMajlisToken')
            }
        })
            .then(response => {
                setmemberLIst(response.data.result)
            })
            .catch(err => alert(err))
    }, [])
    const onSearchChange = (key) => {
        setSearchkey(key)
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
                setmemberLIst(response.data.result)
            })
            .catch(err => alert(err))
    }
    return (
        <Members>
            <AdminTable tablename='Member List' members={memberLIst} onSearchChange={onSearchChange} />
        </Members>
    )
}
