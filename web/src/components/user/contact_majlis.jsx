import React, { useEffect } from 'react'

export default function ContactMajlis(props) {
  useEffect(() => {
    props.setUser("user")
    props.setState("ContactMajlis")
  }, [props])

  return (
    <div >Contact Majlis</div>
  )
}