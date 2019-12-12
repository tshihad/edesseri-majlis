import React, { useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading';
import styledc from 'styled-components'
import { styled } from '@material-ui/styles';

export default function Loans(props) {
  const [canLoad, setLoading] = React.useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
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
    setLoading(true)

    props.setState("Loans")
    props.setUser("admin")
  }, [ ])
  const Loans = styledc.div`
  margin: 5vh 10vw 0 10vw; 
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #556b2f;
  `;
  return (
    <div>
      {canLoad === true ?
        <div>
          <Loading />
          <Loans>This Feature is under construction....</Loans>
        </div>
        : <Loading />}</div>
  )
}