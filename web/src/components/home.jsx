import React,{useEffect} from 'react';
import styled from 'styled-components';
import Slider from './sub_components/image_slider';



export default function Home(props){
  useEffect(()=>{
props.setState("Home")
  },[props])
return(
  <div>
    <Slider/>
    <div style={{padding:"0 10vw"}}>
    {props.language === "മലയാളം" ? <Topic headline="About Majlis" content ="Allah has bestowed special blessings on each of His creatures.
Each of us should strive to do our best to use all these
blessings given to us in the way Allah wants.
The Majlis is a group of expatriate friends who have come
together to perform selfless community service for the
expatriates and the inhabitants of the Edassery Mahallu on
the ideals of Islam, with the Edasseri Mahallu as the boundary
of activities."/> : <Topic headline="About Majlis" content ="അള്ളാഹു അവന്റെ ഓര ാ സൃഷ്ടികൾക്ുും പ്രരയേകും
പ്രരയേകും അനുപ്രഹങ്ങൾ നൽകിയി ിക്ുന്നു.
നമുക്് നൽകിയി ിക്ുന്ന ഈ അനുപ്രങ്ങൾ ഓര ാന്നുും
അല്ലാഹു ഇഛിക്ുന്ന വിധും ഫല്പ്രദമായി
ഉരരയാരറെടുത്തുവാൻ നാും ഓര ാ ുത്ത ുും
സർവാത്മനാ ര ിപ്രമിരക്ണ്ടയുും പ്രദ്ധിരക്ണ്ടയുമാണ്.
ഇടരേ ി മഹല്ലിറന പ്രവർത്തി ര ിധിയായി നിശ്ചയിച്ച്
റകാണ്ട് ഇസ്‌ല്ാമികാരയാദർരങ്ങളില്ധിഷ്ഠിയമായി
പ്രവാസികൾക്ിടയില്ുും, നാട്ടില്ുള്ള മഹല്ല്
നിവാസികൾക്ുും രവണ്ടി നിസവാർത്ഥമായ സമുദായ
രസവനും നടത്തുന്നയിനായി ഒത്തുരേർന്ന പ്രവാസി
കൂട്ടുകാ ുറട ഒ ു കൂട്ടായ്മയാണ് മജ്‌ല്ിസ്‌."/>}
<CalenderEvents/>
{props.language === "മലയാളം" ? <Topic headline="The Rise Majlis" content="The full of goodness tree, which our ancestors planted in the early 70s, sprouted 
and blossomed once again in the land of Dubai the dream land of expats on August 3, 2012 (1433 Ramadan 15). Yes, that's, that's Majlis"/>:<Topic headline="The Rise Majlis" content="70 കളിൽ നമ്മുറട രൂർവ്വികർ നട്ടുവളർത്തിയ നന്മമ ും,
റകാല്ലവർഷും 2012 ആരസ്‌് 3-ന് (1433 െമളാൻ 15)-ന്
പ്രവാസികളുറട സവപ്ന ഭൂമിയായ ദുബായിൽ ഒ ിക്ൽ
കൂടി യളിർക്ുകയുണ്ടായി.... അറയ, അയാണ് മജ്‌ല്ിസ്‌."/>}
{props.language === "മലയാളം" ? <div  style={{padding:"0 10vw"}}><Topic headline="Vision" content="The Home Of Edassery Expats..."></Topic>
<Content>Edasseri Majlis is a space where friends and family of the
expats of Edasseri Mahallu come under one umbrella.</Content></div> : <div><Topic headline="Vision" content="ഇടരേ ി പ്രവാസികൾക്് ഒത്തുരേ ാറനാ ിടും.."/>
<Content>ഇടരേ ി മഹല്ലിറല് പ്രവാസികളായ കൂട്ടുകാര യുും
കുടുുംബങ്ങരളയുും ഒ ു കുടക്ീഴിൽ നിർത്തുന്നയിനുള്ള
ഒ ിടമാണ് ഇടരേ ി മജ്‌ല്ിസ്‌ –</Content></div>}
{props.language === "മലയാളം" ? <div  style={{padding:"0 10vw"}} ><Topic headline="Mission" content="The Hope Of Edassery Expats..."/>
<Content>The Edasseri Majlis is an endeavor to Ensuring self-reliance by keeping the member's dream and hopes alive
  and make the return of the members in peace and comfort
</Content></div>:<div><Topic headline="Mission" content="ഇടരേ ി പ്രവാസികളുറട പ്രയീക്ഷ..."/>
<Content>ഇടരേ ി മജ്‌ല്ിസ്‌ അുംരങ്ങളുറട സവപ്നങ്ങരളയുും
പ്രയീക്ഷകരളയുും ജീവസ്സുറ്റയാക്ി സവാപ്രയയവും ഉെെ്
വ ുത്തുകയുും അുംരങ്ങളുറട യി ിച്ചു രരാക്്
ആരവാസത്തില്ുും സമാധാനത്തില്ുും ആക്ുന്നയിനുള്ള
ര ിപ്രമമാണ് ഇടരേ ി മജ്‌ല്ിസ്‌.</Content></div>}
{props.language === "മലയാളം" ? <Topic headline="Majlis Priority" content="The slogan that the Majlis upholds is the self-reliance of all
members of the Majlis and the self-reliance of the Edasseri
Mahallu which the Majlis represents.
The Majlis firmly believe that we can build a better life only
by being self-reliant.
The long-term objective of Majlis is to initiate and carry out
financial and / or non-financial projects to achieve the said
self-reliant society.
Above all, Implementation of plans for successful
rehabilitation of expat members."/>:<Topic headline="Majlis Priority" content="മജ്‌ല്ിസിന്റെ എല്ലാ അുംരങ്ങളുറടയുും സവാപ്രയയവവുും,
മജ്‌ല്ിസ്‌ പ്രയിനിധാനും റേയ്യുന്ന ഇടരേ ി മഹല്ലിന്റെ
സവാപ്രയയവവുും ആണ് മജ്‌ല്ിസ്‌ ഉയർത്തിെിടിക്ുന്ന
മുപ്ദാവാകേും.
സവാപ്രയയവും കകവ ിക്ുന്നയില്ൂറട മാപ്യരമ ഒ ു രക്ഷമ
ജീവിയും നമുക്് വാർറത്തടുക്ാനാകൂ എന്ന് മജ്‌ല്ിസ്‌
ഉെച്ച് വിരവസിക്ുന്നു.
ഈ സവാപ്രയ സമൂഹറത്ത വളർത്തിറയടുക്ുന്നയിനായി
സാമ്പത്തിക അറല്ലങ്കിൽ സാമ്പത്തിരകയ രദ്ധയികൾ
ആ ുംഭിക്ുകയുും നടെില്ാക്ുകയുും റേയ്യുക എന്നയാണ്
മജ്‌ല്ിസിന്റെ ദീർഘകാല് ല്ക്ഷേും.
എല്ലാറ്റിനുമുര ിയായി, പ്രവാസി അുംരങ്ങളുറട
വിജയക മായ രുന ധിവാസത്തിനുള്ള രദ്ധയികൾ
നടെില്ാക്ുക."/>}
  </div>
  </div>
)
}

const Card = styled.div`
width:100%;
text-align:center;
font-style:'arial';
font-family:Open Sans,sans-serif;
`;
const Headline = styled.h2`
color:#088d35;
font-size: 4vh`;
const Content = styled.p`
line-height: 1.4em;
font-size: 1.2vw;
font-family: Open Sans,sans-serif;
color: #000f05;
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
width: 100%;
margin: 0;
background-color: #018d37;
`;
const Heading = styled.div`
color: white;
width: 100%;
font-size: 2.9vh;
padding: 1vh 2vw;
background-color: #00772e;
font-weight: 500;
`;

const Button = styled.button`
border: 0;
outline: 0;
width: 10vw;
float :right
color: white;
padding: 1.5vh 0;
background-color: #033d19;

`;
function CalenderEvents(){
  const events = [
    {
      index:1,
      date: "12-02-2019",
      title:"majlis website launching",
  },
  {
    index:2,
    date: "14-02-2019",
    title:"majlis ramsan celebration with the whole members",
  },
  {
  index:3,
  date: "16-02-2019",
  title:"majlis website launching in dubai",
  },]
  
  return(
    <Paper>
      <Heading>Upcoming Events</Heading>
      <Events events={events}/>      
    </Paper>
  )
}

const List = styled.div`
display: block;
padding:1vw 2vw;
`;

const Event = styled.div`
width: 50%;
font-weight: 400;
font-size: 1.2vw;
vertical-align: top
line-height: 1.4em;
display: inline-block;
color: white;
`;

const Date = styled.span`
vertical-align: top;
font-weight: 500;
display: inline-block;
color: white;
`;
const Item = styled.div`
vertical-align: top;
font-weight: 300;
display: inline-block;
color: white;
`;

const Dot = styled.span`
`;
function Events(props){
  return(
    <List>
    {props.events.map(event => (
      <Event><Item><Dot >&#8226; </Dot><Date>{event.date}</Date> - {event.title}</Item></Event>
    ))}
    </List>

    
  )
}