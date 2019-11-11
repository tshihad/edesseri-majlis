import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import axios from 'axios'


const SubscriptionCard = styled.div`
margin-top: 5vh;
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
`;
const Matrix = styled.div`
padding: 2vh 5vw;
color: #556b2f`;
const Head = styled.div`
border : solid 1px #556b2f;
font-weight:bolder;
text-align:center;
padding: 1em;
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

const Columns = [
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]

const MatrixHead = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function Subscription(props) {
  const [rows, setrows] = React.useState([Rows])
  const [columns, setcolumns] = React.useState(Columns)
  useEffect(() => {
    axios.get('http://10.4.5.22:8080/majlis/member/subscription',
      { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } })
      .then((response) => {
        var years = []
        var subscriptions = []
        response.data.result.map((row) => {
          years.push(row.Year)
          var subscription = []
          row.Rows.map((month) => {
            if (month.Amount === "") {
              subscription.push("-")
            } else {
              subscription.push(month.Amount)
            }
          })
          subscriptions.push(subscription)
        })
        setrows(years)
        setcolumns(subscriptions)
      }).catch((err) => {
        alert(err)
      })
  }, [])
  return (
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
  )
}