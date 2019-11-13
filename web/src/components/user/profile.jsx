// import React, { useEffect } from 'react'
// import { withRouter } from 'react-router-dom'
// import axios from 'axios'
// import styled from 'styled-components';
// import member from '../../images/member.jpg';
// import { API_BASE_URL } from '../constants';
// import Loading from '../sub_components/loading'


// import {
//     Paper,
//     Grid,
//     makeStyles
// } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//     image: {
//         width: "230px",
//         height: "280px"
//     },
// }))
// const Button = styled.button`
// border:0;
// outline: 0;
// margin-top:1em;
// background-color: #556b2f;
// color: white;
// padding: .4em 1em;
// font-size: 1.3em;
// border: 1px solid #556b2f;
// border-radius: .15em;
// &:hover{
//     font-weight: 600;
//     background-color: white;
//     color: #556b2f;
// }
// `;
// const Headline = styled.h3`
// color:#1d4219;
// font-size: 1.8em;
// font-family: 'Comfortaa', cursive;
// `;
// const SubHead = styled.h3`
// color:#1d4219;
// font-size: 1.5em;
// font-family: 'Comfortaa', cursive;
// `;
// const ProfileCard = styled.div`
// margin: 3vh 10vw 0 10vw `;
// function Profile(props) {
//     const classes = useStyles()
//     const [canLoad, setLoading] = React.useState(false)
//     const [userFields,setUserField] = React.useState({})
//     useEffect(() => {
//         if (localStorage.getItem('VerifiedUser')) {
//             setLoading(true)
//         } else {
//             axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
//                 repsonse => {
//                     if (repsonse.status != 200) {
//                         window.location = "/MemberLogin"
//                     }
//                 }
//             ).catch(error => {
//                 window.location = "/MemberLogin"
//                 alert("Authentication Failed")
//             })
//         }
//         axios.get(API_BASE_URL + '/majlis/member',
//             {
//                 headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') }
//             }).then((response) => {
//                 alert(JSON.stringify(response.data.result))
//                 setUserField(response.data.result)
//             }).catch((error) => {
//                 console.log(error);
//             })
//         props.setLanButton(false)
//         props.setUser("user")
//         props.setState("Profile")
//     }, [props])
//     return (
//         <div>
//             {canLoad === true ?
//                 <ProfileCard>
//                     <Paper style={{ padding: "1em 5em" }}>
//                         <Grid container spacing={0}>
//                             <Grid item xs={2}> <Headline>My Profile</Headline></Grid>
//                             <Grid item xs={8}></Grid>
//                             <Grid item xs={2} justify={"center"}><Button>Edit</Button></Grid>
//                         </Grid>
//                         <Grid container spacing={0}>
//                             <Grid item xs={3}>
//                                 <Paper style={{ width: "15vw" }}>
//                                     <img className={classes.image} src={member}></img>
//                                 </Paper>
//                             </Grid>
//                             <Grid item xs={9}>
//                                 <Paper style={{ padding: ".5em 2em" }}>
//                                     <Grid container spacing={0}>
//                                         <SubHead>
//                                             Personal Details
//                             </SubHead>
//                                     </Grid>
//                                     <KeyValuePair head="Name" value={userFields.name} />
//                                     <KeyValuePair head="House Name" value={userFields.} />
//                                     <KeyValuePair head="Father's Name" value={userFields.} />
//                                     <KeyValuePair head="Phone Number 1" value={userFields.} />
//                                     <KeyValuePair head="Phone Numder 2" value={userFields.} />
//                                     <KeyValuePair head="Office Phone Number" value={userFields.} />
//                                     <KeyValuePair head="Home Phone Numder (UAE)" value={userFields.} />
//                                     <KeyValuePair head="Email" value={userFields.} />
//                                     <KeyValuePair head="Blood Group" value={userFields.} />
//                                 </Paper>
//                                 <Paper style={{ padding: ".5em 2em" }}>
//                                     <Grid container spacing={0}>
//                                         <SubHead>
//                                             Personal Identification
//                                 </SubHead>
//                                     </Grid>
//                                     <KeyValuePair head="Passport Number" value={userFields.} />
//                                     <KeyValuePair head="Date Of Birth" value={userFields.} />
//                                 </Paper><Paper style={{ padding: ".5em 2em" }}>
//                                     <Grid container spacing={0}>
//                                         <SubHead>
//                                             Company Information
//                             </SubHead>
//                                     </Grid>
//                                     <KeyValuePair head="Job" value={userFields.} />
//                                     <KeyValuePair head="Company Name" value={userFields.} />
//                                     <KeyValuePair head="Post Code" value={userFields.} />
//                                     <KeyValuePair head="Area" value={userFields.} />
//                                     <KeyValuePair head="Emirates" value={userFields.} />
//                                     <KeyValuePair head="Institution" value={userFields.} />
//                                 </Paper>
//                                 <Paper style={{ padding: ".5em 2em" }}>
//                                     <Grid container spacing={0}>
//                                         <SubHead>
//                                             Educational Details
//                                 </SubHead>
//                                     </Grid>
//                                     <KeyValuePair head="Educational Qualification" value={userFields.} />
//                                     <KeyValuePair head="Job/Tech Qualification Name" value={userFields.} />
//                                     <KeyValuePair head="Licence (UAE)" value={userFields.} />
//                                 </Paper>
//                                 <Paper style={{ padding: ".5em 2em" }}>
//                                     <Grid container spacing={0}>
//                                         <SubHead>
//                                             Resedential Details
//                             </SubHead>
//                                     </Grid>
//                                     <KeyValuePair head="Residential Address" value={userFields.} />
//                                     <KeyValuePair head="Marital Status" value={userFields.} />
//                                     <KeyValuePair head="Family Living With You" value={userFields.} />
//                                     <KeyValuePair head="Number Of Childern (Boy)" value={userFields.} />
//                                     <KeyValuePair head="Number Of Childern (Girl)" value={userFields.} />
//                                     <KeyValuePair head="Closest Relative In UAE" value={userFields.} />
//                                     <KeyValuePair head="Relationship" value={userFields.} />
//                                     <KeyValuePair head="Contact Number" value={userFields.} />
//                                 </Paper>
//                                 <Paper style={{ padding: ".5em 2em" }}>
//                                     <Grid container spacing={0}>
//                                         <SubHead>
//                                             Resedential Details (Home)
//                             </SubHead>
//                                     </Grid>
//                                     <KeyValuePair head="Address" value={userFields.} />
//                                     <KeyValuePair head="Person To Contact" value={userFields.} />
//                                     <KeyValuePair head="Relationship" value={userFields.} />
//                                     <KeyValuePair head="Phone Numder" value={userFields.} />
//                                     <KeyValuePair head="Mahal Number" value={userFields.} />
//                                 </Paper>
//                             </Grid>
//                         </Grid>

//                     </Paper>
//                 </ProfileCard>
//                 : <Loading />}
//         </div>
//     )
// }


// const Key = styled.div`
// padding: .5em;
// padding-left: 2em;
// font-weight: 600;
// `;
// const Value = styled.div`
// padding: .5em;
// font-weight: 500;
// `;

// function KeyValuePair(props) {
//     return (
//         <Grid container spacing={0}>
//             <Grid item xs={5}>
//                 <Key>{props.head}</Key>
//             </Grid>
//             <Grid item xs={1}>
//                 <Key>:</Key>
//             </Grid>
//             <Grid item xs={6}>
//                 <Value >{props.value}</Value>
//             </Grid>
//         </Grid>
//     )
// }
// export default withRouter(Profile)