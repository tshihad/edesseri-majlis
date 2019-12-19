import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components';
import member from '../../images/member.jpg';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading';
import EditProfile from './edit_member'


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
    const classes = useStyles()
    const [canLoad, setLoading] = React.useState(false)
    const [userFields, setUserField] = React.useState({})
    const [edit, setEditable] = React.useState(false)
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
        axios.get(API_BASE_URL + '/majlis/member',
            {
                headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') }
            }).then((response) => {
                alert(JSON.stringify(response.data.result))
                setUserField(response.data.result)
            }).catch((error) => {
                console.log(error);
            })
        setLoading(true)
        props.setLanButton(false)
        props.setUser("user")
        props.setState("Profile")
    }, [props])
    const toggleMode = () => {
        setEditable(!edit)
    }
    return (
        <div>
            {canLoad === true ?
                <ProfileCard>
                    <Paper style={{ padding: "1em 5em" }}>
                        <Grid container spacing={0}>
                            <Grid item xs={3}> <Headline>My Profile</Headline></Grid>
                            <Grid item xs={7}></Grid>
                            <Grid item xs={2} justify={"center"}><Button onClick={toggleMode}>{edit ? "View" : "Edit"}</Button></Grid>
                        </Grid>
                        {edit ? <EditProfile userFields={userFields} /> : <ViewProfile userFields={userFields} />}
                    </Paper>
                </ProfileCard>
                : <Loading />}
        </div>
    )
}

function ViewProfile(props) {
    const classes = useStyles()
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <img className={classes.image} src={localStorage.getItem('UserImageURL')}></img>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <Key>Status</Key>
                    </Grid>
                    <Grid item xs={2}>
                        <Key>:</Key>
                    </Grid>
                    <Grid item xs={7}>
                        <Value >{props.userFields.status}</Value>
                    </Grid>
                </Grid>

            </Grid>
            <Grid item xs={9}>
                <Paper style={{ marginTop: "1em", padding: ".5em 2em" }}>
                    <Grid container spacing={0}>
                        <SubHead>
                            Personal Details
                </SubHead>
                    </Grid>
                    <KeyValuePair head="Name" value={props.userFields.name} />
                    <KeyValuePair head="House Name" value={props.userFields.housename} />
                    <KeyValuePair head="Father's Name" value={props.userFields.fathername} />
                    <KeyValuePair head="Phone Number 1" value={props.userFields.phone_number_1} />
                    <KeyValuePair head="Phone Numder 2" value={props.userFields.phone_number_2} />
                    <KeyValuePair head="Office Phone Number" value={props.userFields.office_phone_number} />
                    <KeyValuePair head="Home Phone Numder (UAE)" value={props.userFields.uae_home_ph_number} />
                    <KeyValuePair head="Email" value={props.userFields.email} />
                    <KeyValuePair head="Blood Group" value={props.userFields.bloodgroup} />
                    <KeyValuePair head="Date of Joining" value={props.userFields.date_of_join} />

                </Paper>
                <Paper style={{ marginTop: "1em", padding: ".5em 2em" }}>
                    <Grid container spacing={0}>
                        <SubHead>
                            Personal Identification
            </SubHead>
                    </Grid>
                    <KeyValuePair head="Passport Number" value={props.userFields.passport} />
                    <KeyValuePair head="Date Of Birth" value={props.userFields.dob} />
                </Paper><Paper style={{ marginTop: "1em", padding: ".5em 2em" }}>
                    <Grid container spacing={0}>
                        <SubHead>
                            Company Information
        </SubHead>
                    </Grid>
                    <KeyValuePair head="Job" value={props.userFields.job} />
                    <KeyValuePair head="Company Name" value={props.userFields.company_name} />
                    <KeyValuePair head="Post Code" value={props.userFields.company_post_code} />
                    <KeyValuePair head="Area" value={props.userFields.company_area} />
                    <KeyValuePair head="State" value={props.userFields.company_emirates} />
                    <KeyValuePair head="Institution" value={props.userFields.company_institution} />
                </Paper>
                <Paper style={{ marginTop: "1em", padding: ".5em 2em" }}>
                    <Grid container spacing={0}>
                        <SubHead>
                            Educational Details
            </SubHead>
                    </Grid>
                    <KeyValuePair head="Educational Qualification" value={props.userFields.qualification} />
                    <KeyValuePair head="Job/Tech Qualification Name" value={props.userFields.job_qualification} />
                    <KeyValuePair head="Licence (UAE)" value={props.userFields.uae_licence_type} />
                </Paper>
                <Paper style={{ marginTop: "1em", padding: ".5em 2em" }}>
                    <Grid container spacing={0}>
                        <SubHead>
                            Resedential Details
        </SubHead>
                    </Grid>
                    <KeyValuePair head="Residential Address" value={props.userFields.uae_residential} />
                    <KeyValuePair head="Marital Status" value={props.userFields.is_married} />
                    <KeyValuePair head="Family Living With You" value={props.userFields.is_family_near} />
                    <KeyValuePair head="Number Of Childern (Boy)" value={props.userFields.no_boys_children} />
                    <KeyValuePair head="Number Of Childern (Girl)" value={props.userFields.no_girls_children} />
                    <KeyValuePair head="Closest Relative In UAE" value={props.userFields.uae_relative} />
                    <KeyValuePair head="Relationship" value={props.userFields.uae_relationship} />
                    <KeyValuePair head="Contact Number" value={props.userFields.relative_phone} />
                </Paper>
                <Paper style={{ marginTop: "1em", padding: ".5em 2em" }}>
                    <Grid container spacing={0}>
                        <SubHead>
                            Resedential Details (Home)
        </SubHead>
                    </Grid>
                    <KeyValuePair head="Address" value={props.userFields.place_home} />
                    <KeyValuePair head="Person To Contact" value={props.userFields.person_to_contact} />
                    <KeyValuePair head="Relationship" value={props.userFields.person_to_contact_relationship} />
                    <KeyValuePair head="Phone Numder" value={props.userFields.home_number} />
                    <KeyValuePair head="Mahal Number" value={props.userFields.mahal_phone} />
                </Paper>
            </Grid>
        </Grid>
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