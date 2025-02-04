import React, { useEffect } from 'react';
import styled from 'styled-components';
import Subscription from './subscriptions';
import Loans from './loans';
import FamilyWelfare from './family_welfare';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading';
import {
    Paper,
    Grid,
    Typography,
    MenuItem,
    TextField,
    makeStyles,
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core';
import MediaQuery from 'react-responsive'

const UserOptionCard = styled.div`
margin: 0 10vw;
@media (max-width:700px){
    margin: 0;
}

`;
export default function UserOptions(props) {
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
        window.scrollTo(0, 0)
        if (localStorage.getItem('VerifiedUser')) {
            setLoading(true)
        } else {
            axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
                repsonse => {
                    if (repsonse.status !== 200) {
                        window.location = "/MemberLogin"
                    }
                }
            ).catch(error => {
                window.location = "/MemberLogin"
                alert("Authentication Failed")
            })
        }
        setLoading(true)
        props.setLanButton(false)
        props.setUser("user")
        props.setState("UserOptions")
    }, [props])
    return (
        <div>
            {canLoad === true ?
                <UserOptionCard>
                    {props.component === "default" && <MemberHome />}
                    {props.component === "subscription" && <Subscription />}
                    {props.component === "loans" && <Loans />}
                    {props.component === "familywelfare" && <FamilyWelfare />}
                </UserOptionCard>
                : <Loading />}
        </div>
    )
}

const Card = styled.div`
margin: 2vh 0;
@media (max-width:700px){
    margin: 1vh 0;
}
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 1.5em;
text-align:center;
font-family: 'Comfortaa', cursive;
`;

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

function MemberHome() {
    return (
        <div>
            <MediaQuery minDeviceWidth={701}>
                <Card>
                    <Paper style={{ backgroundColor: "#e5eee5", padding: "1% 5%" }}>
                        <Headline>Edassery Majlis Group welcomes You..</Headline>
                        <Grid container spacing={0}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3}>
                                <img src={localStorage.getItem('UserImageURL')} style={{ width: "200px", height: "230px" }}></img>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid container spacing={0}><Grid item xs={12}></Grid>&nbsp;</Grid>
                                <Grid container spacing={0}><Grid item xs={12}></Grid>&nbsp;</Grid>
                                <Grid container spacing={0}><Grid item xs={12}></Grid>&nbsp;</Grid>
                                <KeyValuePair head="Name" value={localStorage.getItem('Username')} />
                                <KeyValuePair head="Member ID" value={localStorage.getItem('MemberId')} />
                                <KeyValuePair head="Email" value={localStorage.getItem('Email')} />
                                <KeyValuePair head="phone" value={localStorage.getItem('Phone')} />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container spacing={0}><Grid item xs={12}>&nbsp;</Grid></Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={7}>
                                <Grid container spacing={0}>
                                    <Grid item xs={4}><Link to="/User/UserOptions/Subscriptions" ><Button>Subscriptions</Button></Link></Grid>
                                    <Grid item xs={4}><Link to="/User/UserOptions/Loans"><Button>Loans</Button></Link></Grid>
                                    <Grid item xs={4}><Link to="/User/UserOptions/FamilyWelfare"><Button>Family Welfare</Button></Link></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Paper>
                </Card >
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <Card>
                    <Paper style={{ backgroundColor: "#e5eee5", padding: "1% 5%" }}>
                        <Headline>Edassery Majlis Group welcomes You..</Headline>
                        <Grid container spacing={0}>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={6}>
                                <img src={localStorage.getItem('UserImageURL')} style={{ width: "150px", height: "180px" }}></img>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={0}><Grid item xs={12}></Grid>&nbsp;</Grid>
                                <KeyValuePair head="Name" value={localStorage.getItem('Username')} />
                                <KeyValuePair head="Member ID" value={localStorage.getItem('MemberId')} />
                                <KeyValuePair head="Email" value={localStorage.getItem('Email')} />
                                <KeyValuePair head="phone" value={localStorage.getItem('Phone')} />
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container spacing={0}><Grid item xs={12}>&nbsp;</Grid></Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={7}>
                                <Grid container spacing={0}>
                                    <Grid xs={1}></Grid>
                                    <Grid item xs={11}><Link to="/User/UserOptions/Subscriptions" ><Button>Subscriptions</Button></Link></Grid>
                                    <Grid xs={1}></Grid>
                                    <Grid item xs={11}><Link to="/User/UserOptions/Loans"><Button>Loans</Button></Link></Grid>
                                    <Grid xs={1}></Grid>
                                    <Grid item xs={11}><Link to="/User/UserOptions/FamilyWelfare"><Button>Family Welfare</Button></Link></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}></Grid>
                        </Grid>
                    </Paper>
                </Card >
            </MediaQuery>

        </div>

    )
}


const Key = styled.div`
padding: .5em;
padding-left: 2em;
font-weight: 600;
color: #1d4219;
font-size: 1.05em;
`;
const Value = styled.div`
padding: .5em;
font-size: 1em;
font-weight: 600;
`;

export function KeyValuePair(props) {
    return (
        <Grid container spacing={0}>
            <MediaQuery minDeviceWidth={701}>
                <Grid item xs={3}>
                    <Key>{props.head}</Key>
                </Grid>
                <Grid item xs={1}>
                    <Key>:</Key>
                </Grid>
                <Grid item xs={8}>
                    <Value >{props.value}</Value>
                </Grid>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={700}>
                <Grid item xs={3}>
                    <Key>{props.head}</Key>
                </Grid>
                <Grid item xs={2}>
                    <Key>:</Key>
                </Grid>
                <Grid item xs={7}>
                    <Value >{props.value}</Value>
                </Grid>
            </MediaQuery>
        </Grid>
    )
}