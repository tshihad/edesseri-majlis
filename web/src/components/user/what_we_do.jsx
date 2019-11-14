import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import Loading from '../sub_components/loading'




const WhatWeDoDiv = styled.div`
margin: 0vh 10vw;
`;

const WelfareProgramsContents = {
  english: [
    "Implement financial programs to help improve the living" +
    " conditions of the poverty stricken Mahallu residents.",
    "Extent the assistance to financially backward Mahallu" +
    " residents living in poverty.",
    "Provide necessary assistance to the Mahallu and the" +
    " inhabitants of Mahallu to implement the religious and" +
    " secular education system that will support the religious and" +
    " cultural growth and development of the society."
  ],
  malayalam: [
    "ദാരിദ്ര്യം അനുഭവിക്കുന്ന മഹല്ലു നിവാസികളുടെ ജീവിത നിലവാരം  ഉയർത്തുന്നതിനു സഹായകമായ സാമ്പത്തിക പദ്ധതികൾ നടപ്പിലാക്കുക..",
    "സാമ്പത്തിക പ്രയാസം നേരിടുന്ന മഹല്ല് നിവാസികൾക്ക് സാമ്പത്തിക സഹായം നൽകുക.",
    "മഹല്ലിന്‍റെയും മഹല്ല് നിവാസികളുടേയും, മത സാംസ്കാരിക വളർച്ചക്കും പുരോഗമനത്തിനും സഹായകമായ, മത പരവും ഭൗതികവുമായ വിദ്യാഭ്യാസ സംവിധാനം നടപ്പിലാക്കുന്നതിന് ആവശ്യമായ സഹായം നൽകുക."

  ]
}

const ServiceSocietyContents = {
  english: [
    "Provide business advisory advice to expatriate Mahallu" +
    " residents who wish to have their own business ventures.",
    "Help the Mahalluresidents to find employment who are" +
    " newcomers to the expat and are looking for a job those who" +
    " lost.",
    "Help resolve problems in the workplaces and families of the" +
    " residents of Mahallu.",
    "Collaborate with other organizations, arts and sports clubs in" +
    " Mahalluin a positive and creative manner."
  ],
  malayalam: [
    "സ്വന്തമായി ബിസിനസ് സംരംഭങ്ങൾ ആഗ്രഹിക്കുന്ന പ്രവാസികളായ മഹല്ല് നിവാസികൾക്ക് ബിസിനസ്സ് സംബന്ധമായ ഉപദേശ നിർദ്ധേശങ്ങൾ നൽകുക.",
    "പ്രവാസ ലോകത്തേക്ക് കടന്നു വരുന്ന  നവാഗതരേയും,  തൊഴിൽ നഷ്ടപ്പെട്ട് തൊഴിൽ അന്വേഷിക്കുന്നവരുമായ  മഹല്ല്  നിവാസികളെ തൊഴിൽ കണ്ടെത്താൻ സഹായിക്കുക.",
    "മഹല്ല്  നിവാസികളായ പ്രവാസികളുടെ തൊഴിൽ സ്ഥലങ്ങളിലും, കുടുംബങ്ങളിലും ഉണ്ടാകുന്ന പ്രശ്നങ്ങൾ പരിഹരിക്കാൻ സഹായിക്കുക.",
    "മഹല്ലിലെ ഇതര സംഘടനകളോടും, കലാ - കായിക ക്ലബ്ബുകളോടും ഗുണകാംക്ഷയോടെ, സർഗാത്മകമായ പ്രവർത്തനങ്ങളിലൂടെ ഒത്തൊരുമിച്ചു പ്രവർത്തിക്കുക."
  ]
}

const HelpMembersContents = {
  english: [
    "Provide financial assistance [loan] to members who are" +
    " struggling financially.",
    "Implement financial programs to guide the expatriate" +
    " members improve their lives upon retirement.",
    "Help repatriate the bodies of members whose lives are on" +
    " the path to expatriate."
  ],
  malayalam: [
    "സാമ്പത്തികമായി പ്രതിസന്ധി നേരിടുന്ന അംഗങ്ങൾക്ക് സാമ്പത്തിക സഹായം [വായ്പ] നൽകുക.",
    "അംഗങ്ങളുടെ  പ്രവാസാനന്തര ജീവിതം ഭാസുരമാക്കുന്ന സാമ്പത്തിക പദ്ധതികൾ നടപ്പിലാക്കുക..",
    "പ്രവാസത്തിൻ വഴിയിൽ ജീവൻ പൊലിഞ്ഞു പോകുന്ന അംഗങ്ങളുടെ മയ്യിത്ത് നാട്ടിലെത്തിക്കാൻ സഹായിക്കുക."
  ]
}

const MajlisStandsForContents = {
  english: [
    "Implement financial programs to help improve the living" +
    " conditions of the poverty stricken Mahallu residents.",
    "Extent the assistance to financially backward Mahallu" +
    " residents living in poverty.",
    "Provide necessary assistance to the Mahallu and the" +
    " inhabitants of Mahallu to implement the religious and" +
    " secular education system that will support the religious and" +
    " cultural growth and development of the society."
  ],
  malayalam: [
    "മഹല്ലുകൾ നമ്മുടെ ആശ്രയമാണ്.",
    "ഒരു വിശ്വാസിയുടെ ജനനം മുതൽ ഖബർ ജീവിതം വരെ നമ്മൾ മഹല്ലുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു.",
    "നമ്മുടെ മുൻഗാമികൾ പല വിധ വൈതരണികളും തരണം ചെയ്ത് പരിപാലിച്ച് തലമുറകളായി നമ്മുടെ കൈകളിൽ ഭദ്രമായി ഏല്പിച്ചു തന്ന നമ്മുടെ മഹല്ല് സംവിധാനത്തേയും, പ്രസ്ഥാനങ്ങളേയും, വിശ്വാസാ-ചാരാ-നുഷ്ഠാനങ്ങളേയും സംരക്ഷിക്കേണ്ടത് നമ്മുടെ ഓരോരുത്തരുടേയും കർത്തവ്യമാണ്.",
    "സർവ്വോപരി നമ്മുടെ മഹല്ലിന്‍റെ അന്തസ്സ് ഉയർത്തിപ്പിടിക്കുവാൻ നമ്മൾ ഓരോരുത്തരും മുന്നോട്ട് വരേണ്ടതുണ്ട്."
  ]
}

export default function WhatWeDo(props) {
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
    props.setState("WhatWeDo")
  }, [props])
  return (
    <div>
      {canLoad === true ?
        <WhatWeDoDiv>
          <WhatWeDoCard headline="Welfare Programs" contents={WelfareProgramsContents} language={props.language === "മലയാളം" ? "malayalam" : "english"} colorcode="1" />
          <WhatWeDoCard headline="Services To The Society" contents={ServiceSocietyContents} language={props.language === "മലയാളം" ? "malayalam" : "english"} colorcode="2" />
          <WhatWeDoCard headline="Help Own Members" contents={HelpMembersContents} language={props.language === "മലയാളം" ? "malayalam" : "english"} colorcode="1" />
          <WhatWeDoCard headline="Majlis Stands For" contents={MajlisStandsForContents} language={props.language === "മലയാളം" ? "malayalam" : "english"} colorcode="2" />
        </WhatWeDoDiv>
        : <Loading />}
    </div>
  )
}

const Card = styled.div`
width: 100%;
display: block;
min-height: 30vh;
padding: 5% 0%;
`;
const Div = styled.div`
width: 30%;
display:inline-block;
text-align: right;
vertical-align: top;
`;
const Headline = styled.h3`
color:#1d4219;
margin-top: 5%;
font-size: 1.5em;
font-family: 'Comfortaa', cursive;`;
const Content = styled.div`
width: 60%;
padding-left: 5%;
font-size: 1.2em;
display:inline-block;
`;
export function WhatWeDoCard(props) {
  return (
    <Card style={{ backgroundColor: props.colorcode === "1" ? "#e9e9dfbe" : "#e5eee5", borderBottom: props.colorcode === "1" ? "1.5px #c7ab21 solid" : "1.5px #7ead2b solid" }}>
      <Div><Headline>{props.headline}</Headline></Div>
      <Content>
        {props.language === "english" ?
          props.contents.malayalam.map(content => (
            <p>{content}</p>
          )) :
          props.contents.english.map(content => (
            <p>{content}</p>
          ))}

      </Content>
    </Card>
  )
}