import React from 'react'
import './navstyle.css'
export default function nav() {
    return (
        <div className="Container">
            <div className='row navbar'>
                <div className='col-1'></div>
                <div className='col-3'>besmik</div>
                <div className='col-7 navlist'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Feature</li>
                    <li>Contact Us</li>
                    <button className='signin'>Sign In</button>
                    <button className='signup'>Sign Up</button>
                </div>
                <div className='col-1'></div>
            </div>
      </div>
    )
}
