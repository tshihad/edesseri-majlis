import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/navbar.css';
import NavBar from './navbar';
import Home from './home';
import WhatweDo from './what_we_do';
import WhoLeadUs from './who_lead_us';
import EventGallery from './event_gallery';
import JoinMajlis from './join_majlis';
import MemberLogin from './member_login';
import Downloads from './downloads';
import ContactMajlis from './contact_majlis';

const Head = styled.div`
width: 100%;
z-index:2;
background-color: #05335a;
color: white;
padding: 1.5vh 10vw 0 10vw;
text-align: left;
position: fixed;
`;

const Heading = styled.div`
width:100%;
font-family: Open Sans,sans-serif;
font-weight: 500;
font-size: 1.5vw;
padding: 1% 2%;
display: inline-flex;
border-bottom: 1px #a3d0f8 solid;
`;
const Body = styled.div`
width: 100%;
padding: 20vh 10vw 0 10vw;
`;

export default function Header() {
  return (
    <div class="mainhead">
      <Router>
        <Head>
          <Heading style={{ maxHeight: "100%", overflowY: "auto" }}>
            <img src={logo} alt="logo" style={{ width: "3.5vw", height: "3.5vw" }} />
            <div style={{ padding: "1.5vw 0 0 .8vw" }}>Edassery Majlis</div>
          </Heading>
          <NavBar></NavBar>
        </Head>
        <Body>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home" component={Home} />
            <Route path="/WhatweDo" component={WhatweDo} />
            <Route path="/WhoLeadUs" component={WhoLeadUs} />
            <Route path="/EventGallery" component={EventGallery} />
            <Route path="/JoinMajlis" component={JoinMajlis} />
            <Route path="/MemberLogin" component={MemberLogin} />
            <Route path="/Downloads" component={Downloads} />
            <Route path="/ContactMajlis" component={ContactMajlis} />
          </Switch>
        </Body>
      </Router>
    </div>

  )
}


