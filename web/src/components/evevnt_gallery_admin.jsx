import React, { useEffect } from 'react'

export default function ContactMajlisAdmin(props) {
  useEffect(() => {
    props.setUser("admin")
    props.setState("EventGalleryAdmin")
  }, [props])
  return (
    <div>EventGalleryadmin</div>
  )
}