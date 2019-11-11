import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


function Profile(props) {
    // alert("LOADED");
    useEffect(() => {
        // alert(localStorage.getItem('EdasseryMajlisToken'))
        axios.get('http://10.4.5.22:8080/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
            repsonse => {
                // alert(repsonse.status)
                if (repsonse.status != 200) {
                    props.history.push("/MemberLogin")
                } else {
                    // alert("success")
                }
            }
        ).catch(error => {
            alert(error)
        })
        props.setLanButton(false)
        props.setUser("user")
        props.setState("Profile")
    }, [])
    return (
        <div>Profile</div>
    )
}

export default withRouter(Profile)