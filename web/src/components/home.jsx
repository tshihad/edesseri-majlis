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
of activities."/> : <Topic headline="About Majlis" content ="അള്ളാഹു അവന്റെ ഓരോ സൃഷ്ടികൾക്കും പ്രത്യേകം പ്രത്യേകം അനുഗ്രഹങ്ങൾ നൽകിയിരിക്കുന്നു.
നമുക്ക് നൽകിയിരിക്കുന്ന ഈ അനുഗ്രഹങ്ങൾ ഓരോന്നും അള്ളാഹു ഇച്ഛിക്കുന്ന വിധം ഫലപ്രദമായി ഉപയോഗപ്പെടുത്തുവാൻ നാം ഓരോരുത്തരും സർവാത്മനാ പരിശ്രമിക്കേണ്ടതും ശ്രദ്ധിക്കേണ്ടതുമാണ്.
 ഇടശ്ശേരി മഹല്ലിനെ പ്രവർത്തി പരിധിയായി നിശ്ചയിച് കൊണ്ട് ഇസ്ലാമികാശങ്ങളിലധിഷ്‌ഠിതമായി പ്രവാസികക്കിടയിലും,
 നാട്ടിലുള്ള മഹല്ല് നിവാസികൾക്കും വേണ്ടി നിസ്വാർത്ഥമായ സമുദായ സേവനം നടത്തുന്നതിനായി ഒത്തുചേർന്ന പ്രവാസി കൂട്ടുകാരുടെ ഒരു കൂട്ടായ്മയാണ് മജ്ലിസ്."/>}
<CalenderEvents/>
{props.language === "മലയാളം" ? <Topic headline="The Rise Majlis" content="The full of goodness tree, which our ancestors planted in the early 70s, sprouted 
and blossomed once again in the land of Dubai the dream land of expats on August 3, 2012 (1433 Ramadan 15). Yes, that's, that's Majlis"/>:<Topic headline="The Rise Majlis" 
content="70 കളിൽ നമ്മുടെ പൂർവികർ നട്ടുവളർത്തിയ നന്മമരം, കൊല്ലവർഷം 2012 ആഗസ്ത് 3-ന്  (1433 റമളാൻ 15)-ന് പ്രവാസികളുടെ സ്വപ്നഭൂമിയായ ദുബായിൽ ഒരിക്കൽ കൂടി 
തളിർക്കുകയുണ്ടായി.... അതെ, അതാണ് മജ്ലിസ്."/>}
{props.language === "മലയാളം" ? <div  style={{padding:"0 10vw"}}><Topic headline="Vision" content="The Home Of Edassery Expats..."></Topic>
<Content>Edasseri Majlis is a space where friends and family of the
expats of Edasseri Mahallu come under one umbrella.</Content></div> : <div><Topic headline="Vision" content="ഇടശ്ശേരി പ്രവാസികൾക്ക് ഒത്തുചേരാൻ ഒരിടം.."/>
<Content>ഇടശ്ശേരി മഹല്ലിലെ പ്രവാസികളായ കൂട്ടുകാരേയും കുടുംബങ്ങളെയും ഒരു കുടക്കീഴിൽ നിർത്തുന്നതിനുള്ള ഒരിടമാണ് ഇടശ്ശേരി മജ്ലിസ്.</Content></div>}
{props.language === "മലയാളം" ? <div  style={{padding:"0 10vw"}} ><Topic headline="Mission" content="The Hope Of Edassery Expats..."/>
<Content>The Edasseri Majlis is an endeavor to Ensuring self-reliance by keeping the member's dream and hopes alive
  and make the return of the members in peace and comfort
</Content></div>:<div><Topic headline="Mission" content="ഇടശ്ശേരി മജ്ലിസ് പ്രവാസികളുടെ പ്രതീക്ഷ..."/>
<Content>ഇടശ്ശേരി മജ്ലിസ് അംഗങ്ങളുടെ സ്വപ്നങ്ങളെയും പ്രതീക്ഷകളെയും ജീവനുറ്റതാക്കി സ്വാശ്രയത്വം ഉറപ്പ് വരുത്തുകയും അംഗങ്ങളുടെ തിരിച് 
പോക്ക് ആശ്വാസത്തിലും സമാധാനത്തിലും ആക്കുന്നതിനുള്ള പരിശ്രമമാണ് ഇടശ്ശേരി മജ്ലിസ്.</Content></div>}
{props.language === "മലയാളം" ? <Topic headline="Majlis Priority" content="The slogan that the Majlis upholds is the self-reliance of all
members of the Majlis and the self-reliance of the Edasseri
Mahallu which the Majlis represents.
The Majlis firmly believe that we can build a better life only
by being self-reliant.
The long-term objective of Majlis is to initiate and carry out
financial and / or non-financial projects to achieve the said
self-reliant society.
Above all, Implementation of plans for successful
rehabilitation of expat members."/>:<Topic headline="Majlis Priority" content="മജ്‌ലിസിന്റെ എല്ലാ അംഗങ്ങളുടെയും സ്വാശ്രയത്വവും, മജ്ലിസ് പ്രതിനിധാനം ചെയ്യുന്ന ഇടശ്ശേരി മഹല്ലിന്റെ സ്വാശ്രയത്വവും ആണ് മജ്ലിസ് ഉയർത്തിപ്പിടിക്കുന്ന മുദ്രാവാക്യം.
സ്വശയത്വം കൈവരിക്കുന്നതിലൂടെ മാത്രമേ ഒരു ക്ഷേമ ജീവിതം നമുക്ക് വാർത്തെടുക്കാനാകൂ എന്ന് മജ്ലിസ് ഉറച്ച വിശ്വസിക്കുന്നു.
ഈ സ്വാശ്രയ സമൂഹത്തെ വളർത്തിയെടുക്കുന്നതിനായി സാമ്പത്തിക അല്ലെങ്കിൽ സാമ്പത്തികേതര പദ്ധതികൾ ആരംഭിക്കുകയും നടപ്പിലാക്കുകയും ചെയ്യുക എന്നതാണ് മജ്‌ലിസിന്റെ ദീർഘകാല ലക്‌ഷ്യം.
എല്ലാറ്റിനുപരിയായി, പ്രവാസി അംഗങ്ങളുടെ വിജയകരമായി പുനരധിവാസത്തിനുള്ള പദ്ധതികൾ നടപ്പിലാക്കുക."/>}
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