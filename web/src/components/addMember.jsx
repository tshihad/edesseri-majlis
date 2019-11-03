import React, { useEffect } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@material-ui/core/';


export default function Admin(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("AddMember")
    })
    return (
        <Grid container spacing={3}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
                <FormControl id="asd">
                    <Grid container spacing={3}>
                        <Grid item xs={2} children="asd">
                            <InputLabel htmlFor="my-input">Email address</InputLabel>
                            <Input id="my-input" aria-describedby="my-helper-text" />
                        </Grid>
                       
                    </Grid>
                </FormControl>
            </Grid>
            <Grid item xs={2}></Grid>

        </Grid>
    )
}