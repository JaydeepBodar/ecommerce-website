import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import './styles/Productcard.css'
const Productcard = () => {
  return (
    <div className="col-lg-3">
      <Link className="product-box">
        <div className="whichlist">
            <img src='images/wish.svg' alt='whichlist'/>
        </div>
        <div className="product-img">
          <img src="images/watch.jpg" alt="watches" />
          <img src="images/in-galaxy-watch5-44mm-sm-r910nzaainu-533186699.webp" alt='alt-watches'/>
        </div>
        <div className="productdetails">
          <h6>smart watch</h6>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <ReactStars
            count={5}
            size={24}
            value={3}
            color2={"#ffd700"}
          />
          <h5>$100</h5>
        </div>
        <div className="action-bar">
            <div className="d-flex flex-column">
                <Link to=''>
                    <img src='images/prodcompare.svg' alt=''/>
                </Link>
                <Link to=''>
                    <img src='images/view.svg' alt=''/>
                </Link>
                <Link to=''>
                    <img src='images/add-cart.svg' alt=''/>
                </Link>
            </div>
        </div>
      </Link>
    </div>
  );
};

export default Productcard;
