import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f2f2f2d3", padding: "50px 20px" }}>
      <div className="container">
        <div className="row text-start gy-4">
          {/* Column 1 */}
          <div
            className="col-lg-3 col-md-6"
            style={{ fontFamily: "Quicksand, sans-serif" }}
          >
            <h5 className="mb-3">COE_FASHION</h5>
            <p className="mb-2">
              Discover quality, style, and affordability in every piece, crafted
              with love from Colors of Earth.
            </p>
            <a href="#" style={{ color: "green", textDecoration: "underline" }}>
              Learn More
            </a>
            <div className="d-flex justify-content-start gap-3 p-2 mt-4">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-facebook fs-3 p-1 text-dark border border-dark shadow-sm square-icon"></i>
              </Link>
              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-instagram fs-3 p-1 text-dark border border-dark shadow-sm square-icon"></i>
              </Link>

              <Link
                to="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-pinterest fs-3 p-1 text-dark border border-dark shadow-sm square-icon"></i>
              </Link>

              <Link
                to="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <i className="fa-brands fa-youtube fs-3  p-1 text-dark border border-dark shadow-sm square-icon"></i>
              </Link>
            </div>
          </div>

          {/* Column 2 */}
          <div
            className="col-lg-3 col-md-6"
            style={{ fontFamily: "Delius, cursive" }}
          >
            <h5 className="mb-3">COMPANY</h5>
            <ul className="list-unstyled">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact us</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">FAQ</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div
            className="col-lg-3 col-md-6"
            style={{ fontFamily: "Delius, cursive" }}
          >
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Shipping Policy</li>
              <li className="mb-2">Return & Exchange Policy</li>
              <li className="mb-2">Track Orders</li>
              <li className="mb-2">Raise Return</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div
            className="col-lg-3 col-md-6"
            style={{ fontFamily: "Delius, cursive" }}
          >
            <h5 className="mb-3">Customer Care</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Time: 10 AM to 7 PM</li>
              <li className="mb-2">(Mon - Sat)</li>
              <li className="mb-2">WhatsApp: +91 82004 04030</li>
            </ul>
          </div>
          <div
            className="p-2"
            style={{
              display: "flex",
              borderTop: "1px solid black",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Designed & Crafted in India © 2025 Colors of Earth</p>

            <a href="#top">
              <button
                className="fs-4 p-2"
                style={{
                  marginBottom: "24px",
                  borderBottom:'1px solid green',
                  fontFamily:'delius',
                  width: "200px",
                  height: "20px",
                  zIndex: 1000,
                  border: "none",
                }}
              >
                Back to Top
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
