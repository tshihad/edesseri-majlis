import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Link, Redirect, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/navbar.css';
import NavBar from './sub_components/navbar';
import Home from './general/home';
import WhatweDo from './general/what_we_do';
import WhoLeadUs from './general/who_lead_us';
import OurHeros from './general/honorable_heros'
import EventGallery from './general/event_gallery';
import JoinMajlis from './general/join_majlis';
import MemberLogin from './general/member_login';
import Downloads from './general/downloads';
import ContactMajlis from './general/contact_majlis';
import AdminEventCalendar from './admin/event_calendar';
import Footer from './footer';
import AddMember from './admin/addMember';
import Members from './admin/members';
import Subscription from './admin/subscription';
import Loans from './admin/loans';
import FamilyWelfare from './admin/family_welfare';
import UploadForms from './admin/upload_forms';
import ContactMajlisAdmin from './admin/contact_majlis_admin';
import EventGalleryAdmin from './admin/event_gallery_admin';
import UserHome from './user/home';
import UserWhatweDo from './user/what_we_do';
import UserWhoLeadUs from './user/who_lead_us';
import UserEventGallery from './user/event_gallery';
import UserOptions from './user/user_options';
import Profile from './user/profile';
import UserDownloads from './user/downloads';
import UserContactMajlis from './user/contact_majlis';
import EventCalendar from './general/event_calendar';
import LogoutIcon from '@material-ui/icons/Person';
import AdminLogin from './general/admin_login';
import ViewProfile from './admin/profile';
import ViewSubscription from './admin/single_subscription';
import MediaQuery from 'react-responsive'
import MobileHeader from './mobile_header';
import LogoutAction from './sub_components/logout'

import axios from 'axios';
import '../styles/navbar.css';
import '../styles/header.css';
import '../styles/logout.css';
import { API_BASE_URL } from './constants'



const Head = styled.div`
width: 100%;
z-index:1;
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
@media(max-width: 700px){
  padding: 50px 0 0 0;
}
`;

const Language = styled.button`
border: 0;
outline: 0;
background-color: #6a7e4b;
color: white;
float: right;
width: 9vw;
height: 5vh;
margin-top: 2.7vh;
border-radius: .5vw;
font-family: 'Comfortaa', cursive;
margin-right:2%;
&:hover{
  background-color: #556b2f;
}
`;
const Logout = styled.button`
border: 0;
outline: 0;
background-color: #6a7e4b;
color: white;
float: right;
margin-top: .5em;
border-radius: 3em;
display: inline-block;
&:hover{
  background-color: #556b2f;
}
`;
const Span = styled.span`
font-size: 2vw;
`;

const HomeMenu = [
  {
    text: "Home",
    url: "/Home",
  },
  {
    text: "What We Do",
    url: "/WhatWeDo",
  },
  {
    text: "Who Lead Us",
    url: "/WhoLeadUs/Current",
  },
  {
    text: "Event Gallery",
    url: "/EventGallery/Milad",
  },
  {
    text: "Downloads",
    url: "/Downloads",
  },
  {
    text: "Contact Majlis",
    url: "/ContactMajlis",
  },
  {
    text: "Join Majlis",
    url: "/JoinMajlis",
  }, {
    text: "Member Login",
    url: "/MemberLogin",
  },
]

const UserMenu = [
  {
    text: "Home",
    url: "/User/Home",
  },
  {
    text: "What We Do",
    url: "/User/WhatWeDo",
  },
  {
    text: "Who Lead Us",
    url: "/User/WhoLeadUs/Current",
  },
  {
    text: "Event Gallery",
    url: "/User/EventGallery/Milad",
  },
  {
    text: "Downloads",
    url: "/User/Downloads",
  },
  {
    text: "Contact Majlis",
    url: "/User/ContactMajlis",
  },
  {
    text: "User Options",
    url: "/User/UserOptions",
  }, {
    text: "Profile",
    url: "/User/Profile",
  }, {
    text: "Logout",
    url: "/Logout",
  },
]

const AdminMenu = [
  {
    text: "Home",
    url: "/Home",
  },
  {
    text: "What We Do",
    url: "/WhatWeDo",
  },
  {
    text: "Who Lead Us",
    url: "/WhoLeadUs/Current",
  },
  {
    text: "Event Gallery",
    url: "/EventGallery/Milad",
  },
  {
    text: "Downloads",
    url: "/Downloads",
  },
  {
    text: "Contact Majlis",
    url: "/ContactMajlis",
  },
  {
    text: "Join Majlis",
    url: "/JoinMajlis",
  }, {
    text: "Member Login",
    url: "/MemberLogin",
  },

]
export default function Header() {
  const [isButtonActive, setActive] = React.useState("Home")
  const [language, setLanguage] = React.useState("മലയാളം")
  const [isLanguageOption, setLanguageButton] = React.useState(false)
  const [isLoggedin, setIsLoggedin] = React.useState(false)
  const [logout, toggleLogout] = React.useState(false)
  const [user, setUser] = React.useState("general")
  const handleLogout = () => {
    localStorage.clear()
    setIsLoggedin(false)
    window.location = "/Home"
  }
  const setLogIn = (value) => {
    setIsLoggedin(value)
  }
  const setButton = (value) => {
    setLanguageButton(value)
  }
  const buttonClick = (value) => {
    setActive(value)
  }

  const setThisUser = (user) => {
    setUser(user)
  }
  const openLogout = () => {
    toggleLogout(true);
  }
  const closeLogout = () => {
    toggleLogout(false);
  }
  const changeLanguage = () => {
    setLanguage(language === "മലയാളം" ? "English" : "മലയാളം")
  }
  useEffect(() => {
    axios.get(API_BASE_URL + '/majlis/auth', { headers: { "Authorization": localStorage.getItem('EdasseryMajlisToken') } }).then(
      repsonse => {
        if (repsonse.status === 200) {
          setLogIn(true)
        }
      }
    )
  })
  return (
    <div class="mainhead">
      {/* Logoutmenu  */}
      {logout &&
        <div className="modal-overlay" onClick={closeLogout}
          style={{ background: 'rgba(229, 255, 229,0)', position: 'fixed', width: '100%', height: "auto", zIndex: 3 }}>
          <div className="profile-details navbar" onMouseLeave={closeLogout}
            style={{
              textAlign: 'center', background: 'rgba(,,,1)', width: '12%', height: '23%', marginLeft: '84%', marginTop: '6%'
              , borderRadius: '2px', padding: '0%', border: 'solid 1px #556b2f', paddingBottom: "1em"
            }}>
            <div style={{ padding: "1em 0", color: "#1d4219" }}>
              <b>{localStorage.getItem('Username')}</b>
            </div>
            <button className="logout-item" onClick={handleLogout} style={{ display: 'block', padding: '5% 5%' }}>
              Log Out
                </button>
          </div>
        </div>}
      <Router>
        <MediaQuery minDeviceWidth={700}>
          <Head>
            <Heading style={{ maxHeight: "100%", overflowX: "hidden", borderBottom: user === "none" && "0px" }}>
              <div style={{ display: "inline-flex" }}>
                <img src={logo} alt="logo" style={{ width: "3.5vw", height: "3.5vw", display: "inline-block" }} />
                <div style={{ margin: "1.5vw 0 0 .8vw", color: "#556b2f", display: "inline-block", fontFamily: "Aroma", fontSize: "1.4vw" }}><Span>E</Span>DASSERY <Span>M</Span>AJLIS <Span>G</Span>ROUP</div>
              </div>
              {isLoggedin === true && user != "general" && <Logout title="Logout" onMouseOver={openLogout} ><LogoutIcon style={{ fontSize: "3em" }} /></Logout>}
              {isLanguageOption && <Language title="Change Language" style={{ display: "inline-block", fontSize: language === "English" ? "1.1vw" : "1.5vw" }} onClick={changeLanguage}>{language}</Language>}
            </Heading>
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
                  {/* <Link to="/WhatWeDo/Projects">Projects</Link> */}
                </div>
              </Link>
              <Link to="/WhoLeadUs/Current" class="dropdown">
                <button class="dropbtn"
                  onClick={() => buttonClick("WhoLeadUs")} style={{
                    backgroundColor: isButtonActive === "WhoLeadUs" && " #556b2f",
                    color: isButtonActive === "WhoLeadUs" && "white"
                  }}>Who Lead Us</button>
                <div class="dropdown-content" onClick={() => buttonClick("WhoLeadUs")}>
                  <Link to="/WhoLeadUs/Current">Current</Link>
                  <Link to="/WhoLeadUs/OurHeros">Honorable Heros</Link>

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
                <div class="dropdown-content" onClick={() => buttonClick("EventGallery")}>
                  <Link to="/Admin/EventGallery/Milad">Milad</Link>
                  <Link to="/Admin/EventGallery/Eid">Eid</Link>
                  <Link to="/Admin/EventGallery/Iftar">Iftar</Link>
                  <Link to="/Admin/EventGallery/Sports">Sports</Link>
                  <Link to="/Admin/EventGallery/MeetandGreet">Meet and Greet</Link>
                  <Link to="/Admin/EventGallery/Other">Other</Link>
                </div>
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
              <Link to="/Admin/EventCalendar" class="dropdown">
                <button class="dropbtn"
                  onClick={() => buttonClick("EventCalendar")} style={{
                    backgroundColor: isButtonActive === "EventCalendar" && " #556b2f",
                    color: isButtonActive === "EventCalendar" && "white"
                  }}>Event Calendar</button>

              </Link>
              <Link to="/Admin/UploadForms" class="dropdown">
                <button class="dropbtn"
                  onClick={() => buttonClick("UploadForms")} style={{
                    backgroundColor: isButtonActive === "UploadForms" && " #556b2f",
                    color: isButtonActive === "UploadForms" && "white"
                  }}>More</button>
                <div class="dropdown-content" onClick={() => buttonClick("EventGallery")}>
                  <Link to="/Admin/UploadForms">Upload Forms</Link>
                  <Link to="/Admin/ContactMajlis">Contact Majlis</Link>
                </div>
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
                  {/* <Link to="/WhatWeDo/Projects">Projects</Link> */}
                </div>
              </Link>
              <Link to="/User/WhoLeadUs/Current" class="dropdown">
                <button class="dropbtn"
                  onClick={() => buttonClick("WhoLeadUs")} style={{
                    backgroundColor: isButtonActive === "WhoLeadUs" && " #556b2f",
                    color: isButtonActive === "WhoLeadUs" && "white"
                  }}>Who Lead Us</button>
                <div class="dropdown-content" onClick={() => buttonClick("WhoLeadUs")}>
                  <Link to="/WhoLeadUs/Current">Current</Link>
                  <Link to="/WhoLeadUs/OurHeros">Honorable Heros</Link>
                  {/* <Link to="/WhoLeadUs/Term1">Term-1</Link>
                <Link to="/WhoLeadUs/Term2">Term-2</Link>
                <Link to="/WhoLeadUs/Term3">Term-3</Link> */}
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
              <Link to="/User/UserOptions" class="dropdown">
                <button class="dropbtn"
                  onClick={() => buttonClick("UserOptions")} style={{
                    backgroundColor: isButtonActive === "UserOptions" && " #556b2f",
                    color: isButtonActive === "UserOptions" && "white"
                  }}>User Options</button>
                <div class="dropdown-content" onClick={() => buttonClick("UserOptions")}>
                  <Link to="/User/UserOptions/Subscriptions">Subscriptions</Link>
                  <Link to="/User/UserOptions/Loans">Loans</Link>
                  <Link to="/User/UserOptions/FamilyWelfare">Family Welfare</Link>
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
        </MediaQuery>
        <MediaQuery maxDeviceWidth={700}>
          {user === "none" || user === "general" && <MobileHeader menu={HomeMenu} />}
          {user === "admin" && <MobileHeader menu={AdminMenu} />}
          {user === "user" && <MobileHeader menu={UserMenu} />}

        </MediaQuery>
        <Body>
          <Switch>
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home" ><Home setState={buttonClick} setLanButton={setButton} language={language} setUser={setThisUser} /></Route>
            <Route path="/WhatweDo" ><WhatweDo setState={buttonClick} setLanButton={setButton} setuser={setThisUser} language={language} /></Route>
            <Route path="/WhoLeadUs/Current"><WhoLeadUs setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/WhoLeadUs/OurHeros"><OurHeros setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Redirect exact path="/EventGallery" to="/EventGallery/Milad" />
            <Route path="/EventGallery/Milad" ><EventGallery category="milad" setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/EventGallery/Eid" ><EventGallery category="eid" setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/EventGallery/Iftar" ><EventGallery category="iftar" setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/EventGallery/Sports" ><EventGallery category="sports" setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/EventGallery/MeetandGreet" ><EventGallery category="meetandgreet" setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/EventGallery/Other" ><EventGallery category="other" setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/JoinMajlis" ><JoinMajlis setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/MemberLogin" ><MemberLogin setState={buttonClick} log={isLoggedin} setLoggedIn={setLogIn} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/Downloads" ><Downloads setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Route path="/ContactMajlis" ><ContactMajlis setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>
            <Router path="/EventCalender"><EventCalendar setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Router>
            <Route path="/Logout" ><LogoutAction setState={buttonClick} setLanButton={setButton} setuser={setThisUser} /></Route>


            <Redirect exact from="/Admin" to="/Admin/Login" />
            <Route path="/Admin/Login" ><AdminLogin setUser={setThisUser} setLoggedIn={setLogIn} ></AdminLogin></Route>
            <Route path="/Admin/Members" ><Members setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/View/Member/:memberid" ><ViewProfile setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/View/Subscription/:memberid" ><ViewSubscription setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/AddMember" ><AddMember setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/Subscriptions" ><Subscription setState={buttonClick} setUser={setThisUser} /></Route>
            <Redirect exact from="/Admin/EventGallery" to="/Admin/EventGallery/Milad" />
            <Route path="/Admin/EventGallery/Milad" ><EventGalleryAdmin category="milad" setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventGallery/Eid" ><EventGalleryAdmin category="eid" setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventGallery/Iftar" ><EventGalleryAdmin category="iftar" setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventGallery/Sports" ><EventGalleryAdmin category="sports" setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventGallery/MeetandGreet" ><EventGalleryAdmin category="meetandgreet" setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventGallery/Other" ><EventGalleryAdmin category="other" setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/Loans" ><Loans setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/FamlilyWelfare" ><FamilyWelfare setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/UploadForms" ><UploadForms setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/ContactMajlis" ><ContactMajlisAdmin setState={buttonClick} setUser={setThisUser} /></Route>
            <Route path="/Admin/EventCalendar" ><AdminEventCalendar setState={buttonClick} setUser={setThisUser} /></Route>

            <Redirect exact from="/User" to="/User/Home" />
            <Route path="/User/Home" ><UserHome setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} languageButton={true} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/WhatweDo" ><UserWhatweDo setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} languageButton={true} language={language} setUser={setThisUser} /></Route>
            <Route path="/User/WhoLeadUs/Current"><UserWhoLeadUs setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} setUser={setThisUser} /></Route>
            <Route path="/User/WhoLeadUs/OurHeros"><OurHeros setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} setUser={setThisUser} /></Route>
            <Redirect exact path="/User/EventGallery" to="/User/EventGallery/Milad" />
            <Route path="/User/EventGallery/Milad" ><UserEventGallery category="milad" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/EventGallery/Eid" ><UserEventGallery category="eid" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/EventGallery/Iftar" ><UserEventGallery category="iftar" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/EventGallery/Sports" ><UserEventGallery category="sports" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/EventGallery/MeetandGreet" ><UserEventGallery category="meetandgreet" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/EventGallery/Other" ><UserEventGallery category="other" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/Downloads" ><UserDownloads setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} setUser={setThisUser} /></Route>
            <Route path="/User/ContactMajlis" ><UserContactMajlis setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} setUser={setThisUser} /></Route>
            <Route exact path="/User/UserOptions" ><UserOptions component="default" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/UserOptions/Subscriptions" ><UserOptions component="subscription" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/UserOptions/Loans" ><UserOptions component="loans" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/UserOptions/FamilyWelfare" ><UserOptions component="familywelfare" setState={buttonClick} isLogged={isLoggedin} setLanButton={setButton} setUser={setThisUser} /></Route>
            <Route path="/User/Profile" ><Profile setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} setUser={setThisUser} /></Route>
            <Router path="/User/EventCalender"><EventCalendar setState={buttonClick} setLanButton={setButton} isLogged={isLoggedin} setUser={setThisUser} /></Router>
            <Redirect from="/" to="/Home" />
          </Switch>
        </Body>
        <Footer />
      </Router>
    </div>

  )
}


function LogoutButton() {
  return (
    <div class="logout">
      <Logout title="Logout" className="logoutbtn" ><LogoutIcon style={{ fontSize: "3em" }} /></Logout>
      <div class="logout-content">
        <a >Hi {localStorage.getItem('Username')}</a>
        <a >Logout</a>
      </div>
    </div>
  )
}