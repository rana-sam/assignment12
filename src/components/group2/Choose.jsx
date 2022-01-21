import React from 'react'
import icon1 from './image/icon01.png'
import icon2 from './image/icon02.png'
import icon3 from './image/icon03.png'
export default function choose() {
    return (
        <div className='pb-5 mb-5'>
            <div className="row w-100">
                <div className="col-12 text-center pb-5 mb-5">
                    <h1>What Can We Help You Find?</h1>
                </div>
            </div>
        <div className='row w-100'>
            <div className="col-1"></div>
            <div className="col-10 ps-5 pe-5 d-flex justify-content-between">
                <span className='w-25 text-center'>
                    <img className='pb-5' src={icon1} alt="" />
                    <h2 className='pt-4 pb-4'>Buy A Home</h2>
                    <p className='fs-5'>With over 1 million+ homes for sale available on the website, Trulia can match you with a house.</p>
                </span>
                <span className='w-25 text-center'>
                    <img className='pb-5' src={icon2} alt="" />
                    <h2 className='pt-4 pb-4'>Rent A Home</h2>
                    <p className='fs-5'>With 35+ filters and custom keyword search, Trulia can help you
 find a home.</p>
                </span>
                <span className='w-25 text-center'>
                    <img className='pb-5' src={icon3} alt="" />
                    <h2 className='pt-4 pb-4'>See neighborhoods</h2>
                    <p className='fs-5'>With more neighborhood insights than any other real estate
website.</p>
                </span>
            </div>
            <div className="col-1"></div>
        </div>
        </div>
    )
}
