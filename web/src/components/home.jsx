import React from 'react';
import styled from 'styled-components';
import Slider from './image_slider'


const Card = styled.div`
width:100%;
text-align:left;
font-style:'arial';
font-family:Open Sans,sans-serif;
`;
const Headline = styled.h2`
color:#09579b`;
const Content = styled.p`
line-height: 1.4em;
font-family:Open Sans,sans-serif;
`;
export default function Home(){
return(
  <div>
    <Slider/>
    <Topic headline="About Majlis" content ="Allah has bestowed special blessings on each of His creatures.
Each of us should strive to do our best to use all these
blessings given to us in the way Allah wants.
The Majlis is a group of expatriate friends who have come
together to perform selfless community service for the
expatriates and the inhabitants of the Edassery Mahallu on
the ideals of Islam, with the Edasseri Mahallu as the boundary
of activities."/>
<Topic headline="The Rise Majlis" content="The full of goodness tree, which our ancestors planted in the early 70s, sprouted 
and blossomed once again in the land of Dubai the dream land of expats on August 3, 2012 (1433 Ramadan 15). Yes, that's, that's Majlis"/>
<Topic headline="Vision" content="The Home Of Edassery Expats..."></Topic>
<Content>Edasseri Majlis is a space where friends and family of the
expats of Edasseri Mahallu come under one umbrella.</Content>
<Topic headline="Mission" content="The Hope Of Edassery Expats..."/>
<Content>The Edasseri Majlis is an endeavor to Ensuring self-reliance by keeping the member's dream and hopes alive
  and make the return of the members in peace and comfort
</Content>
<Topic headline="Majlis Priority" content="The slogan that the Majlis upholds is the self-reliance of all
members of the Majlis and the self-reliance of the Edasseri
Mahallu which the Majlis represents.
The Majlis firmly believe that we can build a better life only
by being self-reliant.
The long-term objective of Majlis is to initiate and carry out
financial and / or non-financial projects to achieve the said
self-reliant society.
Above all, Implementation of plans for successful
rehabilitation of expat members."/>
  </div>
)
}

export function Topic(props){
  return(
    <Card>
      <Headline>{props.headline}</Headline>
      <Content>{props.content}</Content>
    </Card>
  )
}