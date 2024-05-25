import React from 'react'
import { RegisterConfig } from "../Components/Register/RegisterConfig"
import RegisterComponent from "../Components/Register/RegisterComponent"
import NavbarComponent from '../Components/Navbar/NavbarComponent'
const RegisterPage = () => {
  return (
      <>
        <NavbarComponent/>
        <RegisterComponent registerConfig={RegisterConfig} />
    </>
  )
}


export default RegisterPage
