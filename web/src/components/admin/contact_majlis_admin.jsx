import React, { useEffect } from 'react'
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading'


export default function ContactMajlisAdmin(props) {
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {

            axios.get(API_BASE_URL + '/majlis/auth/admin', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
                repsonse => {
                    if (repsonse.status != 200) {
                        window.location = "/Admin/Login"
                    }
                }
            ).catch(error => {
                window.location = "/Admin/Login"
                alert("Authentication Failed")
            })
        
        props.setUser("admin")
        props.setState("ContactMajlisAdmin")
    }, [props])
    return (
        <div>
      {canLoad === true ?
        <div>ContactMajlisAdmin</div>
        : <Loading />}</div>
        )
}