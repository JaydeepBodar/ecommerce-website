import React from "react";
import './styles/Blogcard.css'
const Blogcard = () => {
  return (
    <div className="col-lg-3">
      <div className="blog-box">
        <div className="blog-img">
          <img src="images/blog-1.jpg" alt="blog-img" />
        </div>
        <div className="blog-content">
          <h6>Date : 1,March 2023</h6>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.
          </p>
          <button className="button">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
