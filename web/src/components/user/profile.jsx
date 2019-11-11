import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'


function Profile(props) {
    // alert("LOADED");
    useEffect(() => {
        axios.get('http://localhost:8080/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
      repsonse => {
        if (repsonse.status != 200) {
          window.location = "/MemberLogin"
        }
      }
    ).catch(error => {
      window.location = "/MemberLogin"
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