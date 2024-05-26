import React from 'react'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import BuyerPropertyPage from './Pages/BuyerPropertyPage'
import SellerPropertyPage from './Pages/SellerPropertyPage'
import AddPropertyComponent from './Components/AddProperty/AddPropertyComponent'
import {AddPropertyConfig} from './Components/AddProperty/AddPropertyConfig'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/buyer' element={<BuyerPropertyPage />} />
        <Route path='/seller' element={<SellerPropertyPage />} />
        <Route path='/add-property' element={<AddPropertyComponent addPropertyConfig={AddPropertyConfig} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
