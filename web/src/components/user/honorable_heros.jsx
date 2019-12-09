import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { MemberCard } from '../sub_components/committe';
import president from '../../images/members/HonorableHeros/Aboobacker.R.M.jpg';
import secretary from '../../images/members/HonorableHeros/Mohammadali.P.H.jpg';
import vicepresident from '../../images/members/avatar.jpeg';
import jointsecretary from '../../images/members/HonorableHeros/IbrahimKuttykka.jpg';
import treasurer from '../../images/members/avatar.jpeg';
import member1 from '../../images/members/HonorableHeros/P.M.Sathar.jpg';
import member2 from '../../images/members/HonorableHeros/PareedP.M.jpg';
import member3 from '../../images/members/HonorableHeros/AbdulRahimanAV.jpg';
import member4 from '../../images/members/avatar.jpeg';
import member5 from '../../images/members/HonorableHeros/A.VHussain.jpeg';
import member6 from '../../images/members/HonorableHeros/A.MJamal.jpeg'
import member7 from '../../images/members/HonorableHeros/MOOSAR.K.jpeg'


const WhoLeadUsDiv = styled.div`
margin: 5vh 10vw 0vh 10vw;
padding-left: 5vw;
padding-bottom: 5vh;
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 1.5em;
font-family: 'Comfortaa', cursive;
`;

const P = styled.p`
padding-left: 2vw;
color: #1d4219;
font-weight: bold;
font-size: 1.1em;
`;
export default function WhoLeadUs(props) {
    useEffect(() => {
        window.scrollTo(0, 0)

        props.setLanButton(false)
        props.setState("WhoLeadUs")
    }, [props])
    return (
        <WhoLeadUsDiv>
            <Headline>Our Honorable Heros</Headline>
            <P>Expat Committee in the UAE as of December 12, 1972. This is the oldest expat committee in Minutes available.</P>
            <Grid container spacing={0}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                    <MemberCard position="President" image={president} name="R.M Aboobacker" />
                </Grid>
                <Grid item xs={3}>
                    <MemberCard position="Secretary" image={secretary} name="P.H Mohammedali" />
                </Grid>
                <Grid item xs={3}>
                    <MemberCard position="Cashier" image={treasurer} name="R.A Adimakkutty" len="large"/>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <MemberCard position="Vice President" image={vicepresident} name="A.A Muhammad" />
                </Grid>
                <Grid item xs={4}>
                    <MemberCard position="Joint Secretary" image={jointsecretary} name="P.M Ibrahim Kutty" />
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <MemberCard position="Member" image={member1} name="P.M Saththar" />
                </Grid>
                <Grid item xs={3}>
                    <MemberCard position="Member" image={member2} name="P.M Pareed" />
                </Grid>
                <Grid item xs={3}>
                    <MemberCard position="Member" image={member3} name="A.V Abdul Rahiman" />
                </Grid>
                <Grid item xs={3}>
                <MemberCard position="Member" image={member4} name="P.K Ismail" />
                </Grid>
            </Grid>
            <Grid container spacing={0} justify="center">
                <Grid item xs={3}>
                <MemberCard position="Member" image={member5} name="A.V Hussain" />
                </Grid>
            </Grid>
            <hr
        style={{
            color: "rgb(126, 173, 43)",
            backgroundColor: "rgb(126, 173, 43)",
            height: 3
        }}
    />
    <Grid container spacing={0} justify="center">
                <Grid item xs={3}>
                <MemberCard position="&nbsp;" image={member6} name="A M Jamal" />
                </Grid>
                <Grid item xs={3}>
                <MemberCard position="&nbsp;" image={member7} name="R K Moosa" />
                </Grid>
            </Grid>
        </WhoLeadUsDiv>
    )
}