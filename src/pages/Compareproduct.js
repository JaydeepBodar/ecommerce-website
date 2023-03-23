import React from "react";
import Breadcrumb from "../component/Breadcrumb";
import Helmetc from "../component/Helmetc";
import './styles/compare.css'
const Compareproduct = () => {
  return (
    <React.Fragment>
      <Helmetc title="Compare-Product" />
      <Breadcrumb title="Compare-product" />
      <section className="compare-product-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="cproduct-box">
                <img src="images/watch.jpg" alt="watche" />
                <div className="close">
                  <img src="images/cross.svg" alt="cross-logo" />
                </div>
                <div className="product-details">
                  <h6>iSmart watch which have full sensore based watch</h6>
                  <p>$100</p>
                  <div className="product-division">
                    <h5>Brand:</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-division">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-division">
                    <h5>Avalibilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-division">
                    <h5>color:</h5>

                      <div className="color">
                        <ul className="d-flex flex-wrap p-0 gap-10">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                  </div>
                  <div className="product-division">
                      <h5>Size:</h5>
                      <p>SM</p>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cproduct-box">
                <img src="images/watch.jpg" alt="watche" />
                <div className="close">
                  <img src="images/cross.svg" alt="cross-logo" />
                </div>
                <div className="product-details">
                  <h6>iSmart watch which have full sensore based watch</h6>
                  <p>$100</p>
                  <div className="product-division">
                    <h5>Brand:</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-division">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-division">
                    <h5>Avalibilty:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-division">
                    <h5>color:</h5>

                      <div className="color">
                        <ul className="d-flex flex-wrap p-0 gap-10">
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                  </div>
                  <div className="product-division">
                      <h5>Size:</h5>
                      <p>SM</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Compareproduct;
