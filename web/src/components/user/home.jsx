import React,{useEffect} from 'react';
import styled from 'styled-components';
import Slider from '../sub_components/image_slider';
import EventNoteIcon from '@material-ui/icons/EventNote';
import visionBullet from '../../images/icons/vision.svg'
import MissionBullet from '../../images/icons/mission.svg'
import RiseOfMajlisBullet from '../../images/icons/riseofmajlis.svg'
import MajlisPriorityBullet from '../../images/icons/majlispriority.svg'
import axios from 'axios'
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../constants';
import Loading from '../sub_components/loading'



 const RiseOfMajlisContents = {
   english:[
    "The tree of goodness, which our ancestors planted in the early 70s, sprouted and blossomed once again in the land of Dubai the dream land of expats on August 3, 2012 (1433 Ramadan 15).  That is Edassery Majlis.",
   ],
   malayalam:[
    "70 കളിൽ നമ്മുടെ പൂർവ്വികർ നട്ടുവളർത്തിയ നന്മമരം, കൊല്ലവർഷം 2012 ആഗസ്ത് 3-ന് (1433 റമളാൻ 15)-ന്"+
    "പ്രവാസികളുടെ സ്വപ്ന ഭൂമിയായ ദുബായിൽ ഒരിക്കൽ കൂടി  തളിർക്കുകയുണ്ടായി….  അതാണ് ഇടശ്ശേരി മജ്‌ലിസ്."
  ]
 }

 const MajlisPriorityContents = {
  english:[
      "The slogan that the Majlis upholds is the self-reliance of all members of the Majlis and the self-reliance of the Edassery Mahallu that the Majlis represents."+

      "The Majlis firmly believe that we can build a better life only by being self-reliant."+
      
      "The long-term objective of Majlis is to initiate and carry out financial and / or non-financial projects to achieve the said self-reliant society."+
      
      "Above all, Implementation of plans for successful rehabilitation of expat members."

  ],
  malayalam:[
  "മജ്‌ലിസിന്‍റെ എല്ലാ അംഗങ്ങളുടെയും സ്വാശ്രയത്വവും, മജ്‌ലിസ് പ്രതിനിധാനം ചെയ്യുന്ന ഇടശ്ശേരി മഹല്ലിന്‍റെ സ്വാശ്രയത്വവും ആണ് മജ്‌ലിസ് ഉയർത്തിപ്പിടിക്കുന്ന മുദ്രാവാക്യം."+

  "സ്വാശ്രയത്വം കൈവരിക്കുന്നതിലൂടെ മാത്രമേ ഒരു ക്ഷേമ ജീവിതം നമുക്ക് വാർത്തെടുക്കാനാകൂ എന്ന് മജ്‌ലിസ് ഉറച്ച് വിശ്വസിക്കുന്നു."+
  
  "ഈ സ്വാശ്രയ സമൂഹത്തെ വളർത്തിയെടുക്കുന്നതിനായി സാമ്പത്തിക അല്ലെങ്കിൽ സാമ്പത്തികേതര പദ്ധതികൾ ആരംഭിക്കുകയും നടപ്പിലാക്കുകയും ചെയ്യുക എന്നതാണ് മജ്‌ലിസിന്‍റെ ദീർഘകാല ലക്ഷ്യം."+
  
  "എല്ലാറ്റിനുമുപരിയായി, പ്രവാസി അംഗങ്ങളുടെ വിജയകരമായ പുനരധിവാസത്തിനുള്ള പദ്ധതികൾ നടപ്പിലാക്കുക." 
  ]
}

const VisionContents = {
  english:[
"A place for Edassery expats to congregate.",
"Edassery Majlis is a space where friends and family of the expats of Edassery Mahallu come under one umbrella."
 ],
  malayalam:[
"ഇടശ്ശേരി പ്രവാസികൾക്ക് ഒത്തുചേരാനൊരിടം ..",
"ഇടശ്ശേരി മഹല്ലിലെ പ്രവാസികളായ കൂട്ടുകാരേയും കുടുംബങ്ങളേയും ഒരു കുടക്കീഴിൽ നിർത്തുന്നതിനുള്ള ഒരിടമാണ് ഇടശ്ശേരി മജ്‌ലിസ് –"
 ]
}

const MIsionContents = {
  english:[
"The Hope Of Edassery Expats.",
"The Edassery Majlis is an endeavor to Ensuring self-reliance by keeping the members' dreams and hopes alive and make the return of the members in peace and comfort." 
],
  malayalam:[
"ഇടശ്ശേരി പ്രവാസികളുടെ പ്രതീക്ഷ…",
"ഇടശ്ശേരി മജ്‌ലിസ് അംഗങ്ങളുടെ സ്വപ്നങ്ങളേയും  പ്രതീക്ഷകളേയും ജീവസ്സുറ്റതാക്കി സ്വാശ്രയത്വം ഉറപ്പ് വരുത്തുകയും അംഗങ്ങളുടെ  തിരിച്ചു പോക്ക് ആശ്വാസത്തിലും സമാധാനത്തിലും ആക്കുന്നതിനുള്ള പരിശ്രമമാണ് ഇടശ്ശേരി മജ്‌ലിസ്."
]
}
export default function Home(props){
  const [canLoad, setLoading] = React.useState(false)
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
    props.setLanButton(true)
    props.setUser("user")
  props.setState("Home")
  },[props])
return(
  <div>
      {canLoad === true ?
  <div>
    <Slider/>
    <div style={{padding:"0 0", display: "block"}}>
    {props.language === "മലയാളം" ? <Topic headline="About Majlis" content ="Allah has bestowed special blessings on each of His creatures.  Each of us should strive to do our best to use all these blessings given to us in the way Allah wants. 

The Majlis is a group of expatriate friends who have come together to perform selfless community service for the expatriates and the inhabitants of the Edassery Mahallu based on the ideals of Islam, with the Edassery Mahallu as the boundary of activities.
"/> : <Topic headline="About Majlis" content ="അള്ളാഹു അവന്‍റെ ഓരോ  സൃഷ്ടികൾക്കും  പ്രത്യേകം പ്രത്യേകം അനുഗ്രഹങ്ങൾ നൽകിയിരിക്കുന്നു.
നമുക്ക് നൽകിയിരിക്കുന്ന ഈ അനുഗ്രങ്ങൾ ഓരോന്നും, അള്ളാഹു ഇഛിക്കുന്ന വിധം ഫലപ്രദമായി ഉപയോഗപ്പെടുത്തുവാൻ നാം ഓരോരുത്തരും സർവാത്മനാ പരിശ്രമിക്കേണ്ടതും ശ്രദ്ധിക്കേണ്ടതുമാണ്.

ഇടശ്ശേരി മഹല്ലിനെ പ്രവൃത്തി പരിധിയായി നിശ്ചയിച്ച് കൊണ്ട് ഇസ്‌ലാമിക ആശയാദർശങ്ങളിൽ അധിഷ്ഠിതമായി പ്രവാസികൾക്കിടയിലും, നാട്ടിലുള്ള മഹല്ല് നിവാസികൾക്കും വേണ്ടി  നിസ്വാർത്ഥമായ സമുദായ സേവനം നടത്തുന്നതിനായി ഒത്തുചേർന്ന പ്രവാസി കൂട്ടുകാരുടെ ഒരു കൂട്ടായ്മയാണ് മജ്‌ലിസ്."/>}
<CalenderEvents/>
<MainCard>
<SubCard headline="Vision" contents={VisionContents} 
language= {props.language === "മലയാളം" ?"malayalam" :"english"} bullet={visionBullet}/> 

<SubCard headline="Mission" contents={MIsionContents} 
language= {props.language === "മലയാളം" ?"malayalam" :"english"} bullet={MissionBullet}/> 

<SubCard headline="The Rise Majlis" contents={RiseOfMajlisContents} 
language= {props.language === "മലയാളം" ?"malayalam" :"english"} bullet={RiseOfMajlisBullet}/> 

<SubCard headline="Majlis Priorirty" contents={MajlisPriorityContents} 
language= {props.language === "മലയാളം" ?"malayalam" :"english"} bullet={MajlisPriorityBullet}/> 
</MainCard>
  </div>
  </div>
  : <Loading />}
  </div>
)
}

const Card = styled.div`
width:100%;
padding: 5vh 15vw;
text-align: justify;
@media (max-width:700px){
  padding: 0vh 5vw;
  text-align: center;
}
`;
const Headline = styled.h3`
color:#1d4219;
font-size: 2em;
text-align: center
font-family: 'Comfortaa', cursive;
@media (max-width:700px){
  font-size: 1.5em;
}
`;
const Content = styled.p`
line-height: 1.4em;
font-size: 1.3em;
font-family: 'Comfortaa', cursive;
color: #000f05;
@media (max-width:700px){
  font-size: 1.2em;
}
`;
export function Topic(props){
  return(
    <Card>
      <Headline>{props.headline}</Headline>
      <Content>{props.content}</Content>
    </Card>
  )
}

const Paper = styled.div`
margin: 0 10vw;
padding: 0 1vw;
color:#556b2f;
background-color: #e5eee5;
border-top: 1.5px #7ead2b solid;
border-bottom: 1.5px #7ead2b solid;
@media(max-width:700px){
  margin: 0 0vw;
}
`;
const Heading = styled.div`
width: 100%;
text-align: center;
font-weight: bold;
font-size: 3vh;
padding: 2vw 2vw 1vh 2vw;
background-color: #e5eee5;
`;


const NoData = styled.div`
padding: 5vh 0;
text-align: center;
color:#304d00;
font-weight: 500;`;

function CalenderEvents(){
  const [events,setEvents] = React.useState([])
  
  useEffect(()=>{
    axios.get(API_BASE_URL+"/majlis/upcoming-events")
      .then(({ data }) => {
        setEvents(data.result)
      }).catch((err) =>
        console.log(err))
  },[])
  return(
    <Paper>
      <Link to="/User/EventCalender" title="Complete Event List" style={{color:"#556b2f" ,textDecoration:"none"}}><Heading>Upcoming Events</Heading></Link>
      {events.length === 0 ? <NoData>--No Upcoming Events--</NoData> :
      <Events events={events}/>}
    </Paper>
  )
}

const List = styled.div`
display: block;
padding:2vw 2vw;
`;

const Event = styled.div`
width: 48%;
margin: .5% 1%;
font-weight: 400;
font-size: 1.2vw;
vertical-align: top
display: inline-block;
@media (max-width:700px){
  width: 98%;
}
`;

const Date = styled.span`
vertical-align: top;
font-weight: 600;
display: inline-block;
color: #556b2f;
`;
const Item = styled.div`
vertical-align: top;
font-weight: 300;
display: inline-block;
color: #556b2f;
`;


function Events(props){

  const toStdDate = (date)=>{
    var year = date.slice(0,4)
    var month = date.slice(5,7)
    var day = date.slice(8,10)
    return day+"-"+month+"-"+year
  }
  return(
    <div>
    {props.isLogged === true ?
    <List>
    {props.events.map(event => (
      <Event>
        <EventNoteIcon style={{fontSize:"6vh"}}/>
        <Item>
          <Date>{toStdDate(event.EventDate)}</Date>
          <div>{event.Title.slice(0,50)}</div>
          </Item>
      </Event>
    ))}
    </List>
    :<Redirect to='/MemberLogin'/>}</div>
  )
}

const MainCard = styled.div`
display: inline-block;
margin: 0 10vw;
padding: 5vh 5vw;
background-color:#e9e9dfbe ;
@media(max-width:700px){
  margin: 0 0vw;
}
`;

const Pic = styled.img`
width: 10%;
height: 10%;
padding: 1.5%
display: inline-block;
vertical-align: top;
@media (max-width:700px){
  width: 15%;
  height: 15%;
}
`;
const MiniCard = styled.div`
width: 50%;
font-weight: 400;
font-size: 1.2vw;
vertical-align: top;
display: inline-block;
@media (max-width:700px){
  width: 98%;
}
`;
const Main = styled.div`
font-size: 1vw;
width:90%;
padding-top: 3%
display: inline-block;
@media (max-width:700px){
  width: 85%;
}
`;

const Head = styled.div`
font-size: 1.4vw;
font-weight: 600;
color: #495f24;
@media (max-width:700px){
  font-size:5em;
}
`;

const P = styled.p`
font-size: 1.25em;
line-height: 1.3em;
font-family: 'Roboto', sans-serif;
font-color: #02802c;
font-weight: 400;
@media (max-width:700px){
  font-size: 4em;
}
`;

export function SubCard(props){
  return(
    <MiniCard>
    <Pic src={props.bullet} alt="bullet" style={{ padding: props.headline === "Majlis Priorirty" ? "0": "1.5%"}}/> 
     <Main>
        <Head>{props.headline}</Head>
        {props.language === "malayalam" ?
        props.contents.english.map(content => (
      <P>{content}</P>
    )):
    props.contents.malayalam.map(content => (
      <P>{content}</P>
    ))}
      </Main>
    </MiniCard>
  )
}