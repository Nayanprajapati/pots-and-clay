import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchProducts } from "../../Api/Api"; // Assuming this API returns the search results
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [search, setSearchValue] = useState("");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleAdminClick = () => {
    navigate("/admin/dashboard");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    try {
      const result = await searchProducts(search); // Assuming searchProducts is a properly implemented API call
      if (result.data.products && result.data.products.length > 0) {
        navigate(`/search?query=${search}`);
      } else {
        toast.error("No products found");
      }
    } catch (error) {
      toast.error("An error occurred during the search");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/Assets/pots_logo.png"
            alt="Brand logo"
            className="navbar-logo"
            style={{ height: "70px", width: "auto" }}
          />
          <Link to="/Homepage" style={{ color: "black", fontSize: "20px" }}>
            Pots and Clay
          </Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex me-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="text"
              id="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success me-2" type="submit">
              Search
            </button>
          </form>
          <div className="Cart" style={{ marginRight: "20px" }}>
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} size="2x" />
            </Link>
          </div>
          <form className="d-flex" role="search">
            {user ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Welcome, {user.firstName}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  {user.isAdmin && (
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleAdminClick}
                      >
                        Admin
                      </button>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item"
                      href="#"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link
                  to="/register"
                  className="btn btn-outline-danger me-2"
                  type="submit"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="btn btn-outline-success"
                  type="submit"
                >
                  Login
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </nav>
  );
};

export default Navbar;
