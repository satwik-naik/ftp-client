import React from 'react'
import {Navigate} from 'react-router-dom'

const IsAuth = () => {
 let email = localStorage.getItem("email")
   return email == null ? <Navigate to="/login" replace/> :  <Navigate to="/home" replace/>
}

export default IsAuth