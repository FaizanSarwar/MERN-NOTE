import React from 'react'
import {Alert } from "react-bootstrap"

const ErrorMessage = ({children}) => {
  return (
    <Alert variant="danger" style={{fontSize:20}}
    //  onClose={() => setShow(false)} dismissible
     >
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <strong>{children}</strong>
  </Alert>
  )
}

export default ErrorMessage