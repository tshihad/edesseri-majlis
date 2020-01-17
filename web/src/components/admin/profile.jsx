import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import member from '../../images/member.jpg';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading';
import EditMember from './edit_member';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";


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
font-size: 1.3em;
border: 1px solid #556b2f;
border-radius: .15em;
&:hover{
    font-weight: 600;
    background-color: transparent;
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
    const memberID = window.location.pathname.split("/")[4]
    const classes = useStyles()
    const [canLoad, setLoading] = React.useState(false)
    const [userFields, setUserField] = React.useState({})
    useEffect(() => {
        window.scrollTo(0, 0)
        props.setUser("admin")
        props.setState("Members")
        if (localStorage.getItem('VerifiedUser')) {
            setLoading(true)
        } else {
            axios.get(API_BASE_URL + '/majlis/auth/admin', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
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
        setLoading(true)

    }, [])


    const tab = {
        fontSize: "1.3em",
        color: "#1d4219",
        padding: ".5em 1.5em",
        fontWeight: 600,
    }
    return (
        <div>
            {canLoad === true ?
                <ProfileCard>
                    <Paper style={{ padding: "1em 5em" }}>
                        <Grid container spacing={0}>
                            <Grid item xs={4}> <Headline>Member Profile</Headline></Grid>
                            <Grid item xs={8}></Grid>
                            {/* <Grid item xs={2} justify={"center"}><Button onClick={() => editAction()}>Edit</Button></Grid> */}
                        </Grid>
                        <Tabs>
                            <TabList>
                                <Tab style={tab}>View</Tab>
                                <Tab style={tab}>Edit</Tab>
                            </TabList>

                            <TabPanel>
                                <Grid container spacing={0}>
                                    <Grid item xs={3}>
                                        <Grid container spacing={0}>
                                            <img className={classes.image} src={userFields.image_location}></img>
                                        </Grid>
                                        <Grid container spacing={0}>
                                            <Grid item xs={3}>
                                                <Key>Status</Key>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Key>:</Key>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <Value >{userFields.member_status}</Value>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Paper style={{ margin: ".5em", padding: ".5em 2em" }}>

                                            <Grid container spacing={0}>
                                                <SubHead>
                                                    Personal Details
                                                </SubHead>
                                            </Grid>
                                            <KeyValuePair head="Name" value={userFields.name} />
                                            <KeyValuePair head="House Name" value={userFields.housename} />
                                            <KeyValuePair head="Father's Name" value={userFields.fathername} />
                                            <KeyValuePair head="Phone Number 1" value={userFields.phone_number_1} />
                                            <KeyValuePair head="Phone Number 2" value={userFields.phone_number_2} />
                                            <KeyValuePair head="Office Phone Number" value={userFields.office_phone_number} />
                                            <KeyValuePair head="Home Phone Number (UAE)" value={userFields.home_phone_number} />
                                            <KeyValuePair head="Email" value={userFields.email} />
                                            <KeyValuePair head="Blood Group" value={userFields.bloodgroup} />
                                            <KeyValuePair head="Date of Joining" value={userFields.date_of_join} />
                                        </Paper>
                                        <Paper style={{ margin: ".5em", padding: ".5em 2em" }}>
                                            <Grid container spacing={0}>
                                                <SubHead>
                                                    Personal Identification
                                </SubHead>
                                            </Grid>
                                            <KeyValuePair head="Passport Number" value={userFields.passport} />
                                            <KeyValuePair head="Date Of Birth" value={userFields.dob} />
                                        </Paper><Paper style={{ margin: ".5em", padding: ".5em 2em" }}>
                                            <Grid container spacing={0}>
                                                <SubHead>
                                                    Company Information
                            </SubHead>
                                            </Grid>
                                            <KeyValuePair head="Job" value={userFields.job} />
                                            <KeyValuePair head="Company Name" value={userFields.company_name} />
                                            <KeyValuePair head="Post Code" value={userFields.postcode} />
                                            <KeyValuePair head="Area" value={userFields.company_area} />
                                            <KeyValuePair head="State" value={userFields.company_emirates} />
                                            <KeyValuePair head="Institution" value={userFields.institution} />
                                        </Paper>
                                        <Paper style={{ margin: ".5em", padding: ".5em 2em" }}>
                                            <Grid container spacing={0}>
                                                <SubHead>
                                                    Educational Details
                                </SubHead>
                                            </Grid>
                                            <KeyValuePair head="Educational Qualification" value={userFields.education} />
                                            <KeyValuePair head="Job/Tech Qualification Name" value={userFields.jobqualification} />
                                        </Paper>
                                        <Paper style={{ margin: ".5em", padding: ".5em 2em" }}>
                                            <Grid container spacing={0}>
                                                <SubHead>
                                                    Resedential Details
                            </SubHead>
                                            </Grid>
                                            <KeyValuePair head="Residential Address" value={userFields.residential} />
                                            <KeyValuePair head="Marital Status" value={userFields.marriage_status} />
                                            <KeyValuePair head="Family Living With You" value={userFields.family_status} />
                                            <KeyValuePair head="Number Of Childern (Boy)" value={userFields.no_of_boys} />
                                            <KeyValuePair head="Number Of Childern (Girl)" value={userFields.no_of_girls} />
                                            <KeyValuePair head="Closest Relative In UAE" value={userFields.closest_relative} />
                                            <KeyValuePair head="Relationship" value={userFields.uae_relationship} />
                                            <KeyValuePair head="Contact Number" value={userFields.relative_phone} />
                                        </Paper>
                                        <Paper style={{ margin: ".5em", padding: ".5em 2em" }}>
                                            <Grid container spacing={0}>
                                                <SubHead>
                                                    Resedential Details (Home)
                            </SubHead>
                                            </Grid>
                                            <KeyValuePair head="Address" value={userFields.address} />
                                            <KeyValuePair head="Person To Contact" value={userFields.person_to_contact} />
                                            <KeyValuePair head="Relationship" value={userFields.person_to_contact_relationship} />
                                            <KeyValuePair head="Phone Numder" value={userFields.phone_home} />
                                            <KeyValuePair head="Mahal Number" value={userFields.mahal_phone} />
                                        </Paper>
                                    </Grid>
                                </Grid>

                            </TabPanel>
                            <TabPanel>
                                <EditMember userFields={userFields} />
                            </TabPanel>
                        </Tabs>

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

export function KeyValuePair(props) {
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <Key>{props.head}</Key>
            </Grid>
            <Grid item xs={1}>
                <Key>:</Key>
            </Grid>
            <Grid item xs={8}>
                <Value >{props.value}</Value>
            </Grid>
        </Grid>
    )
}
export default withRouter(Profile)