import React, { useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import axios from 'axios';
import Loading from '../sub_components/loading';
import styledc from 'styled-components'
import { styled } from '@material-ui/styles';
import Table from '../sub_components/simple_table' 

const LoanColumns = [
  {
      id: 'id',
      label: 'Loan Id',
      align: 'center',
      minWidth: 30
  },
  {
      id: 'member_id',
      label: 'Member Id',
      align: 'center',
      minWidth: 50
  },
  {
      id: 'purpose',
      label: 'Purpose',
      align: 'center',
      minWidth: 50
  },
  {
      id: 'request_amount',
      label: 'Request Amount',
      align: 'center',
      minWidth: 50
  },
  {
    id: 'installment',
    label: 'Installment',
    align: 'center',
    minWidth: 50
},
{
  id: 'reason',
  label: 'Reason',
  align: 'center',
  minWidth: 50
},
{
  id: 'request_date',
  label: 'Request Date',
  align: 'center',
  minWidth: 80
},
{
  id: 'office_date',
  label: 'Office Date',
  align: 'center',
  minWidth: 50
},
{
  id: 'status',
  label: 'Status',
  align: 'center',
  minWidth: 50
},
{
  id: 'notes',
  label: 'Notes',
  align: 'center',
  minWidth: 50
},
]
export default function Loans(props) {
  const [canLoad, setLoading] = React.useState(false)
  const [loandetails,setLoanDetails] = React.useState([])
  const toStdDate = (date) => {
    var year = date.slice(0, 4)
    var month = date.slice(5, 7)
    var day = date.slice(8, 10)
    return day + "-" + month + "-" + year
}
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
    axios.get(API_BASE_URL + '/majlis/admin/loan', {
      headers: {
          "Authorization": localStorage.getItem('EdasseryMajlisToken')
      }
  })
      .then(response => {
        response.data.result.map((row,key)=>{
          response.data.result[key].office_date = toStdDate(response.data.result[key].office_date)
          response.data.result[key].request_date = toStdDate(response.data.result[key].request_date)
        })
        setLoanDetails(response.data.result)
      })
      .catch(err => {})
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