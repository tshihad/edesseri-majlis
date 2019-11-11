import React, { useEffect } from 'react';
import styled from 'styled-components';
import Subscription from './subscriptions';
import Loans from './loans';
import FamilyWelfare from './family_welfare'
import axios from 'axios';
const UserOptionCard = styled.div`
margin: 0 10vw;
`;
export default function UserOptions(props) {
    useEffect(() => {
        axios.get('http://10.4.5.22:8080/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
            repsonse => {
                if (repsonse.status != 200) {
                    window.location = "/MemberLogin"
                }
            }
        ).catch(error => {
            alert(error)
        })
        props.setLanButton(false)
        props.setUser("user")
        props.setState("UserOptions")
    }, [])
    return (
        <UserOptionCard>
            {props.component == "subscription" && <Subscription />}
            {props.component == "loans" && <Loans />}
            {props.component == "familywelfare" && <FamilyWelfare />}
        </UserOptionCard>

    )
}

