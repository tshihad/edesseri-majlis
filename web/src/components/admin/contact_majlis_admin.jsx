import React, { useEffect } from 'react'

export default function ContactMajlisAdmin(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("ContactMajlisAdmin")
    }, [props])
    return (
        <div>ContactMajlisAdmin</div>
    )
}