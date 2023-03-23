import React from "react";
import Breadcrumb from "../component/Breadcrumb";
import Helmetc from "../component/Helmetc";
import "./styles/whichlist.css";
const Whichlist = () => {
  return (
    <React.Fragment>
      <Helmetc title="whichlist" />
      <Breadcrumb title="whichlist" />
      <section className="whichlist-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="cwhichlist-box">
                <img src="images/watch.jpg" alt="watche" />
                <div className="close">
                  <img src="images/cross.svg" alt="cross-logo" />
                </div>
                <div className="whichlist-details">
                  <h6>iSmart watch which have full sensore based watch</h6>
                  <p>$100</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cwhichlist-box">
                <img src="images/watch.jpg" alt="watche" />
                <div className="close">
                  <img src="images/cross.svg" alt="cross-logo" />
                </div>
                <div className="whichlist-details">
                  <h6>iSmart watch which have full sensore based watch</h6>
                  <p>$100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Whichlist;
