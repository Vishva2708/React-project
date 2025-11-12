import React from "react";
import { Link } from "react-router-dom";

const Shirt = () => {
  const product = [
    {
      id: "6",
      name: "Lavender Casual Cotton Shirt with Elegant Embroidery for women",
      price: "₹988",
      category: "Shirts",
      image:
        "https://colorsofearth.in/cdn/shop/files/339-02_1.jpg?v=1752312062&width=800",
      images:
        "https://colorsofearth.in/cdn/shop/files/339-02_3.jpg?v=1752312062&width=800",
      size: "M",
      description:
        "This Lavender Casual cotton shirt is a great pick for summer. It’s lightweight, breathable, and designed with 3/4 sleeves for added comfort. The simple, elegant style makes it perfect for both casual and everyday wear, keeping you cool and stylish all day",
    },
    {
      id: "7",
      name: "Women Pink Cotton Blend Plain Regular 3/4 Sleeve Shirt",
      price: "₹689",
      category: "Shirts",
      image:
        "https://colorsofearth.in/cdn/shop/files/334-01_3_front.jpg?v=1749030841&width=800",
      images:
        "https://colorsofearth.in/cdn/shop/files/334-01_1_front.jpg?v=1752311735&width=800",
      size: "S",
      description:
        "This Women Pink Cotton Blend Plain Regular Shirt is a great pick for summer. Its lightweight, breathable, and designed with 3/4 sleeves for added comfort. The simple, elegant style makes it perfect for both casual and everyday wear, keeping you cool and stylish all day",
    },
    {
      id: "8",
      name: "Women's Mint Polyester Plain Regular Full sleeve Shirt",
      price: "₹1360",
      category: "Shirts",
      image:
        "https://colorsofearth.in/cdn/shop/files/329-03_6.jpg?v=1747374982&width=800",
      images:
        "https://colorsofearth.in/cdn/shop/files/329-03_8.jpg?v=1747374982&width=800",
      size: "L",
      description:
        "This Women's Mint Polyester Plain Regular Full sleeve Shirt is a great pick for summer. Its lightweight, breathable, and designed with 3/4 sleeves for added comfort. The simple, elegant style makes it perfect for both casual and everyday wear, keeping you cool and stylish all day",
    },
    {
      id: "9",
      name: "Women Coffee Cotton Blend Plain Regular 3/4 Sleeve Shirt",
      price: "₹1268",
      category: "Shirts",
      image:
        "https://colorsofearth.in/cdn/shop/files/334-02_1.jpg?v=1749031959&width=800",
      images:
        "https://colorsofearth.in/cdn/shop/files/334-02_6.jpg?v=1749031959&width=800",
      size: "XL",
      description:
        "This Women's Coffe cotton Plain Regular Full sleeve Shirt is a great pick for summer. Its lightweight, breathable, and designed with 3/4 sleeves for added comfort. The simple, elegant style makes it perfect for both casual and everyday wear, keeping you cool and stylish all day",
    },
  ];
  const viewcategory = "Shirts";
  return (
    <div>
      <div
        className="container p-3 text-center mb-5"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1500"
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
            Trendy & Little Wear
          </h4>

          <h4
            style={{
              fontFamily: "'Arial', sans-serif",
              fontWeight: "700",
              fontSize: "1.4rem",
              display: "inline-block",
              borderBottom: "3px solid #4CAF50",
              paddingBottom: "5px",
              marginBottom: "10px",
              marginTop: "16px",
            }}
          >
            SHIRTS
          </h4>
        </div>
        <div className="row" style={{ gap: "20px", justifyContent: "center" }}>
          {product.slice(0, 4).map((el, i) => (
           <div
  key={el.id}
  className="product-card"
  style={{
    width: "300px",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    marginBottom: "30px",
    backgroundColor: "#fff",
    transition: "transform 0.3s",
  }}
>
  <Link
    to={`/category/${el.category}/${el.id}`}
    className="product-link"
    style={{
      display: "block",
      borderRadius: "10px",
      overflow: "hidden",
      height: "500px",
      position: "relative",
    }}
  >
    <img
      className="product-img"
      src={el.image}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.4s ease-in-out",
      }}
    />
  </Link>

  <style>
    {`
      .product-card .product-img:hover {
        transform: scale(1.2) rotateY(-1deg);
        filter: brightness(1.1);
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

export default Shirt;
