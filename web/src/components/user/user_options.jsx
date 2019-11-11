import React, { useEffect } from 'react';
import styled from 'styled-components';
import Subscription from './subscriptions';
import Loans from './loans';
import FamilyWelfare from './family_welfare'
import {Redirect} from 'react-router-dom'

const UserOptionCard = styled.div`
margin: 0 10vw;
`;
export default function UserOptions(props) {
    useEffect(() => {
        props.setLanButton(false)
        props.setUser("user")
        props.setState("UserOptions")
    }, [props])
    return (
        <div>
        {props.isLogged === true ?
        <UserOptionCard>
            {props.component == "subscription" && <Subscription />}
            {props.component == "loans" && <Loans />}
            {props.component == "familywelfare" && <FamilyWelfare />}
        </UserOptionCard>
        :<Redirect to='/MemberLogin'/>}</div>

    )
}