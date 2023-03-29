import React, { useEffect } from "react";
import ReactStars from "react-stars";
import { Link, useLocation } from "react-router-dom";
import "./styles/Productcard.css";
const Productcard = ({ grid, data }) => {
  const location = useLocation();
  console.log("dcdcds", data);
  return (
    <React.Fragment>
      {location.pathname === "/store" ? (
        data.map((value) => {
          const {
            title,
            discountPercentage,
            brand,
            category,
            price,
            thumbnail,
            images,
            rating,
          } = value;
          return (
            <Link className={`gr-${grid} product-box`}>
              <div className="whichlist">
                <img src="images/wish.svg" alt="whichlist" />
              </div>
              <div className="product-img">
                <img src={thumbnail} alt={title} />
                <img src={images[1]} alt={title} />
              </div>
              <div className="productdetails">
                <h6>Title :- {title}</h6>
                <p>Brand :- {brand}</p>
                <p>Category :- {category}</p>
                <ReactStars
                  count={5}
                  size={24}
                  value={rating}
                  color2={"#ffd700"}
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled
                </p>
                <h5>Discount :-{discountPercentage}%</h5>
                <h5>Price :- ${price}</h5>
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
          );
        })
      ) : (
        <p>new</p>
      )}
    </React.Fragment>
  );
};

export default Productcard;
