import React, { useEffect } from 'react'
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'




const SubscriptionCard = styled.div`
margin: 5vh 10vw 0 10vw;
padding-bottom:5vh;
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
`;
const Matrix = styled.div`
padding: 2vh 5vw;
color: #556b2f`;
const Info = styled.div`
color:#1d4219;
font-size: 1.2em;
font-weight: 600;
padding-bottom: .3em;
`;
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
    const [columns, setColumns] = React.useState(Columns)
    const [canLoad, setLoading] = React.useState(false)

    const [userField, setUserField] = React.useState({})
    let memberID
    useEffect(() => {
        window.scrollTo(0, 0)
        props.setUser("admin")
        props.setState("Subscriptions")
        memberID = window.location.pathname.split("/")[4]
        if (localStorage.getItem('VerifiedUser')) {
            setLoading(true)
        } else {
            axios.get(API_BASE_URL + '/majlis/auth/admin',
                { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }
            ).then(
                repsonse => {
                    if (repsonse.status != 200) {
                        window.location = "/Admin"
                    }
                }
            ).catch(error => {
                window.location = "/Admin"
                alert("Authentication Failed")
            })
        }
        setLoading(true)
        axios.get(API_BASE_URL + '/majlis/admin/member/' + memberID,
            {
                headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') }
            }).then((response) => {
                setUserField(response.data.result)
            }).catch((error) => {
                console.log(error);
            })
        axios.get(API_BASE_URL + '/majlis/admin/subscription/member/' + memberID,
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
                setColumns(subscriptions)
                setrows(years)
            }).catch((err) => {
                console.log(err)
            })

    }, [])
    return (
        <div>
            {canLoad === true ?
                <SubscriptionCard>
                    <Headline>Subscriptions</Headline>
                    <Matrix>
                        <Grid container justify="center">
                            <Grid item xs={1}></Grid>
                            <Grid item xs={2}><Info>{memberID}</Info></Grid>
                            <Grid item xs={4}><Info>{userField.name}</Info></Grid>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={4}><Info>{userField.email}</Info></Grid>
                        </Grid>
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
                : <Loading />}
        </div>
    )
}