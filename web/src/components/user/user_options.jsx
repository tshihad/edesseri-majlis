import React, { useEffect } from 'react';
import styled from 'styled-components';
import Subscription from './subscriptions';
import Loans from './loans';
import FamilyWelfare from './family_welfare'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'

const UserOptionCard = styled.div`
margin: 0 10vw;
`;
export default function UserOptions(props) {
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
        if (localStorage.getItem('VerifiedUser')) {
            setLoading(true)
        } else {
            axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
                repsonse => {
                    if (repsonse.status !== 200) {
                        window.location = "/MemberLogin"
                    }
                }
            ).catch(error => {
                window.location = "/MemberLogin"
                alert("Authentication Failed")
            })
        }
        props.setLanButton(false)
        props.setUser("user")
        props.setState("UserOptions")
    }, [props])
    return (
        <div>
            {canLoad === true ?
                <UserOptionCard>
                    {props.component === "subscription" && <Subscription />}
                    {props.component === "loans" && <Loans />}
                    {props.component === "familywelfare" && <FamilyWelfare />}
                </UserOptionCard>
                : <Loading />}
        </div>
    )
}


