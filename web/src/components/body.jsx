import React from 'react';
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
import Footer from './footer'
import AddMember from './addMember'
import Members from './members'
import Subscription from './subscription'
import '../styles/navbar.css';

const Head = styled.div`
width: 100%;
z-index:2;
background-color: #033d19;
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
display: inline-block;
border-bottom: 1px #a3d0f8 solid;
`;
const Body = styled.div`
width: 100%;
padding: 20vh 10vw 0 10vw;
min-height: 95vh;
`;

const Language = styled.button`
border: 0;
outline: 0;
background-color: #022911;
color: white;
float: right;
width: 9vw;
height: 4vw;
border-radius: .5vw;
`;

export default function Header() {
  const [isButtonActive, setActive] = React.useState("Home")
  const [language, setLanguage] = React.useState("മലയാളം")
  const [user,setUser] = React.useState("general")

  const buttonClick = (value) => {
    setActive(value)
  }

  const setThisUser = (user) => {
    setUser(user)
  }

  const changeLanguage = () => {
    setLanguage(language === "മലയാളം" ? "English" : "മലയാളം")
  }
  return (
    <div class="mainhead">
      <Router>
        <Head>
          <Heading style={{ maxHeight: "100%", overflowX: "hidden" }}>
            <div style={{ display: "inline-flex" }}>
              <img src={logo} alt="logo" style={{ width: "3.5vw", height: "3.5vw", display: "inline-block" }} />
              <div style={{ margin: "1.5vw 0 0 .8vw", display: "inline-block" }}>Edassery Majlis</div>
            </div>
            <Language style={{ display: "inline-block", fontSize: language === "English" ? "1.3vw" : "1.7vw" }} onClick={changeLanguage}>{language}</Language>
          </Heading>

          {/* NAVBAR for general user */}
          <div class="navbar" style={{display : user === "general" ? "block" : "none"}}>
            <Link to="/Home" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Home")} style={{
                  borderBottom: isButtonActive === "Home" && ".2vw solid white",
                  backgroundColor: isButtonActive === "Home" && " #021806"
                }}>Home</button>
            </Link>
            <Link to="/WhatWeDo" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhatWeDo")} style={{
                  borderBottom: isButtonActive === "WhatWeDo" && ".2vw solid white",
                  backgroundColor: isButtonActive === "WhatWeDo" && " #021806"
                }}>What We Do</button>
              <div class="dropdown-content" onClick={() => buttonClick("WhatWeDo")}>
                <Link to="/WhatWeDo/Familywelfare">Family Welfare</Link>
                <Link to="/WhatWeDo/Projects">Projects</Link>
              </div>
            </Link>
            <Link to="/WhoLeadUs" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhoLeadUs")} style={{
                  borderBottom: isButtonActive === "WhoLeadUs" && ".2vw solid white",
                  backgroundColor: isButtonActive === "WhoLeadUs" && " #021806"
                }}>Who Lead Us</button>
              <div class="dropdown-content" onClick={() => buttonClick("WhoLeadUs")}>
                <Link to="/WhoLeadUs/Current">Current</Link>
                <Link to="/WhoLeadUs/Term1">Term-1</Link>
                <Link to="/WhoLeadUs/Term2">Term-2</Link>
                <Link to="/WhoLeadUs/Term3">Term-3</Link>

              </div>
            </Link>
            <Link to="/EventGallery" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("EventGallery")} style={{
                  borderBottom: isButtonActive === "EventGallery" && ".2vw solid white",
                  backgroundColor: isButtonActive === "EventGallery" && " #021806"
                }}>Event Gallery</button>
              <div class="dropdown-content" onClick={() => buttonClick("EventGallery")}>
                <Link to="/EventGallery/Milad">Milad</Link>
                <Link to="/EventGallery/Eid">Eid</Link>
                <Link to="/EventGallery/Iftar">Iftar</Link>
                <Link to="/EventGallery/Sports">Sports</Link>
                <Link to="/EventGallery/MeetandGreet">Meet and Greet</Link>
                <Link to="/EventGallery/Other">Other</Link>
              </div>
            </Link>
            <Link to="/JoinMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("JoinMajlis")} style={{
                  borderBottom: isButtonActive === "JoinMajlis" && ".2vw solid white",
                  backgroundColor: isButtonActive === "JoinMajlis" && " #021806"
                }}>Join Majlis</button>
            </Link>
            <Link to="/MemberLogin" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("MemberLogin")} style={{
                  borderBottom: isButtonActive === "MemberLogin" && ".2vw solid white",
                  backgroundColor: isButtonActive === "MemberLogin" && " #021806"
                }}>Member Login</button>
            </Link>
            <Link to="/Downloads" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Downloads")} style={{
                  borderBottom: isButtonActive === "Downloads" && ".2vw solid white",
                  backgroundColor: isButtonActive === "Downloads" && " #021806"
                }}>Downloads</button>
            </Link>
            <Link to="/ContactMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("ContactMajlis")} style={{
                  borderBottom: isButtonActive === "ContactMajlis" && ".2vw solid white",
                  backgroundColor: isButtonActive === "ContactMajlis" && " #021806"
                }}>Contact Majlis</button>
            </Link>
          </div>
          {/* NAVBAR for Admin user */}
          <div class="navbar" style={{display : user === "admin" ? "block" : "none"}}>
            <Link to="/Admin/Members" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Home")} style={{
                  borderBottom: isButtonActive === "Home" && ".2vw solid white",
                  backgroundColor: isButtonActive === "Home" && " #021806"
                }}>Members</button>
            </Link>
            <Link to="/Admin/AddMember" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhatWeDo")} style={{
                  borderBottom: isButtonActive === "WhatWeDo" && ".2vw solid white",
                  backgroundColor: isButtonActive === "WhatWeDo" && " #021806"
                }}>Add Member</button>
            </Link>
            <Link to="/Admin/Subscriptions" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhoLeadUs")} style={{
                  borderBottom: isButtonActive === "WhoLeadUs" && ".2vw solid white",
                  backgroundColor: isButtonActive === "WhoLeadUs" && " #021806"
                }}>Subscriptions</button>
            </Link>
            <Link to="/EventGallery" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("EventGallery")} style={{
                  borderBottom: isButtonActive === "EventGallery" && ".2vw solid white",
                  backgroundColor: isButtonActive === "EventGallery" && " #021806"
                }}>Event Gallery</button>
            </Link>
            <Link to="/JoinMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("JoinMajlis")} style={{
                  borderBottom: isButtonActive === "JoinMajlis" && ".2vw solid white",
                  backgroundColor: isButtonActive === "JoinMajlis" && " #021806"
                }}>Loans</button>
            </Link>
            <Link to="/MemberLogin" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("MemberLogin")} style={{
                  borderBottom: isButtonActive === "MemberLogin" && ".2vw solid white",
                  backgroundColor: isButtonActive === "MemberLogin" && " #021806"
                }}>Family Welfare</button>
            </Link>
            <Link to="/Downloads" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Downloads")} style={{
                  borderBottom: isButtonActive === "Downloads" && ".2vw solid white",
                  backgroundColor: isButtonActive === "Downloads" && " #021806"
                }}>Upload Forms</button>
            </Link>
            <Link to="/ContactMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("ContactMajlis")} style={{
                  borderBottom: isButtonActive === "ContactMajlis" && ".2vw solid white",
                  backgroundColor: isButtonActive === "ContactMajlis" && " #021806"
                }}>Contact Majlis</button>
            </Link>
          </div>
        </Head>
        <Body>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home" ><Home setState={buttonClick} language={language} /></Route>
            <Route path="/WhatweDo" ><WhatweDo setState={buttonClick} language={language} /></Route>
            <Route path="/WhoLeadUs"><WhoLeadUs setState={buttonClick} language={language} /></Route>
            <Route path="/EventGallery" ><EventGallery setState={buttonClick} language={language} /></Route>
            <Route path="/JoinMajlis" ><JoinMajlis setState={buttonClick} language={language} /></Route>
            <Route path="/MemberLogin" ><MemberLogin setState={buttonClick} language={language} /></Route>
            <Route path="/Downloads" ><Downloads setState={buttonClick} language={language} /></Route>
            <Route path="/ContactMajlis" ><ContactMajlis setState={buttonClick} language={language} /></Route>
            <Redirect exact from="/Admin" to="/Admin/Members" />
            <Route path="/Admin/Members" ><Members setUser={setThisUser}/></Route>
            <Route path="/Admin/AddMember" ><AddMember setUser={setThisUser}/></Route>
            <Route path="/Admin/Subscriptions" ><Subscription setUser={setThisUser}/></Route>
          </Switch>
        </Body>
        <Footer />
      </Router>
    </div>

  )
}


