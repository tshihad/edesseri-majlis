import React from 'react';
import { Link, } from 'react-router-dom'


export default function NavBar(props) {
  const [isButtonActive, setActive] = React.useState("Home")

  function buttonClick(value) {
    setActive(value)
  }
  return (
    <div class="navbar">
      <Link to="/Home" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("Home")} style={{
            borderBottom: isButtonActive === "Home" && ".2vw solid white",
            backgroundColor: isButtonActive === "Home" && " #01223f"
          }}>Home</button>
      </Link>
      <Link to="/WhatWeDo" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("WhatWeDo")} style={{
            borderBottom: isButtonActive === "WhatWeDo" && ".2vw solid white",
            backgroundColor: isButtonActive === "WhatWeDo" && " #01223f"
          }}>What We Do</button>
        <div class="dropdown-content" onClick={() => buttonClick("WhatWeDo")}>
          <Link to="">Family Welfare</Link>
          <Link to="">Projects</Link>
        </div>
      </Link>
      <Link to="/WhoLeadUs" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("WhoLeadUs")} style={{
            borderBottom: isButtonActive === "WhoLeadUs" && ".2vw solid white",
            backgroundColor: isButtonActive === "WhoLeadUs" && " #01223f"
          }}>Who Lead Us</button>
        <div class="dropdown-content" onClick={() => buttonClick("WhoLeadUs")}>
          <Link to="#">Current</Link>
          <Link to="#">Term-1</Link>
          <Link to="#">Term-2</Link>
          <Link to="#">Term-3</Link>
        </div>
      </Link>
      <Link to="/EventGallery" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("EventGallery")} style={{
            borderBottom: isButtonActive === "EventGallery" && ".2vw solid white",
            backgroundColor: isButtonActive === "EventGallery" && " #01223f"
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
            backgroundColor: isButtonActive === "JoinMajlis" && " #01223f"
          }}>Join Majlis</button>
      </Link>
      <Link to="/MemberLogin" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("MemberLogin")} style={{
            borderBottom: isButtonActive === "MemberLogin" && ".2vw solid white",
            backgroundColor: isButtonActive === "MemberLogin" && " #01223f"
          }}>Member Login</button>
      </Link>
      <Link to="/Downloads" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("Downloads")} style={{
            borderBottom: isButtonActive === "Downloads" && ".2vw solid white",
            backgroundColor: isButtonActive === "Downloads" && " #01223f"
          }}>Downloads</button>
      </Link>
      <Link to="/ContactMajlis" class="dropdown">
        <button class="dropbtn"
          onClick={() => buttonClick("ContactMajlis")} style={{
            borderBottom: isButtonActive === "ContactMajlis" && ".2vw solid white",
            backgroundColor: isButtonActive === "ContactMajlis" && " #01223f"
          }}>Contact Majlis</button>
      </Link>

    </div>
  )
}