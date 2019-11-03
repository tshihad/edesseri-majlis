import React, { useEffect } from 'react';
import styled from 'styled-components';

const Members = styled.div`
width: 100%;
display: inline-block;
`;

const Heading = styled.h2`
color:#088d35;
padding-left: 2.5%;
`;

export default function MembersList(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("Members")
    })
    return (
        <Members>
            <Heading>Members List</Heading>
        </Members>
    )
}