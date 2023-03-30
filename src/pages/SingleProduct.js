import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Helmetc from "../component/Helmetc";
import { singleproduct } from "../features/Product/productSlice";
import "./styles/blog.css";
const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.singleproduct.isError);
  const loading = useSelector((state) => state.singleproduct.isLoading);
  const singleproductdata = useSelector(
    (state) => state.singleproduct.singleproduct
  );
  const getindividualproduct = () => {
    dispatch(singleproduct(id));
  };
  const {
    title,
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    thumbnail,
    images,
  } = singleproductdata;
  useEffect(() => {
    getindividualproduct();
  }, []);
  console.log("data", singleproductdata);
  return (
    <React.Fragment>
      <Helmetc title="product-details" />
      <Breadcrumb title="product-details" />
      <div className="blog-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="filter-card mb-3">
                <div className="filter-title">
                  <h4>Shop by Categories</h4>
                  <div className="p-categories">
                    <ul className="p-0 listview">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {isError && (
                <h2 style={{textAlign:"center"}}>Faield to fetch data...</h2>
              )}
              {!isError && loading && (
                <h2 style={{textAlign:"center"}}>Loading...</h2>
              )}
              {!loading && (
                <div className="blog-box">
                  <div className="row">
                    <div className="col-lg-5">
                      <div className="blog-img">
                        <img src={thumbnail} alt="blog-img" />
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="blog-content">
                        <h5>Title :- {title}</h5>
                        <h5>Category :- {category}</h5>
                        <h5>Brand :- {brand}</h5>
                        <h6>Price :- {price}</h6>
                        <h6 className="d-flex align-items-center gap-1">
                          Rating :-
                          <ReactStars
                            count={5}
                            size={24}
                            value={rating}
                            color2={"#ffd700"}
                          />
                        </h6>
                        <p>Features :- {description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
