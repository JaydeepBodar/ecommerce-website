import React from "react";
import Breadcrumb from "../component/Breadcrumb";
import Helmetc from "../component/Helmetc";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import InfoIcon from "@mui/icons-material/Info";
import "./styles/Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <Helmetc title="contact" />
      <Breadcrumb title="contact" />
      <section className="contact-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30696420.237933908!2d64.42375829604823!3d20.087202614040013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1679484833477!5m2!1sen!2sin"
                height="450"
                width="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-data">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-box">
                    <h4>Contact</h4>
                    <div className="form-group">
                      <input type="text" placeholder="Name..." />
                    </div>
                    <div className="form-group">
                      <input type="email" placeholder="Email..." />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Mobile Number..." />
                    </div>
                    <div className="form-group">
                      <textarea rows="5" placeholder="Message..."></textarea>
                    </div>
                    <div className="form-btn">
                      <button className="button">submit</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="address">
                    <h4>Get in Touch with us...</h4>
                    <ul className="address-list">
                      <li>
                        <HomeIcon className="add-icon" />
                        <p>
                          Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                          Bangalore-560016
                        </p>
                      </li>
                      <li>
                        <LocalPhoneIcon className="add-icon" />
                        <p>+91-7858969652</p>
                      </li>
                      <li>
                        <EmailIcon className="add-icon" />
                        <p>demo@gmail.com</p>
                      </li>
                      <li>
                        <InfoIcon className="add-icon" />
                        <p>Monday-Friday 10AM-8PM</p>
                      </li>
                    </ul>
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

export default Contact;
