import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./styles/Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="container">
          <div className="top-nav">
            <div className="row">
              <div className="col-lg-6">
                <p className="mb-0">free shiping above 500 Rupees</p>
              </div>
              <div className="col-lg-6 text-end">
                <a href="#" className="text-white">
                  +917878909045
                </a>
              </div>
            </div>
          </div>
          <div className="main-nav">
            <div className="row">
              <div className="col-lg-2">
                <h2>DevShop</h2>
              </div>
              <div className="col-lg-4 pt-2">
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Product..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text"
                    style={{ backgroundColor: "#febd69" }}
                    id="basic-addon2"
                  >
                    <SearchIcon />
                  </span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="user-link">
                  <Link>
                    <div className="c-user">
                      <img
                        src="images/compare.svg"
                        alt="compare-logo"
                        width="30px"
                        height="30px"
                      />
                      <p>Compare Product</p>
                    </div>
                  </Link>
                  <Link>
                    <div className={["c-user"]}>
                      <img
                        src="images/wishlist.svg"
                        alt="compare-logo"
                        width="30px"
                        height="30px"
                      />
                      <p>Favourite whichlist</p>
                    </div>
                  </Link>
                  <Link>
                    <div className={["c-user"]}>
                      <img
                        src="images/user.svg"
                        alt="compare-logo"
                        width="30px"
                        height="30px"
                      />
                      <p>Log in My Account</p>
                    </div>
                  </Link>
                  <Link>
                    <div className={["c-user"]}>
                      <img
                        src="images/cart.svg"
                        alt="compare-logo"
                        width="30px"
                        height="30px"
                      />
                      <span>
                        <p className={["quantity"]}>0</p>
                        <p>$0.00</p>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bottom-nav">
          <div className="container">
            <div className="categories">
              <div class="dropdown">
                <a
                  class="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="menu-img">
                    <img src="images/menu.svg" alt="menu-logo" />
                  </span>
                  Shoping categories
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-link">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/ourstore">Our Store</NavLink>
                <NavLink to="/contact">contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
