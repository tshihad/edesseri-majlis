import React, { useEffect } from 'react';
import Loading from './loading'

export default function EventGallery(props) {
    useEffect(() => {
        props.setLanButton(false)
        props.setState("Home")
        localStorage.clear()
        window.location = "/Home"
    }, [props])
    return (
        <Loading />
    )
}