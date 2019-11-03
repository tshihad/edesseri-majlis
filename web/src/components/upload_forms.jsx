import React, { useEffect } from 'react'

export default function UploadForms(props) {
    useEffect(() => {
        props.setUser("admin")
        props.setState("UploadForms")
    }, [props])
    return (
        <div>UploadForms</div>
    )
}