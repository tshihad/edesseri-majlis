import React, { useEffect } from 'react'
import styled from 'styled-components'

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
    "ദാ ിപ്ദേും അനുഭവിക്ുന്ന മഹല്ലു നിവാസികളുറട ജീവിയ നില്വാ ും ഉയർത്തുന്നയിനു സഹായകമായ സാമ്പത്തിക രദ്ധയികൾ നടെില്ാക്ുക..",
    "സാമ്പത്തിക പ്രയാസും രന ിടുന്ന മഹല്ല് നിവാസികൾക്് സാമ്പത്തിക സഹായും നൽകുക.",
    "മഹല്ലിന്റെയുും മഹല്ല് നിവാസികളുരടയുും, മയസാുംസ്‌കാ ിക വളർച്ചക്ുും രുര ാരമനത്തിനുും സഹായകമായ, മയ ര വുും ഭൗയികവുമായ വിദോഭോസ സുംവിധാനും നടെില്ാക്ുന്നയിന് ആവരേമായ സഹായും നൽകുക."
  ]
}

const ServiceSocietyContents = {
  english: [
    "Provide business advisory advice to expatriate Mahallu"+
    " residents who wish to have their own business ventures.",
    "Help the Mahalluresidents to find employment who are"+
    " newcomers to the expat and are looking for a job those who"+
    " lost.",
    "Help resolve problems in the workplaces and families of the"+
    " residents of Mahallu.",
    "Collaborate with other organizations, arts and sports clubs in"+
    " Mahalluin a positive and creative manner."
  ],
  malayalam:[
    "സവന്തമായി ബിസിനസ്‌ സും ുംഭങ്ങൾ ആപ്രഹിക്ുന്ന പ്രവാസികളായ മഹല്ല് നിവാസികൾക്് ബിസിനസ്സ് സുംബന്ധമായ ഉരരദര നിർരദ്ധരങ്ങൾ നൽകുക.",
    "പ്രവാസ രല്ാകരത്തക്് കടന്നു വ ുന്ന നവാരയര യുും, റയാഴിൽ നഷ്ടറെട്ട് റയാഴിൽ അരനവഷിക്ുന്നവ ുമായ മഹല്ല് നിവാസികറള റയാഴിൽ കറണ്ടത്താൻ സഹായിക്ുക.",
    "മഹല്ല് നിവാസികളായ പ്രവാസികളുറട റയാഴിൽ സ്ഥല്ങ്ങളില്ുും, കുടുുംബങ്ങളില്ുും ഉണ്ടാകുന്ന പ്രശ്നങ്ങൾ ര ിഹ ിക്ാൻ സഹായിക്ുക.",
    "മഹല്ലിറല് ഇയ സുംഘടനകരളാടുും, കല്ാ - കായിക ക്ലബ്ബുകരളാടുും രുണകാുംക്ഷരയാറട, സർരാത്മകമായ പ്രവർത്തനങ്ങളില്ൂറട ഒറത്താ ുമിച്ചു പ്രവർത്തിക്ുക."
  ]
}

const HelpMembersContents = {
  english: [
    "Provide financial assistance [loan] to members who are"+
    " struggling financially.",
    "Implement financial programs to guide the expatriate"+
    " members improve their lives upon retirement.",
    "Help repatriate the bodies of members whose lives are on"+
    " the path to expatriate."
  ],
  malayalam:[
    "സാമ്പത്തികമായി പ്രയിസന്ധി രന ിടുന്ന അുംരങ്ങൾക്് സാമ്പത്തിക സഹായും [വായ്ര] നൽകുക.",
    "അുംരങ്ങളുറട പ്രവാസാനന്ത ജീവിയും ഭാസു മാക്ുന്ന സാമ്പത്തിക രദ്ധയികൾ നടെില്ാക്ുക..",
    "പ്രവാസത്തിൻ വഴിയിൽ ജീവൻ റരാല്ിഞ്ഞു രരാകുന്ന അുംരങ്ങളുറട മയ്യിത്ത് നാട്ടിറല്ത്തിക്ാൻ സഹായിക്ുക."
  ]
}
export default function WhatWeDo(props) {
  useEffect(() => {
    props.setState("WhatWeDo")
  }, [props])
  return (
    <WhatWeDoDiv>
      <WhatWeDoCard headline="Welfare Programs" contents={WelfareProgramsContents} language={props.language === "മലയാളം" ?"malayalam" :"english"} colorcode="1" />
      <WhatWeDoCard headline="Services To The Society" contents={ServiceSocietyContents} language={props.language === "മലയാളം" ?"malayalam" :"english"} colorcode="2" />
      <WhatWeDoCard headline="Help Oen Members" contents={HelpMembersContents} language={props.language === "മലയാളം" ?"malayalam" :"english"} colorcode="1" />
    </WhatWeDoDiv>
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
font-family: 'Comfortaa', cursive;`;
const Content = styled.div`
width: 60%;
padding-left: 5%;
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