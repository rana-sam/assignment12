import React from "react";
import logo from "./image/logo1.png";
export default function Footer() {
  return (
    <div>
      <div className="row w-100">
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between mt-5 pt-5 mb-5">
          <div className="popular">
            <h4>Popular Searches</h4>
            <p>
              Apartment for Rent <br /> Apartment Low to hide <br /> Offices for
              Buy <br /> Offices for Rent
            </p>
          </div>
          <div className="about">
            <h4>About Us</h4>
            <p>
              Our Story <br />
              Team Members <br />
              Careers <br />
              Contact Us{" "}
            </p>
          </div>
          <div className="quick">
            <h4>Quick links</h4>
            <p>
              Terms of Use <br />
              Privacy Policy <br />
              Contact Support <br />
              FAQs
            </p>
          </div>
          <div className="support">
            <h4>Support</h4>
            <p>
              Help Center <br />
              Loan Support <br />
              Managment <br />
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row w-100 mb-5 mt-3">
        <div className="col-1"></div>
        <div className="col-10 d-flex justify-content-between">
          <img src={logo} alt="" width={70} height={20} />
          <p className="text-secondary">© 2021 Besnik. All Rights Reserved</p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
