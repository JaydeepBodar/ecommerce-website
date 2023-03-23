import React from "react";
import Marquee from "react-fast-marquee";
import Blogcard from "../component/Blogcard";
import Productcard from "../component/Productcard";
import Specialproduct from "../component/Specialproduct";
import "./styles/Home.css";
const Home = () => {
  return (
    <React.Fragment>
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-box">
                <div className="img-box">
                  <img
                    src="images/main-banner-1.jpg"
                    alt="iphone"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="img-content">
                  <p>SUPERCHARGED FOR PROPS</p>
                  <h1>iPad S13+ Pro.</h1>
                  <h6>From $999.00 or $41.62/mo.</h6>
                  <button className="banner-btn">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row  banner-site-box">
                <div className="col-lg-6">
                  <div className="banner-box">
                    <div className="img-box">
                      <img
                        src="images/catbanner-01.jpg"
                        alt="iphone"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="img-content-1">
                      <p>BEST SALE</p>
                      <h6>Mac Pro.</h6>
                      <h6>From $999.00 or $41.62/mo.</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-box">
                    <div className="img-box">
                      <img
                        src="images/catbanner-02.jpg"
                        alt="iphone"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="img-content-1">
                      <p>NEW ARRIVALE</p>
                      <h5>iSmart Pro.</h5>
                      <h6>From $999.00 or $41.62/mo.</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-box">
                    <div className="img-box">
                      <img
                        src="images/catbanner-03.jpg"
                        alt="iphone"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="img-content-1">
                      <p>NEW ARRIVALE</p>
                      <h5>iPad S13+ Pro.</h5>
                      <h6>From $999.00 or $41.62/mo.</h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-box">
                    <div className="img-box">
                      <img
                        src="images/catbanner-04.jpg"
                        alt="iphone"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="img-content-1">
                      <p>NEW ARRIVALE</p>
                      <h5>iPad S13+ Pro.</h5>
                      <h6>From $999.00 or $41.62/mo.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="item-section-1 common">
        <div className="container">
          <div className="company-promises">
            <div className="row">
              <div className="col-lg-3">
                <div className="item1-box">
                  <img
                    src="images/service.png"
                    alt="company-promises"
                    className="item-img"
                  />
                  <div className="img-content">
                    <h6>Free Shiping</h6>
                    <p>From all above $100 Order</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="item1-box">
                  <img
                    src="images/service-02.png"
                    alt="company-promises"
                    className="item-img"
                  />
                  <div className="img-content">
                    <h6>Daily surprise Offers</h6>
                    <p>Save upto 25% off</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="item1-box">
                  <img
                    src="images/service-03.png"
                    alt="company-promises"
                    className="item-img"
                  />
                  <div className="img-content">
                    <h6>Support 24/7</h6>
                    <p>Shop with an experts</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="item1-box">
                  <img
                    src="images/service-04.png"
                    alt="company-promises"
                    className="item-img"
                  />
                  <div className="img-content">
                    <h6>Affordable price</h6>
                    <p>Our factory direct price</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="item1-box">
                  <img
                    src="images/service-05.png"
                    alt="company-promises"
                    className="item-img"
                  />
                  <div className="img-content">
                    <h6>Secure Payments</h6>
                    <p>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Computer & Laptops</h6>
                    <p>10 Item</p>
                  </div>
                  <img src="images/catbanner-01.jpg" alt="computer" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Camera & Videos</h6>
                    <p>5 Item</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Smart Telivision</h6>
                    <p>4 Item</p>
                  </div>
                  <img src="images/tv.jpg" alt="television" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Smart Watches</h6>
                    <p>5 item</p>
                  </div>
                  <img src="images/catbanner-02.jpg" alt="smart-watches" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Watches</h6>
                    <p>5 item</p>
                  </div>
                  <img src="images/watch.jpg" alt="watches" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Headphones</h6>
                    <p>8 item</p>
                  </div>
                  <img src="images/headphone.jpg" alt="headphones" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Speakers</h6>
                    <p>8 item</p>
                  </div>
                  <img src="images/speaker.jpg" alt="speakers" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Tablets</h6>
                    <p>8 item</p>
                  </div>
                  <img src="images/tab.jpg" alt="Tablets" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Bages</h6>
                    <p>6 item</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="bags" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>iPads</h6>
                    <p>5 item</p>
                  </div>
                  <img src="images/tab.jpg" alt="iPads" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Earbuds</h6>
                    <p>8 item</p>
                  </div>
                  <img src="images/acc.jpg" alt="Earbuds" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="product-box">
                  <div className="product-content">
                    <h6>Mac-pro</h6>
                    <p>4 item</p>
                  </div>
                  <img src="images/laptop.jpg" alt="Mac-pro" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section common">
        <div className="container">
          <div className="section-title">
            <h2>Our Products</h2>
          </div>
          <div className="row">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </section>
      <section className="special-product-section common">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
          </div>
          <div className="row">
            <Specialproduct />
            <Specialproduct />
            <Specialproduct />
            <Specialproduct />
          </div>
        </div>
      </section>
      <section className="popular-product-section common">
        <div className="container">
          <div className="section-title">
            <h2>Our Popular Products</h2>
          </div>
          <div className="row">
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </div>
        </div>
      </section>
      <section className="famous-product-section common">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="f-box position-relative">
                <img
                  src="images/two-smart-watches-similar-to-apple-watch-mm-space-gray-gold-aluminum-arranged-side-frontal-perspective-black-background-139445607.jpg"
                  alt="smart-watches"
                  style={{ width: "100%" }}
                />
                <div className="f-content text-white">
                  <h6>iSmart Pro.</h6>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="f-box position-relative">
                <img
                  src="images/laptop.jpg"
                  alt="laptops"
                  style={{ width: "100%" }}
                />
                <div className="f-content text-dark">
                  <h6>Laptops</h6>
                  <p>600 nits display with 4k hd display</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="f-box position-relative">
                <img
                  src="images/tab3.jpg"
                  alt="smart-watches"
                  style={{ width: "100%" }}
                />
                <div className="f-content text-dark">
                  <h6>itab Pro.</h6>
                  <p>500 nits display with 4k</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="f-box position-relative">
                <div className="img-wrapper">
                  <img
                    src="images/iphone-12-pro-blue-hero.jpg"
                    alt="iphone12"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="f-content text-dark">
                  <h6>iphone 12</h6>
                  <p>800 nits display with best camera quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marquee-brand-section common">
        <div className="container">
          <div className="brand-wrapper">
            <Marquee className="d-flex">
              <div className="brand-box">
                <img src="images/brand-01.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-02.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-03.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-04.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-05.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-06.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-07.png" alt="brand" />
              </div>
              <div className="brand-box">
                <img src="images/brand-08.png" alt="brand" />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section className="blog-section common">
        <div className="container">
          <div className="section-title">
            <h2>Our letest Blogs</h2>
          </div>
          <div className="row">
            <Blogcard />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
