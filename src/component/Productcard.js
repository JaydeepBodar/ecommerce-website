import React, { useEffect } from "react";
import ReactStars from "react-stars";
import { useDispatch, useSelector } from "react-redux";
import { product } from "../features/Product/productSlice";
import { Link, useLocation } from "react-router-dom";
import "./styles/Productcard.css";
const Productcard = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.isLoading);
  const isError = useSelector((state) => state.product.isError);
  const productdata = useSelector((state) => state.product.product);
  const getAllproduct = () => {
    dispatch(product());
  };
  useEffect(() => {
    getAllproduct();
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/store") {
      console.log("productdata", productdata);
      props.setProducts(productdata);
    }
  }, [productdata]);
  return (
    <React.Fragment>
      <div className="error w-100">
        {isError && (
          <h2 style={{ textAlign: "center", margin: "15px 0" }}>
            Faield to fetch data...
          </h2>
        )}
        {!isError && loading && (
          <h2 style={{ textAlign: "center", margin: "15px 0" }}>Loading...</h2>
        )}
      </div>
      {!isError &&
        !loading &&
        location.pathname === "/store" &&
        productdata &&
        productdata.map((value, index) => {
          const {
            id,
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
            <Link
              className={`gr-${props.grid} product-box`}
              to={`${id}`}
              key={index}
            >
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
                    props.grid === 12 ? "d-block" : "d-none"
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
        })}
      {!isError &&
        !loading &&
        location.pathname === "/" &&
        productdata &&
        productdata.slice(0).map((value, index) => {
          const {
            id,
            title,
            discountPercentage,
            brand,
            category,
            price,
            thumbnail,
            images,
            rating,
            popular,
          } = value;
          return (
            <>
              {popular === "true" && (
                <Link
                  className={`col-lg-3 product-box new-pbox`}
                  to={`product/${id}`}
                  key={index}
                >
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
              )}
            </>
          );
        })}
    </React.Fragment>
  );
};

export default Productcard;
