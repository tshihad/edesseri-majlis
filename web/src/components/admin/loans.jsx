import React, { useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading';
import styledc from 'styled-components'
import { styled } from '@material-ui/styles';
import Table from '../sub_components/simple_table' 

const LoanColumns = [
  {
      id: 'loan_id',
      label: 'First Name',
      align: 'center',
      minWidth: 50
  },
  {
      id: 'last_name',
      label: 'Last Name',
      align: 'center',
      minWidth: 50
  },
  {
      id: 'email',
      label: 'email',
      align: 'center',
      minWidth: 50
  },
  {
      id: 'phone',
      label: 'Phone Number',
      align: 'center',
      minWidth: 50
  },
]
export default function Loans(props) {
  const [canLoad, setLoading] = React.useState(false)
  const [loandetails,setLoanDetails] = React.useState([])

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
    axios.get(API_BASE_URL + '/admin/loan', {
      headers: {
          "Authorization": localStorage.getItem('EdasseryMajlisToken')
      }
  })
      .then(response => {
        setLoanDetails(response.data.result)
      })
      .catch(err => alert(err))
    props.setState("Loans")
    props.setUser("admin")
  }, [ ])
  const Loans = styledc.div`
  margin: 5vh 10vw 0 10vw; 
  `;
  return (
    <div>
      {canLoad === true ?
        <div>
          <Loans><Table tablename='Loan Details' columns={LoanColumns} rows={loandetails}></Table></Loans>
        </div>
        : <Loading />}</div>
  )
}