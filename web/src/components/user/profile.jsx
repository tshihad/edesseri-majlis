import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import member from '../../images/member.jpg';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'


import {
    Paper,
    Grid,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    image: {
        width: "230px",
        height: "280px"
    },
}))
const Button = styled.button`
border:0;
outline: 0;
margin-top:1em;
background-color: #556b2f;
color: white;
padding: .4em 1em;
font-size: 1.5em;
border: 1px solid #556b2f;
border-radius: .15em;
&:hover{
    font-weight: 600;
    background-color: white;
    color: #556b2f;
}
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 1.8em;
font-family: 'Comfortaa', cursive;
`;
const SubHead = styled.h3`
color:#1d4219;
font-size: 1.5em;
font-family: 'Comfortaa', cursive;
`;
const ProfileCard = styled.div`
margin: 3vh 10vw 0 10vw `;
function Profile(props) {
    const classes = useStyles()
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
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
        props.setLanButton(false)
        props.setUser("user")
        props.setState("Profile")
    }, [props])
    return (
        <div>
            {canLoad === true ?
                <ProfileCard>
                    <Paper style={{ padding: "1em 5em" }}>
                        <Grid container spacing={0}>
                            <Grid item xs={2}> <Headline>My Profile</Headline></Grid>
                            <Grid item xs={8}></Grid>
                            <Grid item xs={2} justify={"center"}><Button>Edit</Button></Grid>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid item xs={3}>
                                <Paper style={{ width: "15vw" }}>
                                    <img className={classes.image} src={member}></img>
                                </Paper>
                            </Grid>
                            <Grid item xs={9}>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Personal Details
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Name" value="Mothishah V C" />
                                    <KeyValuePair head="House Name" value="Mothishah V C" />
                                    <KeyValuePair head="Father's Name" value="Mothishah V C" />
                                    <KeyValuePair head="Phone Number 1" value="Mothishah V C" />
                                    <KeyValuePair head="Phone Numder 2" value="Mothishah V C" />
                                    <KeyValuePair head="Office Phone Number" value="Mothishah V C" />
                                    <KeyValuePair head="Home Phone Numder (UAE)" value="Mothishah V C" />
                                    <KeyValuePair head="Email" value="Mothishah V C" />
                                    <KeyValuePair head="Blood Group" value="Mothishah V C" />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Personal Identification
                                </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Passport Number" value="Mothishah V C" />
                                    <KeyValuePair head="Date Of Birth" value="Mothishah V C" />
                                </Paper><Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Company Information
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Job" value="Mothishah V C" />
                                    <KeyValuePair head="Company Name" value="Mothishah V C" />
                                    <KeyValuePair head="Post Code" value="Mothishah V C" />
                                    <KeyValuePair head="Area" value="Mothishah V C" />
                                    <KeyValuePair head="Emirates" value="Mothishah V C" />
                                    <KeyValuePair head="Institution" value="Mothishah V C" />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Educational Details
                                </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Educational Qualification" value="Mothishah V C" />
                                    <KeyValuePair head="Job/Tech Qualification Name" value="Mothishah V C" />
                                    <KeyValuePair head="Licence (UAE)" value="Mothishah V C" />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Resedential Details
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Residential Address" value="Mothishah V C" />
                                    <KeyValuePair head="Marital Status" value="Mothishah V C" />
                                    <KeyValuePair head="Family Living With You" value="Mothishah V C" />
                                    <KeyValuePair head="Number Of Childern (Boy)" value="Mothishah V C" />
                                    <KeyValuePair head="Number Of Childern (Girl)" value="Mothishah V C" />
                                    <KeyValuePair head="Closest Relative In UAE" value="Mothishah V C" />
                                    <KeyValuePair head="Relationship" value="Mothishah V C" />
                                    <KeyValuePair head="Contact Number" value="Mothishah V C" />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Resedential Details (Home)
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Address" value="Mothishah V C" />
                                    <KeyValuePair head="Person To Contact" value="Mothishah V C" />
                                    <KeyValuePair head="Relationship" value="Mothishah V C" />
                                    <KeyValuePair head="Phone Numder" value="Mothishah V C" />
                                    <KeyValuePair head="Mahal Number" value="Mothishah V C" />
                                </Paper>
                            </Grid>
                        </Grid>

                    </Paper>
                </ProfileCard>
                : <Loading />}
        </div>
    )
}


const Key = styled.div`
padding: .5em;
padding-left: 2em;
font-weight: 600;
`;
const Value = styled.div`
padding: .5em;
font-weight: 500;
`;

function KeyValuePair(props) {
    return (
        <Grid container spacing={0}>
            <Grid item xs={5}>
                <Key>{props.head}</Key>
            </Grid>
            <Grid item xs={1}>
                <Key>:</Key>
            </Grid>
            <Grid item xs={6}>
                <Value >{props.value}</Value>
            </Grid>
        </Grid>
    )
}
export default withRouter(Profile)