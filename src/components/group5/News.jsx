import React from 'react'
import './nstyle.css'
import search from './image/Search.png'
export default function news() {
    return (
        <div className='news'>
            <div className="row w-100">
              <div className="col-1"></div>
              <div className="col-4  fs-5">
                  <h1>Talk to a Redfin Agent</h1>
                  <p className='pt-3'>Start your search with an expert local agent—there’s no pressure or obligation.</p>
              </div>
              <div className="col-2"></div>
              <div className="col-3 mt-3 d-flex justify-content-center">
                  <span>
                  <p>Where are you searching for homes?</p>
                  <input type="text" placeholder='City, Address, ZIP'/>
                  <img className='searchbox' src={search} alt="" width={40}height={29} />
                  </span>
              </div>
              <div className="col-1"></div>
            </div>
            
        </div>
    )
}
