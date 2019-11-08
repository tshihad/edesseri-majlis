import React, { useEffect } from 'react'

export default function EventGallery(props) {
  useEffect(() => {
    props.setUser("user")
    props.setState("EventGallery")
  }, [props])
  return (
    <div>Event Gallery</div>
  )
}