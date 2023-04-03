import React, { useState, useEffect } from "react";
import Breadcrumb from "../component/Breadcrumb";
import "./styles/Ourstore.css";
import ReactStars from "react-stars";
import Helmetc from "../component/Helmetc";
import useFetch from "../utils/useFetch";
// import { product } from "../features/Product/productSlice";
import Productcard from "../component/Productcard";
import axios from "axios";
import { pro_url } from "../utils/axiosConfig";
// import { useSelector,useDispatch } from "react-redux";
const Ourstore = () => {
  // const [product, setProduct] = useState([]);
  const{data,isError,loading}=useFetch(`${pro_url}/product`)
  const [grid, setgrid] = useState(4);
  const [sortOption, setSortOption] = useState("");
  const sortoption = [
    { label:'filter-product',value:'default'},
    { label: "Price, low to high", value: "alphabetic-accending", code: 1 },
    { label: "Price, high to low", value: "alphabetic-decending", code: 2 },
    { label: "Alphabetically, A-Z", value: "price-accending", code: 3 },
    { label: "Alphabetically, Z-A", value: "price-decending", code: 4 },
  ];
  const sortdata= data.sort((a, b) => {  
    // console.log('data',a)
    if(sortOption === "price-accending") {
    return a.price - b.price;
  } else if (sortOption === "price-decending") {
    return b.price - a.price;
  } else if (sortOption === "alphabetic-accending") {
    return a.title.localeCompare(b.title);
  } else if (sortOption === "alphabetic-decending") {
    return b.title.localeCompare(a.title);
  }else if(sortOption === 'default'){
    return a; // default case, no sorting}
  }
});
  // const data=productdata && productdata.sort((a,b)=>a.price - b.price ? -1 : 1)
  // console.log('data',data)
  return (
    <React.Fragment>
      <Helmetc title="ourstore" />
      <Breadcrumb title="ourstore" />
      <section className="store-wrapper">
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
                      <li >Laptops</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">
                  <h4>Filter By</h4>
                  <div className="filter-p">
                    <h5>Avalibillity</h5>
                    <div className="stock-avilablity">
                      <div className="form-group">
                        <input type="checkbox" />
                        <label>in Stock</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" />
                        <label>Out of Stock</label>
                      </div>
                    </div>
                    <h5>Price</h5>
                    <div className="d-flex">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label for="floatingInput">From</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingPassword"
                          placeholder="To"
                        />
                        <label for="floatingPassword">To</label>
                      </div>
                    </div>
                    <h5>color</h5>
                    <div className="color">
                      <ul className="d-flex flex-wrap p-0 gap-10">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                    <h5>Size</h5>
                    <div className="size-avalibility">
                      <div className="form-group">
                        <input type="checkbox" />
                        <label>S (2)</label>
                      </div>
                      <div className="form-group">
                        <input type="checkbox" />
                        <label>M (2)</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">
                  <h4>Product Tags</h4>
                  <div
                    className="d-flex flex-wrap"
                    style={{ rowGap: "5px", columnGap: "5px" }}
                  >
                    <span className=" badge bg-light text-secondary py-2 px-3">
                      Tv
                    </span>
                    <span className=" badge bg-light text-secondary py-2 px-3">
                      Laptops
                    </span>
                    <span className=" badge bg-light text-secondary py-2 px-3">
                      Watch
                    </span>
                    <span className=" badge bg-light text-secondary py-2 px-3">
                      smartphone
                    </span>
                    <span className=" badge bg-light text-secondary py-2 px-3">
                      tabs
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">
                  <h4>Random Product</h4>
                  <div className="random-p">
                    <div className="random-p-wrapper">
                      <img src="images/catbanner-02.jpg" />
                      <div className="card-details">
                        <h5>Smart Wtches</h5>
                        <p>$100</p>
                        <ReactStars
                          count={5}
                          size={24}
                          value={3}
                          color2={"#ffd700"}
                        />
                      </div>
                    </div>
                    <div className="random-p-wrapper">
                      <img src="images/headphone.jpg" />
                      <div className="card-details">
                        <h5>Headphones</h5>
                        <p>$110</p>
                        <ReactStars
                          count={5}
                          size={24}
                          value={5}
                          color2={"#ffd700"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="pro-wrapper d-flex justify-content-between">
                <div
                  className="d-flex align-items-center"
                  style={{ columnGap: "10px" }}
                >
                  <p>Sort by:</p>
                  <select
                    style={{
                      padding: "8px 10px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    }}
                    value={sortOption}
                    onChange={(e)=>setSortOption(e.target.value)}
                    // value={sortOrder}
                    // onChange={(e) => {
                    //   const [price, direction] = e.target.value.split("_");
                    //   setSortOptions({
                    //     ...sortOptions,
                    //     [price]: { direction },
                    //   });
                    // }}
                  >
                    {sortoption.map((val) => {
                      const { value, label, code } = val;
                      return <option value={value}>{label}</option>;
                    })}
                  </select>
                </div>
                <div className="d-flex" style={{ columnGap: "10px" }}>
                  <p>21 Products</p>
                  <div
                    className="d-flex align-items-center"
                    style={{ columnGap: "10px" }}
                  >
                    <img
                      src="images/gr3.svg"
                      alt="grid-img"
                      className="d-block img-c"
                      onClick={() => setgrid(4)}
                    />
                    <img
                      src="images/gr4.svg"
                      alt="grid-img"
                      className="d-block img-c"
                      onClick={() => setgrid(6)}
                    />
                    <img
                      src="images/gr2.svg"
                      alt="grid-img"
                      className="d-block img-c"
                      onClick={() => setgrid(12)}
                    />
                  </div>
                </div>
              </div>
              <div
                className="product-list d-flex flex-wrap"
                style={{ rowGap: "10px", columnGap: "10px" }}
              >
                <Productcard grid={grid} productdata={sortdata} loading={loading} isError={isError}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Ourstore;
