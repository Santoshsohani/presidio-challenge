import React from 'react'
import { GiLighthouse } from "react-icons/gi";

const NavbarComponent = () => {
    return (
        <div className='flex justify-between h-12 border-b-2 shadow'>
            <div className='flex mx-2 my-2'>
                <GiLighthouse className='text-2xl mx-1 text-purple-700' />
                <h1 className='text-xl font-semibold -my-1 text-purple-600 mx-1'>Rentify</h1>
            </div>
        </div>
    )
}

export default NavbarComponent
