import React from 'react';
import styled from 'styled-components';
import loading from '../../images/gifs/loading.cms'

const Card = styled.div`
margin: 5 vh 10vw 0 10vw;
text-align: center;
padding-top: 30vh;`;
const Img = styled.img`
width: 5vw`;
export default function Loading() {
    return (
        <Card>
            <Img src={loading} />
        </Card>
    )
}
