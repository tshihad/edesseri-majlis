import React from 'react';
import styled from 'styled-components';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/navbar.css';
import NavBar from './sub_components/navbar';
import Home from './home';
import WhatweDo from './what_we_do';
import WhoLeadUs from './who_lead_us';
import EventGallery from './event_gallery';
import JoinMajlis from './join_majlis';
import MemberLogin from './member_login';
import Downloads from './downloads';
import ContactMajlis from './contact_majlis';
import EventCalendar from './even_calendar';
import Footer from './footer';
import AddMember from './addMember';
import Members from './members';
import Subscription from './subscription';
import Loans from './loans';
import FamilyWelfare from './family_welfare';
import UploadForms from './upload_forms';
import ContactMajlisAdmin from './contact_majlis_admin';
import EventGalleryAdmin from './evevnt_gallery_admin';
import UserHome from './user/home';
import UserWhatweDo from './user/what_we_do';
import UserWhoLeadUs from './user/who_lead_us';
import UserEventGallery from './user/event_gallery';
import UserOptions from './user/user_options';
import Profile from './user/profile';
import UserDownloads from './user/downloads';
import UserContactMajlis from './user/contact_majlis';
import '../styles/navbar.css';
import '../styles/header.css'

const Head = styled.div`
width: 100%;
z-index:2;
background-color: #e5eee5;
color: #bab86c;
padding: 1.5vh 10vw 0 10vw;
text-align: left;
position: fixed;
border-bottom: 1px #556b2f solid;
`;

const Heading = styled.div`
width:100%;
font-family: Open Sans,sans-serif;
font-weight: 500;
font-size: 1.5vw;
padding: 1% 2%;
display: inline-block;
border-bottom: 1px #556b2f solid;
`;
const Body = styled.div`
width: 100%;
padding: 9.8vw 0 0 0;
min-height: 90vh;
background-color: #f2f7f2;
font-family: 'Comfortaa', cursive;
`;

const Language = styled.button`
border: 0;
outline: 0;
background-color: #556b2f;
color: white;
float: right;
width: 9vw;
height: 5vh;
margin-top: 2.7vh;
border-radius: .5vw;
font-family: 'Comfortaa', cursive;
`;

const Span = styled.span`
font-size: 2vw;
`;
export default function Header() {
  const [isButtonActive, setActive] = React.useState("Home")
  const [language, setLanguage] = React.useState("മലയാളം")
  const [user, setUser] = React.useState("general")

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
              <div style={{ margin: "1.5vw 0 0 .8vw", color: "#556b2f", display: "inline-block", fontFamily: "Aroma", fontSize: "1.4vw" }}><Span>E</Span>DASSERY <Span>M</Span>AJLIS <Span>G</Span>ROUP</div>
            </div>
            <Language style={{ display: "inline-block", fontSize: language === "English" ? "1.1vw" : "1.5vw" }} onClick={changeLanguage}>{language}</Language>
          </Heading>

          {/* NAVBAR for general user */}
          <div class="navbar" style={{ display: user === "general" ? "block" : "none" }}>
            <Link to="/Home" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Home")} style={{
                  backgroundColor: isButtonActive === "Home" && " #556b2f",
                  color: isButtonActive === "Home" && "white"
                }}>Home</button>
            </Link>
            <Link to="/WhatWeDo" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhatWeDo")} style={{
                  backgroundColor: isButtonActive === "WhatWeDo" && " #556b2f",
                  color: isButtonActive === "WhatWeDo" && "white"
                }}>What We Do</button>
              <div class="dropdown-content" onClick={() => buttonClick("WhatWeDo")}>
                <Link to="/WhatWeDo/Familywelfare">Family Welfare</Link>
                <Link to="/WhatWeDo/Projects">Projects</Link>
              </div>
            </Link>
            <Link to="/WhoLeadUs" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhoLeadUs")} style={{
                  backgroundColor: isButtonActive === "WhoLeadUs" && " #556b2f",
                  color: isButtonActive === "WhoLeadUs" && "white"
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
                  backgroundColor: isButtonActive === "EventGallery" && " #556b2f",
                  color: isButtonActive === "EventGallery" && "white"
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
            <Link to="/Downloads" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Downloads")} style={{
                  backgroundColor: isButtonActive === "Downloads" && " #556b2f",
                  color: isButtonActive === "Downloads" && "white"
                }}>Downloads</button>
            </Link>
            <Link to="/ContactMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("ContactMajlis")} style={{
                  backgroundColor: isButtonActive === "ContactMajlis" && " #556b2f",
                  color: isButtonActive === "ContactMajlis" && "white"
                }}>Contact Majlis</button>
            </Link>
            <Link to="/JoinMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("JoinMajlis")} style={{
                  backgroundColor: isButtonActive === "JoinMajlis" && " #556b2f",
                  color: isButtonActive === "JoinMajlis" && "white"
                }}>Join Majlis</button>
            </Link>
            <Link to="/MemberLogin" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("MemberLogin")} style={{
                  backgroundColor: isButtonActive === "MemberLogin" && " #556b2f",
                  color: isButtonActive === "MemberLogin" && "white"
                }}>Member Login</button>
            </Link>
          </div>
          {/* NAVBAR for Admin user */}
          <div class="navbar" style={{ display: user === "admin" ? "block" : "none" }}>
            <Link to="/Admin/Members" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Members")} style={{
                  backgroundColor: isButtonActive === "Members" && " #556b2f",
                  color: isButtonActive === "Members" && "white"
                }}>Members</button>
            </Link>
            <Link to="/Admin/AddMember" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("AddMember")} style={{
                  backgroundColor: isButtonActive === "AddMember" && " #556b2f",
                  color: isButtonActive === "AddMember" && "white"
                }}>Add Member</button>
            </Link>
            <Link to="/Admin/Subscriptions" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Subscriptions")} style={{
                  backgroundColor: isButtonActive === "Subscriptions" && " #556b2f",
                  color: isButtonActive === "Subscriptions" && "white"
                }}>Subscriptions</button>
            </Link>
            <Link to="/Admin/EventGallery" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("EventGalleryAdmin")} style={{
                  backgroundColor: isButtonActive === "EventGalleryAdmin" && " #556b2f",
                  color: isButtonActive === "EventGalleryAdmin" && "white"
                }}>Event Gallery</button>
            </Link>
            <Link to="/Admin/Loans" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Loans")} style={{
                  backgroundColor: isButtonActive === "Loans" && " #556b2f",
                  color: isButtonActive === "Loans" && "white"
                }}>Loans</button>
            </Link>
            <Link to="/Admin/FamlilyWelfare" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("FamilyWelfare")} style={{
                  backgroundColor: isButtonActive === "FamilyWelfare" && " #556b2f",
                  color: isButtonActive === "FamilyWelfare" && "white"
                }}>Family Welfare</button>
            </Link>
            <Link to="/Admin/UploadForms" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("UploadForms")} style={{
                  backgroundColor: isButtonActive === "UploadForms" && " #556b2f",
                  color: isButtonActive === "UploadForms" && "white"
                }}>Upload Forms</button>
            </Link>
            <Link to="/Admin/EventCalendar" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("EventCalendar")} style={{
                  backgroundColor: isButtonActive === "EventCalendar" && " #556b2f",
                  color: isButtonActive === "EventCalendar" && "white"
                }}>Event Calendar</button>
            </Link>
          </div>
          {/* NAVBAR FOR USER */}
          <div class="navbar" style={{ display: user === "user" ? "block" : "none" }}>
            <Link to="/User/Home" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Home")} style={{
                  backgroundColor: isButtonActive === "Home" && " #556b2f",
                  color: isButtonActive === "Home" && "white"
                }}>Home</button>
            </Link>
            <Link to="/User/WhatWeDo" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhatWeDo")} style={{
                  backgroundColor: isButtonActive === "WhatWeDo" && " #556b2f",
                  color: isButtonActive === "WhatWeDo" && "white"
                }}>What We Do</button>
              <div class="dropdown-content" onClick={() => buttonClick("WhatWeDo")}>
                <Link to="/WhatWeDo/Familywelfare">Family Welfare</Link>
                <Link to="/WhatWeDo/Projects">Projects</Link>
              </div>
            </Link>
            <Link to="/User/WhoLeadUs" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("WhoLeadUs")} style={{
                  backgroundColor: isButtonActive === "WhoLeadUs" && " #556b2f",
                  color: isButtonActive === "WhoLeadUs" && "white"
                }}>Who Lead Us</button>
              <div class="dropdown-content" onClick={() => buttonClick("WhoLeadUs")}>
                <Link to="/WhoLeadUs/Current">Current</Link>
                <Link to="/WhoLeadUs/Term1">Term-1</Link>
                <Link to="/WhoLeadUs/Term2">Term-2</Link>
                <Link to="/WhoLeadUs/Term3">Term-3</Link>

              </div>
            </Link>
            <Link to="/User/EventGallery" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("EventGallery")} style={{
                  backgroundColor: isButtonActive === "EventGallery" && " #556b2f",
                  color: isButtonActive === "EventGallery" && "white"
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
            <Link to="/User/Downloads" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Downloads")} style={{
                  backgroundColor: isButtonActive === "Downloads" && " #556b2f",
                  color: isButtonActive === "Downloads" && "white"
                }}>Downloads</button>
            </Link>
            <Link to="/User/ContactMajlis" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("ContactMajlis")} style={{
                  backgroundColor: isButtonActive === "ContactMajlis" && " #556b2f",
                  color: isButtonActive === "ContactMajlis" && "white"
                }}>Contact Majlis</button>
            </Link>
            <Link to="/User/UserOptions/Subscriptions" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("UserOptions")} style={{
                  backgroundColor: isButtonActive === "UserOptions" && " #556b2f",
                  color: isButtonActive === "UserOptions" && "white"
                }}>User Options</button>
                <div class="dropdown-content" onClick={() => buttonClick("UserOptions")}>
                <Link to="/User/UserOptions/Subscriptions">Subscriptions</Link>
                <Link to="/User/UserOptions/Loans">Loans</Link>
              </div>
            </Link>
            <Link to="/User/Profile" class="dropdown">
              <button class="dropbtn"
                onClick={() => buttonClick("Profile")} style={{
                  backgroundColor: isButtonActive === "Profile" && " #556b2f",
                  color: isButtonActive === "Profile" && "white"
                }}>Profile</button>
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
            <Route path="/Admin/Members" ><Members setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/AddMember" ><AddMember setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/Subscriptions" ><Subscription setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventGallery" ><EventGalleryAdmin setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/Loans" ><Loans setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/FamlilyWelfare" ><FamilyWelfare setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/UploadForms" ><UploadForms setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/ContactMajlisAdmin" ><ContactMajlisAdmin setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventCalendar" ><EventCalendar setState={buttonClick} setUser={setThisUser} /></Route>
            <Redirect exact from="/User" to="/User/Home" />
            <Route path="/User/Home" ><UserHome setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/WhatweDo" ><UserWhatweDo setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/WhoLeadUs"><UserWhoLeadUs setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/EventGallery" ><UserEventGallery setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/Downloads" ><UserDownloads setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/ContactMajlis" ><UserContactMajlis setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/UserOptions/Subscriptions" ><UserOptions component="subscription" setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/UserOptions/Loans" ><UserOptions component="loans" setState={buttonClick} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/Profile" ><Profile setState={buttonClick} language={language} setUser={setThisUser} /></Route>

          </Switch>
        </Body>
        <Footer />
      </Router>
    </div>

  )
}


