import React from 'react';
import styled from 'styled-components'

const Footer = styled.div`
bottom: 0;
width: 100%;
background-color: #033d19;
color: white;
padding: 1.5vh 10vw 1.5vh 10vw;
`;
export default function MainFooter(){
    return(
        <Footer>
            <div>EdasseriMajlis</div>
        </Footer>
    )
}