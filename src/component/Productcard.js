import React, { useState, useEffect } from "react";
import ReactStars from "react-stars";
import { Link, useLocation } from "react-router-dom";
import "./styles/Productcard.css";
import axios from "axios";
const Productcard = ({ grid }) => {
  const location = useLocation();
  return (
    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-lg-3"}>
      <Link className="product-box">
        <div className="whichlist">
          <img src="images/wish.svg" alt="whichlist" />
        </div>
        <div className="product-img">
          <img src="images/watch.jpg" alt="watches" />
          <img
            src="images/in-galaxy-watch5-44mm-sm-r910nzaainu-533186699.webp"
            alt="alt-watches"
          />
        </div>
        <div className="productdetails">
          <h6>smart watch</h6>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <ReactStars count={5} size={24} value={3} color2={"#ffd700"} />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          <h5>$100</h5>
        </div>
        <div className="action-bar">
          <div className="d-flex flex-column">
            <Link to="">
              <img src="images/prodcompare.svg" alt="" />
            </Link>
            <Link to="">
              <img src="images/view.svg" alt="" />
            </Link>
            <Link to="">
              <img src="images/add-cart.svg" alt="" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Productcard;
