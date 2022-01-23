
import React from 'react';
import './text.css'
import img from './image/image.png'
import stars from './image/starts.png'
import ellip0 from './image/Ellipse1.png'
import ellip1 from './image/Ellipse0.png'
import ellip2 from './image/Ellipse2.png'
import ellip3 from './image/Ellipse3.png'
import ellip4 from './image/Ellipse4.png'
import ellip5 from './image/Ellipse5.png'
import ellip6 from './image/Ellipse6.png'
import ellip7 from './image/Ellipse7.png'
export default function test() {
  return (
  <div>
      <div className='row w-100 mt-5 py-5 mb-5 pb-5'>
        <div className="col-1"></div>
          <div className="col-3">
            <img src={ellip0} alt="" />
            <img className='ellip1' src={ellip1} alt="" />
            <img className='ellip2' src={ellip2} alt="" />
            <img className='ellip3' src={ellip3} alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center">
              <div className="content text-center ">
                  <h1 className='pb-5'>TESTIMONIALS</h1>
                  <p>Our Clients send us bunch of smilies with our services and we love them</p>
                  <img src={img} alt="" />
                  <span>
                      <p>"We are very pleased with the way Besnik handled our purchase of a lake home. He was prompt, friendly, and very knowledgeable. He followed up on any and all concerns.</p>
                  <h4>Becky Nelson</h4>
                  <img src={stars} alt="" />
                  </span>
              </div>
          </div>
          <div className="col-3">
            <img className='ellip4' src={ellip4} alt="" />
            <img className='ellip5' src={ellip5} alt="" />
            <img className='ellip6' src={ellip6} alt="" />
            <img className='ellip7' src={ellip7} alt="" />

          </div>

      </div>

  </div>
  );
}
