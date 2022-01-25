import React from "react";
import "./search.css";
import hero from "./image/hero.png";
import logo1 from "./image/image1.png";
import logo2 from "./image/image2.png";
import logo3 from "./image/image3.png";
import logo4 from "./image/image4.png";
import logo5 from "./image/image5.png";
export default function Group1() {
  return (
    <div className="row searchgroup pb-5">
      <div className="col-1"></div>
      <div className="col-5 pt-5 mt-5">
        <h1 className="group1h1 ">Search For Homes In Your Neighborhood</h1>
        <p className="group1p pt-4">
          Online Estate Agency, the modern way to sell your own home. You can
          use griffin residential to market your property.
        </p>
        <div className="row pt-4 pb-5">
          <div className="col-4">
            <h3>Address</h3>
            <p>587 Bridgeton Road</p>
          </div>
          <div className="col-4">
            <h3>City</h3>
            <p>El Paso, Texas</p>
          </div>
          <div className="col-4 pt-3">
            <button className="btn ps-4 pt-2 pb-2 pe-4 text-white bg-primary">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-5">
        <img src={hero} alt="" />
      </div>
      <div className="col-1"></div>
      <div className="row pt-5 mt-5 pb-5">
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
