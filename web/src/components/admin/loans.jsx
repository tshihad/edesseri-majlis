import React, { useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading'

export default function Loans(props) {
  const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {

            axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
              repsonse => {
                if (repsonse.status != 200) {
                  window.location = "/Admin/Login"
                }
              }
            ).catch(error => {
              window.location = "/Admin/Login"
              alert("Authentication Failed")
            })
          
    props.setState("Loans")
    props.setUser("admin")
  }, [props])
  return (
    <div>
      {canLoad === true ?
    <div>Loans</div>
    : <Loading />}</div>
  )
}