import React from 'react'
import { Button } from 'react-bootstrap'

export default function BootstraButton()
{
    return(
        <>
      <Button variant="primary" onClick={()=>{alert("Primary Button clicked")}}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
        </>
    )
}