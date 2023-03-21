import React from "react";
import ReactStars from "react-stars";
import "./styles/specialproduct.css";
const Specialproduct = () => {
  return (
    <div className="col-lg-6">
      <div className="s-product">
        <div className="row">
          <div className="col-lg-5">
            <div className="sp-img">
              <img src="images/watch.jpg" alt="product-img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sp-img-content">
              <h6>Watches</h6>
              <p className="content">
                It is a long established fact that a reader will be
                distracted...
              </p>
              <ReactStars count={5} size={24} value={3} color2={"#ffd700"} />
              <p>
                $100&nbsp;&nbsp;<del>$200</del>
              </p>
              <div className="sale-start">
                <h6>5 days</h6>
                <div className="timing">
                  <span className="timestart">1</span>
                  <span className="timestart">1</span>
                  <span className="timestart">1</span>
                </div>
              </div>
              <div className="p-bar">
                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{width:" 25%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="add-btn">
                <button className="button">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialproduct;
