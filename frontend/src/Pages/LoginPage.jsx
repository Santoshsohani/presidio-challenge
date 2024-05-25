import React from 'react'
import { LoginConfig } from '../Components/Login/LoginConfig'
import LoginComponent from '../Components/Login/LoginComponent'
import NavbarComponent from '../Components/Navbar/NavbarComponent'
const LoginPage = () => {
  return (
      <>
      <NavbarComponent />
      <LoginComponent loginConfig={LoginConfig} />
    </>
  )
}

export default LoginPage
