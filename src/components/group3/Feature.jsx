import React from "react";
import img1 from "./image/image1.png";
import img2 from "./image/image2.png";
import img3 from "./image/image3.png";
import img4 from "./image/image4.png";
import icon from "./image/icon.png";
import heart1 from "./image/heartclick.png";
import heart2 from "./image/heart.png";
import arrow from "./image/arrow.png";
export default function feature() {
  return (
    <div className="pt-5 mt-5 pb-5 mb-5 w-100">
      <div className="row w-100">
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between">
          <div className="row">
            <div className="col-10">
              <h1 className="pb-3">Our trending latest proparty</h1>
              <p>
                Our unique process gives you peace of mind from home rent to
                services
              </p>
            </div>
          </div>
          <div className="pt-4">
            <button
              class="btn btn-light btn-outline-secondary dropdown-toggle ps-4 pe-4 me-4 "
              type="button"
            >
              Property type
            </button>
            <button class="btn btn-primary ps-3 pe-3 " type="button">
              See All Property
            </button>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row pt-5 w-100">
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between   ">
          <div className="d-flex rounded shadow pb-3 pe-2 ">
            <img src={img1} alt="" />
            <span className="ms-5 pt-3">
              <h3 className="text-primary">$259,000</h3>
              <h3>Case Alda</h3>
              <p>Co Rd Tribune Tribune</p>
              <img src={icon} alt="" /> <br />
              <button className="btn btn-primary mt-4">View Deatil</button>
            </span>
            <img
              className="ps-5 ms-5 pt-2"
              src={heart1}
              alt=""
              width={80}
              height={40}
            />
          </div>

          <div className="d-flex rounded shadow-sm pb-3 pe-2">
            <img src={img2} alt="" />
            <span className="ms-4">
              <h3 className="text-primary">$229,000</h3>
              <h4>Langes Beach House</h4>
              <p>375 Highland Ave NE UNIT 1002</p>
              <img src={icon} alt="" /> <br />
              <button className="btn btn-sm btn-light text-primary btn-outline-primary mt-4">
                View Deatil
              </button>
            </span>
            <img className="ps-5" src={heart2} alt="" width={80} height={30} />
          </div>
        </div>
        <div />
      </div>
      <div className="row pt-5 w-100">
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between   ">
          <div className="d-flex rounded shadow-sm pb-3 pe-2 ">
            <img src={img3} alt="" />
            <span className="ms-4 pt-3">
              <h3 className="text-primary">$289,000</h3>
              <h3>Supper Delax Home</h3>
              <p>1398 Lynford Dr SW, Atlanta</p>
              <img src={icon} alt="" /> <br />
              <button className="btn btn-sm btn-light text-primary btn-outline-primary mt-4">
                View Deatil
              </button>
            </span>
            <img
              className="ps-3 pt-2"
              src={heart2}
              alt=""
              width={50}
              height={40}
            />
          </div>

          <div className="d-flex rounded shadow-sm  pb-3 pe-2">
            <img src={img4} alt="" />
            <span className="ms-4 w-50">
              <h3 className="text-primary">$329,000</h3>
              <h4>Clinton Villa</h4>
              <p>675 Albert St NW, Atlanta</p>
              <img src={icon} alt="" /> <br />
              <button className="btn btn-sm btn-light text-primary btn-outline-primary mt-4">
                View Deatil
              </button>
            </span>
            <img
              className="ps-5 ms-5"
              src={heart2}
              alt=""
              width={80}
              height={30}
            />
          </div>
        </div>
        <div />
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-center">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
