import React, { useEffect } from 'react'
import {Redirect} from 'react-router-dom'

export default function Profile(props) {
    useEffect(() => {
        props.setLanButton(false)
        props.setUser("user")
        props.setState("Profile")
    }, [props])
    return (
        <div>
        {props.isLogged === true ?
        <div>Profile</div>
        :<Redirect to='/MemberLogin'/>}</div>

    )
}