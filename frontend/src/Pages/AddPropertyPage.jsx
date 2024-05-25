import React from 'react'
import { AddPropertyConfig } from '../Components/AddProperty/AddPropertyConfig'
import AddPropertyComponent from '../Components/AddProperty/AddPropertyComponent'
import NavbarComponent from '../Components/Navbar/NavbarComponent'

const AddPropertyPage = () => {
  return (
    <>
          <NavbarComponent />
          <AddPropertyComponent addPropertyConfig={AddPropertyConfig} />     
    </>
  )
}

export default AddPropertyPage
