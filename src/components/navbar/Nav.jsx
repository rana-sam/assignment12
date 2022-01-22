import React from 'react'
import './navstyle.css'
import logo from './image/logo1.png'
export default function nav() {
    return (
        
            <div className='row navbar'>
                <div className='col-1'></div>
                <div className='col-4'><img src={logo} alt="" width={70}  height={20}/></div>
                <div className='col-6 navlist'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Feature</li>
                    <li>Contact Us</li>
                    <button className='signin'>Sign In</button>
                    <button className='signup'>Sign Up</button>
                </div>
                <div className='col-1'></div>
            </div>
     
    )
}
