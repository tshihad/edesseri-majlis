import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import { MemberCard } from '../sub_components/committe';
import president from '../../images/members/Current/president.jpg';
import secretary from '../../images/members/Current/secretary.jpg';
import vicepresident from '../../images/members/Current/vicepresident.jpeg';
import jointsecretary from '../../images/members/Current/jointsecretary.jpeg';
import treasurer from '../../images/members/Current/treasurer.jpg';
import member1 from '../../images/members/Current/member1.jpg';
import member2 from '../../images/members/Current/member2.jpg';
import member3 from '../../images/members/Current/member3.jpg';
import member4 from '../../images/members/Current/member4.jpg';
import member5 from '../../images/members/Current/member5.jpg';
import member6 from '../../images/members/Current/member6.jpg';
import avatar from '../../images/members/avatar.jpeg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Mobile as MobileHonorable} from './honorable_heros'
import 'react-tabs/style/react-tabs.css';
import MediaQuery from 'react-responsive'


const WhoLeadUsDiv = styled.div`
margin: 0vh 10vw;
padding-left: 5vw;
padding-bottom: 5vh;
@media(max-width: 700px){
  margin: 10px 5vw 0 0;
}
`;
const tab = {
  fontSize: "1.2em",
  color: "#1d4219",
  fontWeight: 600,
}
export default function WhoLeadUs(props) {
  useEffect(() => {
    props.setLanButton(false)
    props.setState("WhoLeadUs")
    window.scrollTo(0, 0)
  }, [props])
  return (
    <div>
      <MediaQuery minDeviceWidth={800}>
        <WhoLeadUsDiv>
          <Grid container spacing={0}>
            <Grid item xs={1}></Grid>
            <Grid item xs={3} >
              <MemberCard position="President" image={president} name="Mothishah V.C" date="01/11/2018" />
            </Grid>
            <Grid item xs={3}>
              <MemberCard position="Secretary" image={secretary} name="Firos Mohammed" date="01/11/2018" />
            </Grid>
            <Grid item xs={3}>
              <MemberCard position="Treasurer" image={treasurer} name="Mohammed Musthafa" date="01/11/2018" len="large" />
            </Grid>
            <Grid item xs={2}></Grid>
            {/* </Grid>
      <Grid container spacing={0}> */}
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <MemberCard position="Vice President" image={vicepresident} name="Raheed Usman P" date="01/11/2018" />
            </Grid>
            <Grid item xs={4}>
              <MemberCard position="Joint Secretary" image={jointsecretary} name="Nishal P.M" date="01/11/2018" />
            </Grid>
            <Grid item xs={2}></Grid>
            {/* </Grid>
      <Grid container spacing={0}> */}
            <Grid item xs={3}>
              <MemberCard position="Member" image={member1} name="Shajahan Shamsudeen" date="01/11/2019" len="large" />
            </Grid>
            <Grid item xs={3}>
              <MemberCard position="Member" image={member2} name="Abdul Kader P M" date="01/11/2018" />
            </Grid>
            <Grid item xs={3}>
              <MemberCard position="Member" image={member3} name="Mufeed" date="01/11/2018" />
            </Grid>
            <Grid item xs={3}>
              <MemberCard position="Member" image={member4} name="Rahmath Ali R A" date="01/04/2019" />
            </Grid>
            {/* </Grid>
      <Grid container spacing={0}> */}
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <MemberCard position="Member" image={member5} name="Sudheer P s" date="01/10/2019" />
            </Grid>
            <Grid item xs={3}>
              <MemberCard position="Member" image={member6} name="Ameer" date="01/10/2019" />
            </Grid>
            <Grid item xs={3}></Grid>
            {/* <Grid item xs={3}>
          <MemberCard position="Advicory" image={avatar} name="Shajeer P S" date="10/01/2019" />
        </Grid>
        <Grid item xs={3}>
          <MemberCard position="Advicory" image={avatar} name="Noushad" date="10/01/2019" />
        </Grid> */}
          </Grid>
        </WhoLeadUsDiv>
      </MediaQuery>
      <MediaQuery minDeviceWidth={500}>
      <WhoLeadUsDiv>
      <Grid container spacing={0}>
        <Grid item xs={6} >
          <MemberCard position="President" image={president} name="Mothishah V.C" date="01/11/2018" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Secretary" image={secretary} name="Firos Mohammed" date="01/11/2018" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Treasurer" image={treasurer} name="Mohammed Musthafa" date="01/11/2018" len="large" />
        </Grid>
      {/* </Grid>
      <Grid container spacing={0}> */}
        <Grid item xs={6}>
          <MemberCard position="Vice President" image={vicepresident} name="Raheed Usman P" date="01/11/2018" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Joint Secretary" image={jointsecretary} name="Nishal P.M" date="01/11/2018" />
        </Grid>
      {/* </Grid>
      <Grid container spacing={0}> */}
        <Grid item xs={6}>
          <MemberCard position="Member" image={member1} name="Shajahan Shamsudeen" date="01/11/2019" len="large" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Member" image={member2} name="Abdul Kader P M" date="01/11/2018" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Member" image={member3} name="Mufeed" date="01/11/2018" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Member" image={member4} name="Rahmath Ali R A" date="01/04/2019" />
        </Grid>
      {/* </Grid>
      <Grid container spacing={0}> */}
        <Grid item xs={6}>
          <MemberCard position="Member" image={member5} name="Sudheer P s" date="01/10/2019" />
        </Grid>
        <Grid item xs={6}>
          <MemberCard position="Member" image={member6} name="Ameer" date="01/10/2019" />
        </Grid>
        {/* <Grid item xs={3}>
          <MemberCard position="Advicory" image={avatar} name="Shajeer P S" date="10/01/2019" />
        </Grid>
        <Grid item xs={3}>
          <MemberCard position="Advicory" image={avatar} name="Noushad" date="10/01/2019" />
        </Grid> */}
      </Grid>
    </WhoLeadUsDiv>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>
      <WhoLeadUsDiv>
      <Tabs>
    <TabList>
      <Tab style={tab}>Current</Tab>
      <Tab style={tab}>Honorable Heros</Tab>
    </TabList>
 
    <TabPanel style={{padding:"0 7vw"}}>
    <Grid container spacing={0} justify="center">
        <Grid item xs={12} >
          <MemberCard position="President" image={president} name="Mothishah V.C" date="01/11/2018" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Secretary" image={secretary} name="Firos Mohammed" date="01/11/2018" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Treasurer" image={treasurer} name="Mohammed Musthafa" date="01/11/2018" len="large" />
        </Grid>
      {/* </Grid>
      <Grid container spacing={0}> */}
        <Grid item xs={12}>
          <MemberCard position="Vice President" image={vicepresident} name="Raheed Usman P" date="01/11/2018" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Joint Secretary" image={jointsecretary} name="Nishal P.M" date="01/11/2018" />
        </Grid>
      {/* </Grid>
      <Grid container spacing={0}> */}
        <Grid item xs={12}>
          <MemberCard position="Member" image={member1} name="Shajahan Shamsudeen" date="01/11/2019" len="large" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Member" image={member2} name="Abdul Kader P M" date="01/11/2018" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Member" image={member3} name="Mufeed" date="01/11/2018" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Member" image={member4} name="Rahmath Ali R A" date="01/04/2019" />
        </Grid>
      {/* </Grid>
      <Grid container spacing={0}> */}
        <Grid item xs={12}>
          <MemberCard position="Member" image={member5} name="Sudheer P s" date="01/10/2019" />
        </Grid>
        <Grid item xs={12}>
          <MemberCard position="Member" image={member6} name="Ameer" date="01/10/2019" />
        </Grid>
        {/* <Grid item xs={3}>
          <MemberCard position="Advicory" image={avatar} name="Shajeer P S" date="10/01/2019" />
        </Grid>
        <Grid item xs={3}>
          <MemberCard position="Advicory" image={avatar} name="Noushad" date="10/01/2019" />
        </Grid> */}
      </Grid>
    </TabPanel>
    <TabPanel>
      <MobileHonorable/>
    </TabPanel>
  </Tabs>
      
    </WhoLeadUsDiv>
      </MediaQuery>
    </div>
  )
}