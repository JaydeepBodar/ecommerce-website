import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Breadcrumb from "../component/Breadcrumb";
import Helmetc from "../component/Helmetc";
import "./styles/blog.css";
const Singleblog = () => {
  const { id } = useParams();
  const [blog, setblog] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/posts/${id}`)
      .then((response) => setblog(response.data));
  }, []);
  return (
    <React.Fragment>
      <Helmetc title="dynamic-blog" />
      <Breadcrumb title="dynamic-blog" />
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
              <div className="blog-box">
                <div className="blog-img">
                  <img src="images/blog-1.jpg" alt="blog-img" />
                </div>
                <div className="blog-content">
                  <h5>User id:- {blog.userId}</h5>
                  <h5>Blog Title :- {blog.title}</h5>
                  <h6>Description :- {blog.body}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Singleblog;
