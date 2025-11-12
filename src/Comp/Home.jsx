import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Shirt from "./Shirt";
import Products from "./Products";
import Girls from "./Girls";
import "aos/dist/aos.css";

const Home = () => {
  // const [state, setState] = useState([]);
  const product = [
    {
      name: "ANARKALISUIT",
      image:
        "https://cdn.shopify.com/s/files/1/0632/9031/0809/files/7_a159d3a4-8390-4ce7-a606-a99362c7797e.png?v=1755089291",
      category: "Anarkali Dress",
    },
    {
      name: "KURTA-DUPPATA-SET",
      image:
        "https://cdn.shopify.com/s/files/1/0632/9031/0809/files/485-01_3_3444d252-674d-4fc2-a8e5-3f9fb346bd40.jpg?v=1755250989",
      category: "Anarkali Dress",
    },
    {
      name: "KURTA-SET",
      image:
        "https://cdn.shopify.com/s/files/1/0632/9031/0809/files/454-01_1.jpg?v=1741241334",
      category: "Kurta Set",
    },
    {
      name: "CO-ORD SET",
      image:
        "https://cdn.shopify.com/s/files/1/0632/9031/0809/files/536-04_4.jpg?v=1742278025",
      category: "Kurta Set",
    },
    {
      name: "SHIRT",
      image:
        "https://cdn.shopify.com/s/files/1/0632/9031/0809/files/336-06_3.jpg?v=1750841226",
      category: "Shirts",
    },
    {
      name: "GIRLS",
      image:
        "https://cdn.shopify.com/s/files/1/0632/9031/0809/files/K-7301_8.jpg?v=1755601616",
      category: "Girls",
    },
  ];

  return (
    <div>
      {/* 🛍 Categories */}
      <div className="container p-3 my-3 text-center mt-5">
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
          className="fw-bold text-uppercase d-inline-block position-relative pb-2"
          style={{
            color: "#b5651d",
            borderBottom: "3px solid #b5651d",
            letterSpacing: "1px",
            fontFamily: "quicksand",
          }}
        >
          SHOP BY CATEGORIES
        </h2>
        <h5
          className="mt-3 text-muted"
          style={{ letterSpacing: "0.5px", fontFamily: "quicksand" }}
        >
          Explore Collection
        </h5>
        <div
          className="row"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
          style={{
            backgroundColor: "white",
          }}
        >
          {product.map((itm, i) => (
            <div
  key={i}
  className="col-lg-4 p-3"
>
  <Link
    to={itm.category}
    style={{
      display: "block",
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative",
      height: "400px",
    }}
  >
    <img
      className="zoom-img"
      src={itm.image}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.5s ease-in-out",
      }}
    />
    <p
      style={{
        position: "absolute",
        textAlign: "center",
        bottom: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255,255,255,0.9)",
        width: "80%",
        padding: "8px 10px",
        borderRadius: "8px",
        fontSize: "14px",
        fontWeight: "500",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {itm.name}
    </p>
  </Link>

  <style>
    {`
      .zoom-img:hover {
        transform: scale(1.2);
      }
    `}
  </style>
</div>
          ))}
        </div>
      </div>
      <Products />
      {/* Banner */}
      <div className="Container-fluid mt-5" style={{ overflow: "hidden" }}>
        <div
          className="mt-4 mb-4"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="1800"
        >
          <img
            src="https://colorsofearth.in/cdn/shop/files/89_Banner.jpg?v=1757336226&width=2000"
            className="img-fluid w-100"
            style={{ height: "400px", objectFit: "cover" }}
            alt="Banner"
          />
        </div>
        <Shirt />
        <Girls />
        {/* Video */}
        <div className="mt-4 mb-5 text-center" data-aos="flip-up"  >
          <h3
            className="fw-bold text-uppercase d-inline-block position-relative pb-2"
            style={{
              color: "#b5651d",
              borderBottom: "3px solid #b5651d",
              letterSpacing: "1px",
            }}
          >
            SHOP BY NEW ARRIVALS
          </h3>

          <h5
            className="mt-3 text-muted fst-italic"
            style={{
              fontFamily: "Poppins, sans-serif",
              letterSpacing: "0.5px",
              marginBottom: "30px",
            }}
          >
            Summer Wear
          </h5>
          <video
            controls
            style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
          >
            <source
              src="https://colorsofearth.in/cdn/shop/videos/c/vp/3fa91b44e746490f8099797871830538/3fa91b44e746490f8099797871830538.HD-1080p-7.2Mbps-46224122.mp4?v=0"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Newsletter */}
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
           data-aos-delay="1500"
          style={{
            background: "rgba(144, 238, 144, 0.5)",
            padding: "40px 10px"
          }}
        >
          <div className="Container-fluid">
            <div className="row text-center gy-4 align-items-center">
              <div className="col-lg-4 col-md-6">
                <p className=" mb-2">Sign Up & Save</p>
                <h5 className="mb-3">
                  Join Our Newsletter for Exclusive Offers
                </h5>
                <p>Don't miss out on exclusive offers and updates.</p>
              </div>

              <div className="col-lg-4 col-md-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="mb-3 p-2 rounded"
                  style={{ maxWidth: "400px" }}
                />
                <button className="btn btn-success p-2 ms-2">SUBSCRIBE</button>
              </div>

              <div className="col-lg-4 col-md-6">
                <h5 className="mt-2">Celebrate every shade of you</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          className="row p-3 text-center mt-5 mb-4 gy-4"
          data-aos="flip-down"
           data-aos-delay="1500"
        >
          <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in-up">
            <img
              src="https://colorsofearth.in/cdn/shop/files/Free_Return_-_Exchange_1.png?v=1743233152&width=130"
              className="img-fluid mx-auto d-block"
              style={{ height: "100px", objectFit: "contain" }}
              alt="Feature 1"
            />
            <h6>FREE RETURN-EXCHANGE</h6>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in-up">
            <img
              src="https://colorsofearth.in/cdn/shop/files/100000_Happy_Cusomer_1.png?v=1743233210&width=130"
              className="img-fluid mx-auto d-block"
              style={{ height: "100px", objectFit: "contain" }}
              alt="Feature 2"
            />
            <h6>100000+ HAPPY CUSTOMER</h6>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in-up">
            <img
              src="https://colorsofearth.in/cdn/shop/files/MaDE_IN_INDIA_1.png?v=1743233195&width=130"
              className="img-fluid mx-auto d-block"
              style={{ height: "100px", objectFit: "contain" }}
              alt="Feature 3"
            />
            <h6>MADE IN INDIA</h6>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="zoom-in-up">
            <img
              src="https://colorsofearth.in/cdn/shop/files/cash-on-delivery_1.png?v=1743233165&width=130"
              className="img-fluid mx-auto d-block"
              style={{ height: "100px", objectFit: "contain" }}
              alt="Feature 4"
            />
            <h6>CASH ON DELIVERY</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
