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
function UserProfile(props) {
    const urlParams = new URLSearchParams(window.location.search);
    const memberId = urlParams.get('MemberID');
    const classes = useStyles()
    const [userdata, setUserData] = React.useState([]);
    const [canLoad, setLoading] = React.useState(false)
    useEffect(() => {
        axios.get(API_BASE_URL+'/majlis/admin/member/'+memberId, {headers: {
            "Authorization": "70aa88a57baaf60b8e5a73a400446816"
        }})
        .then(response =>{console.log(response.data.result)
            setUserData(response.data.result)
        })
        .catch(err => console.log(err))
    }, [props])
    return (
        <div>
            {/* {canLoad === true ? */}
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
                                    <KeyValuePair head="Name" value={userdata.name} />
                                    <KeyValuePair head="House Name" value={userdata.house_name} />
                                    <KeyValuePair head="Father's Name" value={userdata.father_name} />
                                    <KeyValuePair head="Phone Number 1" value={userdata.ph_number_1} />
                                    <KeyValuePair head="Phone Numder 2" value={userdata.ph_number_2} />
                                    <KeyValuePair head="Office Phone Number" value={userdata.office_ph_no} />
                                    <KeyValuePair head="Home Phone Numder (UAE)" value={userdata.home_number} />
                                    <KeyValuePair head="Email" value={userdata.email} />
                                    <KeyValuePair head="Blood Group" value={userdata.blood_group} />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Personal Identification
                                </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Passport Number" value={userdata.passport_number} />
                                    <KeyValuePair head="Date Of Birth" value={userdata.dob} />
                                </Paper><Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Company Information
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Job" value={userdata.job} />
                                    <KeyValuePair head="Company Name" value={userdata.company_name} />
                                    <KeyValuePair head="Post Code" value={userdata.company_post_code} />
                                    <KeyValuePair head="Area" value={userdata.company_area} />
                                    <KeyValuePair head="Emirates" value={userdata.company_emirates} />
                                    <KeyValuePair head="Institution" value={userdata.company_institution} />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Educational Details
                                </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Educational Qualification" value={userdata.qualification} />
                                    <KeyValuePair head="Job/Tech Qualification Name" value={userdata.job_qualification} />
                                    <KeyValuePair head="Licence (UAE)" value={userdata.uae_licence_type} />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Resedential Details
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Residential Address" value={userdata.home_addres} />
                                    <KeyValuePair head="Marital Status" value={userdata.is_married} />
                                    <KeyValuePair head="Family Living With You" value={userdata.is_family_near} />
                                    <KeyValuePair head="Number Of Childern (Boy)" value={userdata.no_boys_children} />
                                    <KeyValuePair head="Number Of Childern (Girl)" value={userdata.no_girls_children} />
                                    <KeyValuePair head="Closest Relative In UAE" value={userdata.uae_relative} />
                                    <KeyValuePair head="Relationship" value={userdata.uae_relationship} />
                                    <KeyValuePair head="Contact Number" value={userdata.uae_relative_ph} />
                                </Paper>
                                <Paper style={{ padding: ".5em 2em" }}>
                                    <Grid container spacing={0}>
                                        <SubHead>
                                            Resedential Details (Home)
                            </SubHead>
                                    </Grid>
                                    <KeyValuePair head="Address" value={userdata.home_addres} />
                                    <KeyValuePair head="Person To Contact" value={userdata.person_to_contact} />
                                    <KeyValuePair head="Relationship" value={userdata.person_to_contact_relationship} />
                                    <KeyValuePair head="Phone Numder" value={userdata.uae_home_ph_number} />
                                    <KeyValuePair head="Mahal Number" value={userdata.mahal_number} />
                                </Paper>
                            </Grid>
                        </Grid>

                    </Paper>
                </ProfileCard>
                {/* : <Loading />} */}
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
export default withRouter(UserProfile)