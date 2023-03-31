import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-details">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-5">
                  <div className="fotter-news-box">
                    <img
                      src="images/newsletter.png"
                      alt="message-img"
                      className="img-s"
                    />
                    <h4>Sign up for Newsletter </h4>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="email-box">
                  <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#232f3e",color:'#f2f2f2' }}
                    id="basic-addon2"
                  >
                  Subscribe
                  </span>
                </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-6">
                <div className="f-add">
                  <h5>Contact us</h5>
                  <p>
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                    Bangalore-560016
                  </p>
                  <div className="social-icon">
                    <ul>
                      <li className="icon-list">
                        <Link to="">
                          <InstagramIcon className="icon-s" />
                        </Link>
                      </li>
                      <li className="icon-list">
                        <Link to="">
                          <PinterestIcon className="icon-s" />
                        </Link>
                      </li>
                      <li className="icon-list">
                        <Link to="">
                          <YouTubeIcon className="icon-s" />
                        </Link>
                      </li>
                      <li className="icon-list">
                        <Link to="">
                          <LinkedInIcon className="icon-s" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="footer-box">
                  <h5>Information</h5>
                  <div className="footer-link">
                    <Link to="">Privacy and policy</Link>
                    <Link to="">Refund Policy</Link>
                    <Link to="">Shoping policy</Link>
                    <Link to="">Terms of Service</Link>
                    <Link to="/blog">Blogs</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-6">
                <div className="footer-box">
                  <h5>Accounts</h5>
                  <div className="footer-link">
                    <Link to="">Search</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="">Faq</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="">Size chart</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="footer-box">
                  <h5>Quicklink</h5>
                  <div className="footer-link">
                    <Link to="">Accessories</Link>
                    <Link to="">Laptops</Link>
                    <Link to="">Headphones</Link>
                    <Link to="">Smart Watches</Link>
                    <Link to="">Tablets</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-center mb-0">
            &copy; {new Date().getFullYear()} Powered by developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
