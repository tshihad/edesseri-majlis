import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Grid } from '@material-ui/core'


const SubscriptionCard = styled.div`
margin: 5vh 10vw 0 10vw`;
const Headline = styled.h3`
color:#1d4219;
font-size: 3vh;
font-family: 'Comfortaa', cursive;
`;
const Matrix = styled.div`
margin: 3vw 5vw;
border : solid 1px #556b2f;
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

const Rows = ["2019", "2018", "2017", "2016", "2015"]

const Columns = [
  ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"],
  ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"],
  ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"],
  ["25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25", "25"],
  ["25", "25", "25", "-", "-", "-", "-", "-", "-", "-", "-", "-"]]

const MatrixHead = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function Subscription(props) {
  const [rows, setrows] = React.useState(Rows)
  const [columns, setcolumns] = React.useState(Columns)
  return (
    <SubscriptionCard>
      <Headline>Your Subscriptions</Headline>
      <Matrix>
        <Grid container spacing={0}>
          <Grid item xs={2} style={{border : "solid 1px #556b2f"}}></Grid>
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
      </Matrix>
    </SubscriptionCard>
  )
}