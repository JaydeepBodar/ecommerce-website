import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./styles/Blogcard.css";
const Blogcard = () => {
  const location = useLocation();
  const [blog, setblog] = useState([]);
  const[loading,setloading]=useState(true)
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => setblog(response.data.posts));
  }, []);
  return (
    <>
      {loading && <h4 style={{textAlign:'center',margin:'10px 0'}}>Loading</h4>}
      {!loading && location.pathname==='/blog' ? blog.slice(0, 10).map((value) => {
        const { title, body,id } = value;
        return (
          <div
            className='col-lg-6'
          >
            <div className="blog-box">
              <div className="blog-img">
                <img src="images/blog-1.jpg" alt="blog-img" />
              </div>
              <div className="blog-content">
                <h6>{title}</h6>
                <p>{body.slice(0,100)}</p>
                <Link
                  to={location.pathname === '/' ? `homeblog/${id}` : `/blog/${id}`}
                  className="button"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      }): blog.slice(0,4).map((value)=>{
        return (
          <div
            className="col-lg-3"
          >
            <div className="blog-box">
              <div className="blog-img">
                <img src="images/blog-1.jpg" alt="blog-img" />
              </div>
              <div className="blog-content">
                <h6>{value.title}</h6>
                <p>{value.body.slice(0,80)}</p>
                <Link
                  to={location.pathname === "/" ? `homeblog/${value.id}` : `/blog/${value.id}`}
                  className="button"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blogcard;
