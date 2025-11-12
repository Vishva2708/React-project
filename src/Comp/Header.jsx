import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { myContext } from "./Usecontext";

function Header() {
  const { showName, setShowName } = useContext(myContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const cartitm = useSelector((store) => store);
  const count = cartitm.length;

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setShowName(false);
    navigate("/login");
  };

  // Live search
  useEffect(() => {
    if (!search.trim()) {
      setSearchResult([]);
      return;
    }
    async function fetchApi() {
      try {
        const res = await axios.get("http://localhost:3000/data");
        const filtered = res.data.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResult(filtered);
      } catch (err) {
        console.log("Error fetching:", err);
      }
    }
    fetchApi();
  }, [search]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3 d-flex justify-content-between align-items-center">
        <button
          className="btn btn-outline-secondary me-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuOffcanvas"
          aria-controls="menuOffcanvas"
        >
          <i className="fa-solid fa-bars fs-4 text-dark"></i>
        </button>

        <div className="flex-grow-1 mt-2 ms-4 d-flex justify-content-center">
          <span
            className="navbar-brand text-success fw-semibold"
            style={{
              fontFamily: "'Delius', cursive",
              fontSize: "1.8rem",
              letterSpacing: "1px",
              textAlign: "center",
            }}
          >
            Colors of Earth
          </span>
        </div>

        <div>
          {/* Search */}
          <i
            className="fa-solid fa-magnifying-glass fs-4 mt-3 text-center mb-2 me-4 ms-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#searchOffcanvas"
            aria-controls="searchOffcanvas"
            style={{ cursor: "pointer" }}
          ></i>

          {/* User */}
          <i
            className="fa-solid fa-user fs-4 mb-2 mt-3 me-4 text-center"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/login")}
          ></i>

          {/* Cart */}
          <Link
            to="/Cart"
            className="position-relative text-dark mb-2 mt-3 me-4"
            style={{ textDecoration: "none" }}
          >
            <i className="fa-solid fa-cart-shopping fs-4 text-center"></i>
            {count > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {count}
              </span>
            )}
          </Link>

          {/* Logout */}
          {showName && (
            <>
              <span className="fs-5">{showName}</span>
              <button
                className="btn btn-danger btn-md me-4 ms-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Carousel on homepage */}
      {location.pathname === "/" && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ marginTop: "80px", overflow: "hidden" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div
              className="carousel-item active hover-zoom"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <img
                src="https://colorsofearth.in/cdn/shop/files/81_Banner.jpg?v=1755092509&width=2000"
                className="d-block w-100"
                alt="First Slide"
              />
            </div>
            <div
              className="carousel-item hover-zoom"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <img
                src="https://colorsofearth.in/cdn/shop/files/90_Banner.jpg?v=1757315351&width=2000"
                className="d-block w-100"
                alt="Second Slide"
              />
            </div>
            <div
              className="carousel-item hover-zoom"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <img
                src="https://colorsofearth.in/cdn/shop/files/87_Banner.jpg?v=1756279438&width=2000"
                className="d-block w-100"
                alt="Third Slide"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

      <style>
        {`
    /* Image Hover Zoom */
    .hover-zoom img {
      transition: transform 0.8s ease, filter 0.5s ease;
    }
    .hover-zoom:hover img {
      transform: scale(1.05);
      filter: brightness(0.95);
    }

    /* Carousel Shadow & Smooth Corners */
    #carouselExampleIndicators {
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }

    /* Buttons Glow Effect */
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.8));
    }
  `}
      </style>

      {/* Search Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="searchOffcanvas"
        aria-labelledby="searchOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="searchOffcanvasLabel">Search Products</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="search d-flex mb-3">
            <input
              type="text"
              className="form-control p-2"
              placeholder="Search for products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {searchResult.length > 0 ? (
            searchResult.map((item) => (
              <div
                key={item.id}
                className="border-bottom p-2"
                data-bs-dismiss="offcanvas"
              >
                <Link
                  to={`/${item.category}/${item.id}`}
                  className="text-dark text-decoration-none d-flex align-items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    width="60"
                    height="60"
                    className="me-2 rounded"
                  />
                  <span>{item.name}</span>
                </Link>
              </div>
            ))
          ) : search.trim() ? (
            <p className="text-danger">No products found.</p>
          ) : (
            <p className="text-muted">Type product name to search...</p>
          )}
        </div>
      </div>

      {/* Menu Offcanvas */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="menuOffcanvas"
        aria-labelledby="menuOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body p-3">
          <ul className="navbar-nav flex-column gap-2">
            <li className="nav-item border-bottom pb-2">
              <Link
                to="/home"
                className="nav-link link-dark fw-semibold"
                data-bs-dismiss="offcanvas"
              >
                HOME
              </Link>
            </li>

            {/* Dropdown Category Menu */}
            <li className="nav-item dropdown border-bottom pb-2">
              <a
                className="nav-link dropdown-toggle link-dark fw-semibold"
                href="#"
                id="dropdownMenuCategory"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORIES
              </a>
              <ul className="dropdown-menu border-0 shadow-sm">
                <li>
                  <Link
                    to="/Anarkali Dress"
                    className="dropdown-item"
                    data-bs-dismiss="offcanvas"
                  >
                    Anarkali Dress
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shirt"
                    className="dropdown-item"
                    data-bs-dismiss="offcanvas"
                  >
                    Shirts
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Kurta Set"
                    className="dropdown-item"
                    data-bs-dismiss="offcanvas"
                  >
                    Kurta Set
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Girls"
                    className="dropdown-item"
                    data-bs-dismiss="offcanvas"
                  >
                    Girls
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item border-bottom pb-2">
              <Link
                to="/festival-sale"
                className="nav-link link-dark fw-semibold"
                data-bs-dismiss="offcanvas"
              >
                FESTIVAL FLASH SALE 80% OFF
              </Link>
            </li>
            <li className="nav-item border-bottom pb-2">
              <Link
                to="/contact"
                className="nav-link link-dark fw-semibold"
                data-bs-dismiss="offcanvas"
              >
                CONTACT US
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link link-dark fw-semibold"
                data-bs-dismiss="offcanvas"
              >
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
