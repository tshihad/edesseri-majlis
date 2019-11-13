import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from '../sub_components/admin_table'
import axios from 'axios';

const Members = styled.div`
margin: 3vh 10vw 0 10vw;
`;
export default function MembersList(props) {
    let member;
    const [members, setMembers] = React.useState(null);

    useEffect(() => {
        props.setUser("admin")
        props.setState("Members")
        axios.get('http://10.4.5.22:8080/majlis/admin/member', {
            headers: {
                "Authorization": "70aa88a57baaf60b8e5a73a400446816"
            }
        })
            .then(response => {
                member = response.data.result;
                setMembers(member)
            })
            .catch(err => console.log("err", err))
    }, [props])
    return (
        <Members>
            <Table heading="Members" members={members} />
        </Members>
    )
}