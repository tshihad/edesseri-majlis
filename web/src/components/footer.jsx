import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MediaQuery from 'react-responsive'



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
            <MediaQuery minDeviceWidth={1224}>
            <Grid container >
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                    <Head>Contact Us</Head>
                    <Content>Email: admin@edasserymajlis.com</Content>
                    <Links>
                        <A href="#">facebook</A>
                        <A href="#">instagram</A>
                        <A href="#">twitter</A>
                    </Links>
                </Grid>
                <Grid item xs={3}>
                    <Head>Visit Us</Head>
                    <Content>www.edasserymajlis.com</Content>
                    <Links>
                        <Copyright />
                    </Links>
                </Grid>
            </Grid>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
            <Grid container >
                <Grid item xs={12}>
                    <Links>
                        <Copyright />
                    </Links>
                </Grid>
            </Grid>
            </MediaQuery>
        </Footer >
    )
}

function Copyright() {

    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: "#f1c37d" }}>
            {'Copyright © '}
            <Link style={{ color: "#f1c37d" }} href="http://www.edasserymajlis.com">
                sketechi
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}