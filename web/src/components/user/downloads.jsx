import React, { useEffect } from 'react'

export default function Downloads(props) {
  useEffect(() => {
    props.setUser("user")
    props.setState("Downloads")
  }, [props])
  return (
    <div>Downloads</div>
  )
}