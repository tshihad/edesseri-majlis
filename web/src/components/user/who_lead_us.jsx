import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { MemberCard } from '../sub_components/committe';
import img from '../../images/member.jpg'

const WhoLeadUsDiv = styled.div`
margin: 0vh 10vw;
padding-bottem: 200px;
`;
export default function WhoLeadUs(props) {
  useEffect(() => {
    props.setUser("user")
    props.setState("WhoLeadUs")
  }, [props])
  return (
    <WhoLeadUsDiv>
      <Grid container spacing={0} justify="center">
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Grid container spacing={0} justify="center">
            <MemberCard position="President" image={img} name="Mothishah V.C" date="01/01/2019" />
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid container spacing={0} justify="center">
          <Grid item xs={3}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Vice President" image={img} name="Raheed Usman P" date="01/01/2019" />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Secretary" image={img} name="Firos Mohammed" date="01/01/2019" />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Joint Secretary" image={img} name="Nishal P.M" date="01/01/2019" />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Treasurer" image={img} name="Mohammed Musthafa" date="01/01/2019" len="large"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={8} justify="center">
          <Grid item xs={2.4}>
            <Grid container spacing={0} justify="left">
              <MemberCard position="Member" image={img} name="Shajahan Shamsudeen" date="01/01/2019" len="large"/>
            </Grid>
          </Grid><Grid item xs={2.4}>
            <Grid container spacing={0} justify="left">
              <MemberCard position="Member" image={img} name="Abdul Kader P M" date="01/01/2019" />
            </Grid>
          </Grid><Grid item xs={2.4}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Member" image={img} name="Mufeed" date="01/01/2019" />
            </Grid>
          </Grid><Grid item xs={2.4}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Member" image={img} name="Rahmath Ali R A" date="01/01/2019" />
            </Grid>
          </Grid><Grid item xs={2.4}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Member" image={img} name="Sudheer P s" date="01/01/2019" />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={8} justify="center">
          <Grid item xs={2.4}>
            <Grid container spacing={0} justify="left">
              <MemberCard position="Member" image={img} name="Ameer" date="01/01/2019" />
            </Grid>
          </Grid><Grid item xs={2.4}>
            <Grid container spacing={0} justify="left">
              <MemberCard position="Advicory" image={img} name="Shajeer P S" date="01/01/2019" />
            </Grid>
          </Grid><Grid item xs={2.4}>
            <Grid container spacing={0} justify="center">
              <MemberCard position="Advicory" image={img} name="Noushad" date="01/01/2019" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </WhoLeadUsDiv>
  )
}