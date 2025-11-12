import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const product = [
    {
      id: "5",
      name: "Purple Embroidered Silk Anarkali Kurta With Dupatta Set",
      price: "₹3089",
      category: "Anarkali Dress",
      image:
        "https://colorsofearth.in/cdn/shop/files/423-02_5_9eb60f57-4232-4d1b-b02f-f52542dec0c4.jpg?v=1751888166&width=800",
    },
    {
      id: "6",
      name: "Rama Embroidered Silk Anarkali Kurta With Dupatta Set",
      price: "₹2559",
      category: "Anarkali Dress",
      image:
        "https://colorsofearth.in/cdn/shop/files/471-03_4.jpg?v=1744450550&width=800",
    },
    {
      id: "7",
      name: "Gold Embroidered Silk Blend Anarkali Kurta With Dupatta Set",
      price: "₹1999",
      category: "Anarkali Dress",
      image:
        "https://colorsofearth.in/cdn/shop/files/444-06_3.jpg?v=1747378637&width=800",
    },
    {
      id: "8",
      name: "Violet Embroidered Silk Blend Anarkali Kurta With Dupatta Set",
      price: "₹2559",
      category: "Anarkali Dress",
      image:
        "https://colorsofearth.in/cdn/shop/files/444-03_3.jpg?v=1737546797&width=800",
    },
  ];
  const viewcategory = "Anarkali Dress";

  return (
    <div>
      <div
        className="container p-3 text-center mb-5"
        data-aos="fade-down"
           data-aos-duration="1000"
          data-aos-delay="1700"
        data-aos-offset="0"
      >
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h4
            style={{
              fontFamily: "'Arial', sans-serif",
              fontWeight: "300",
              fontSize: "1.2rem",
              color: "#4CAF50",
              marginBottom: "5px",
              textTransform: "uppercase",
            }}
          >
            Elegant & Traditional
          </h4>

          <h2
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: "700",
              fontSize: "1.4rem",
              display: "inline-block",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "5px",
              marginBottom: "10px",
              marginTop: "25px",
            }}
          >
            ANARKALI DRESS
          </h2>
        </div>
       <div className="row" style={{ gap: "20px", justifyContent: "center" }}>
          {product.slice(0, 4).map((el, i) => (
            <div
  className="col-lg-3 col-md-4 col-sm-6 mb-5 product-card"
  key={el.id}
  style={{
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "transform 0.4s",
    backgroundColor: "#fff",
    textAlign: "center",
  }}
>
  <Link
    to={`/category/${el.category}/${el.id}`}
    style={{
      display: "block",
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative",
      height: "500px",
    }}
  >
    <img
      className="product-img"
      src={el.image}
      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease-in-out" }}
    />
  </Link>

  <style>
    {`
      .product-card .product-img:hover {
        transform: scale(1.2) rotate(2deg);
        filter: grayscale(20%);
      }
    `}
  </style>

  <p style={{ fontWeight: "500", marginTop: "10px" }}>{el.name}</p>
  <p style={{ color: "#4CAF50", fontWeight: "600" }}>{el.price}</p>
</div>

          ))}
        </div>

        <Link to={`/category/${viewcategory}`}>
          <button
            style={{
              padding: "10px 30px",
              borderRadius: "6px",
              fontSize: "1.1rem",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
