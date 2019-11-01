import React, { useEffect } from 'react';
import TextField from './form_components/simple_text_field';
import styled from 'styled-components';

const Form = styled.form`
width:100%;
background-color:#f7fff6;
box-shadow: 6px 6px 28px 3px rgba(0,0,0,0.6);`;

export default function Admin(props) {
    useEffect(() => {
        props.setUser("admin")
    })
    return (
        <Form>
           <TextField id="name"
        label="Name"
        type="text"/>
        </Form>
    )
}