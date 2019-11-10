import React, { useEffect } from 'react';
import styled from 'styled-components';
import Subscription from './subscriptions';
import Loans from './loans'

const UserOptionCard = styled.div`
margin: 5vh 10vw 0 10vw;
`;
export default function UserOptions(props) {
    useEffect(() => {
        props.setUser("user")
        props.setState("UserOptions")
    }, [props])
    return (
        <UserOptionCard>
            {props.component == "subscription" && <Subscription />}
            {props.component == "loans" && <Loans />}
            {props.component == "familywelfare" && <Loans />}
        </UserOptionCard>
    )
}