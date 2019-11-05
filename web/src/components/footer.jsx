import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'

const Footer = styled.div`
bottom: 0;
padding: 5vh 0;
background-color: #5a5656da;
color: #f1f1f1;
padding: 1.5vh 10vw 1.5vh 10vw;
`;
const Head = styled.h4`
font-size:1em;
`;
const Content = styled.div`
font-size:.8em;
line-height: 2em;
`;
const A = styled.a`
padding-right: 3%;
font-size:.8em;
text-decoration: none;
color: #f1c37d;
&:hover{
    color: #fda31b;
}
`;
const Links = styled.div`
padding-top: 5%`;
export default function MainFooter() {
    return (
        <Footer>
            <Grid container spacing={3}>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                    <Head>Contact Us</Head>
                    <Content>Email: admin@edasserymajlis.com</Content>
                    <Content>phone: +91 987 978 9786</Content>
                    <Links>
                        <A href="#">facebook</A>
                        <A href="#">instagram</A>
                        <A href="#">twitter</A>
                    </Links>
                </Grid>
                <Grid item xs={3}>
                    <Head>Visit Us</Head>
                    <Content>Room No 321</Content>
                    <Content>Edassery, Trissur</Content>
                    <Links>
                        <A href="#">Get Google Map Direction</A>
                    </Links>
                </Grid>
            </Grid>
        </Footer>
    )
}