import React, { useEffect } from 'react';
import TextField from './sub_components/simple_text_field';
import styled from 'styled-components';

const Form = styled.form`
width:100%;
padding:5%;
background-color:#f7fff6;
box-shadow: 6px 6px 28px 3px rgba(0,0,0,0.6);`;

export default function Admin(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("AddMember")
    })
    return (
        <Form>
            <form >
                <div>
                    <TextField id="name"
                        required
                        label="Name"
                        margin="normal"
                        type="text"
                    />
                    <TextField id="password"
                        required
                        label="Password"
                        margin="normal"
                        type="password" />
                    <br />
                </div>
                <div>
                    <TextField id="house_name"
                        required
                        label="House Name"
                        margin="normal"
                        type="text" />
                </div>
                <div>
                    <TextField id="phone_no_1"
                        required
                        label="Phone no 1"
                        margin="normal"
                        type="text" />
                    <TextField id="phone_no_2"
                        required
                        label="Phone no 2"
                        margin="normal"
                        type="text" />
                </div>
                <div>
                    <TextField id="office_no"
                        required
                        label="Office no"
                        margin="normal"
                        type="text" />
                    <TextField id="uae_no"
                        required
                        label="UAE home no"
                        margin="normal"
                        type="text" />
                </div>
                <div>
                    <TextField id="email"
                        required
                        label="Office no"
                        margin="normal"
                        type="email" />
                    <TextField id="email"
                        required
                        label="Office no"
                        margin="normal"
                        type="email" />
                </div>
            </form>
        </Form>
    )
}