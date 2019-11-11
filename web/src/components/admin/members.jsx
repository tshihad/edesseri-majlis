import React, { useEffect } from 'react';
import styled from 'styled-components';
import Table from '../sub_components/admin_table'

const Members = styled.div`
margin: 3vh 10vw 0 10vw;
`;

export default function MembersList(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("Members")
    })
    return (
        <Members>
            <Table heading="Members"/>
        </Members>
    )
}