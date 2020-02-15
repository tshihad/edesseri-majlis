import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import Table from '../sub_components/responsive_table'



const SubscriptionCard = styled.div`
margin-top: 5vh;
padding-bottom:5vh;
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
@media (max-width:700px){
  font-size: 1.5em;
  padding-left: 5vw; 
}
`;
const Matrix = styled.div`
padding: 2vh 5vw;
color: #556b2f`;
const Head = styled.div`
border : solid 1px #556b2f;
font-weight:bolder;
text-align:center;
padding: 1em;
@media(max-width: 700px){
  border :0;
}
`;
const Row = styled.div`
text-align:center;
font-weight:bolder;
padding: 1em;
border : solid 1px #556b2f;
`;
const Column = styled.div`
text-align:center;
hieght: 30px;
color: #013801;
padding: 1em;
border : solid 1px #556b2f;`;

const Footer = styled.footer`
padding: 2px;
font-weight:600;
float:right`;
const Rows = ["-", "-"]

const Button = styled.button`
border:0;
outline: 0;
margin:1em;
width:90%
background-color: #556b2f;
color: white;
padding: .4em 1em;
font-size: 1.1em;
border: 1px solid #556b2f;
border-radius: .15em;
&:hover{
    font-weight: 600;
    background-color: transparent;
    color: #556b2f;
}
@media (max-width:700px){
    margin: 1vh ;
}
`;
const Columns = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]
const SampleSmallRows = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]

const MatrixHead = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const SmallMatrixHead = ["Year", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function Subscription(props) {
  const [rows, setrows] = React.useState([Rows])
  const [columns, setColumns] = React.useState(Columns)
  const [smallRows, setSmallRows] = React.useState(SampleSmallRows)
  const [canLoad, setLoading] = React.useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (localStorage.getItem('VerifiedUser')) {
      setLoading(true)
    } else {
      axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
        repsonse => {
          if (repsonse.status != 200) {
            window.location = "/MemberLogin"
          }
        }
      ).catch(error => {
        window.location = "/MemberLogin"
        alert("Authentication Failed")
      })
    }
    setLoading(true)
    axios.get(API_BASE_URL + '/majlis/member/subscription',
      { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
      .then((response) => {
        var years = []
        var subscriptions = []
        var smallRows = []
        response.data.result.map((row) => {
          var smallRow = []
          smallRow.push(row.Year)
          years.push(row.Year)
          var subscription = []
          row.Rows.map((month) => {
            if (month.Amount === "") {
              subscription.push("-")
              smallRow.push("-")

            } else {
              subscription.push(month.Amount)
              smallRow.push(month.Amount)

            }
          })
          subscriptions.push(subscription)
          smallRows.push(smallRow)
        })
        setSmallRows(smallRows)
        setColumns(subscriptions)
        setrows(years)
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      {canLoad === true ?
        <div>
          <MediaQuery minDeviceWidth={701}>
            <SubscriptionCard>
              <Headline>Your Subscriptions</Headline>
              <Matrix>
                <Grid container spacing={0}>
                  <Grid item xs={2} style={{ border: "solid 1px #556b2f" }}></Grid>
                  <Grid container xs={10}>
                    {MatrixHead.map((head) => (
                      <Grid item xs={1}>
                        <Head >{head}</Head>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                {rows.map((row, i) => (
                  <Grid container spacing={0} key={i}>
                    <Grid item xs={2}>
                      <Row>{row}</Row>
                    </Grid>
                    <Grid container xs={10}>
                      {columns[i].map((column, j) => (
                        <Grid xs={1} key={j}>
                          <Column>{column}</Column>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                ))}
                <Footer>Amount In Dirhams*</Footer>
              </Matrix>
            </SubscriptionCard>
          </MediaQuery>

          <MediaQuery maxDeviceWidth={700}>
            <SubscriptionCard>
              <Headline>Your Subscriptions</Headline>
              <Matrix>
                <Table rows={smallRows} head={SmallMatrixHead} />
                <Footer>Amount In Dirhams*</Footer>
              </Matrix>
              <Grid container spacing={0}>&nbsp;</Grid>
              <Grid container spacing={0}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5}><Link to="/User/UserOptions/Loans"><Button>Loans</Button></Link></Grid>
                <Grid item xs={6}><Link to="/User/UserOptions/FamilyWelfare"><Button>Family Welfare</Button></Link></Grid>
              </Grid>
            </SubscriptionCard>
          </MediaQuery>
        </div>
        : <Loading />}
    </div>
  )
}