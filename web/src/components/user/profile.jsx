import React, { useEffect } from 'react'

export default function Profile(props) {
  useEffect(() => {
    props.setUser("user")
    props.setState("Profile")
  }, [props])
  return (
    <div>Profile</div>
  )
}