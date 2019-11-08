import React, { useEffect } from 'react'
import Subscription from './subscriptions';
import Loans from './loans'

export default function UserOptions(props) {
    useEffect(() => {
        props.setUser("user")
        props.setState("UserOptions")
    }, [props])
    return (
        <div>
            {props.component == "subscription" && <Subscription />}
            {props.component == "loans" && <Loans />}
        </div>
    )
}