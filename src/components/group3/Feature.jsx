import React from 'react'

export default function feature() {
    return (
        <div className='pt-5 mt-5 pb-5 mb-5'>
            <div className="row w-100">
                <div className="col-1"></div>
                <div className="col-10 d-flex justify-content-between">
                    <div className='row'>
                        <div className="col-10">
                        <h1 className='pb-3'>Our trending latest proparty</h1>
                        <p>Our unique process gives you peace of mind from home rent to services</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <button class="btn btn-light btn-outline-secondary dropdown-toggle ps-4 pe-4 me-4 " type="button">Property type</button>
                        <button class="btn btn-primary ps-3 pe-3 " type="button">See All Property</button>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>

        </div>
    )
}
