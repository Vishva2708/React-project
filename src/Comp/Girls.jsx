import React from "react";
import { Link } from "react-router-dom";

const Girls = () => {
  const girls = [
    {
      id: "3",
      name: "Wine Embroidered Georgette Top, Plazoo Shurg Set for girls",
      price: "₹1899",
      category: "Girls",
      image:
        "https://colorsofearth.in/cdn/shop/files/K-6802_1.jpg?v=1755255835&width=800",
      size: "S",
    },
    {
      id: "4",
      name: "Sky Blue Polyester Embroidered Peplum & Palazzo Set for Girls",
      price: "₹1449",
      category: "Girls",
      image:
        "https://colorsofearth.in/cdn/shop/files/K-7302_2.jpg?v=1755602508&width=800",
      size: "L",
    },
    {
      id: "5",
      name: "Violet Georgette Embroidered Kurta Plazzo & Dupatta Set for Girls",
      price: "₹1278",
      category: "Girls",
      image:
        "https://colorsofearth.in/cdn/shop/files/K-7702_7.jpg?v=1757056775&width=800",
      size: "M",
    },
    {
      id: "6",
      name: "Teal Blue Georgette Embroidered Kurta & Pant Set for Girls",
      price: "₹1589",
      category: "Girls",
      image:
        "https://colorsofearth.in/cdn/shop/files/K-6101_6.jpg?v=1755754071&width=800",
      size: "XL",
    },
  ];

  const viewcategory = "Girls";

  return (
    <div>
      <div
        className="container p-3 text-center mb-5"
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
              data-aos="flip-up"
               data-aos-delay="1500"
          >
            Stylish & Comfortable Collection
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
           data-aos="zoom-in-down"
            data-aos-delay="1500"
          >
            GIRLS
          </h4>
        </div>

        <div className="row" style={{ gap: "20px", justifyContent: "center" }}>
          {girls.slice(0, 4).map((el) => (
            <div
              key={el.id}
              className="product-card"
               data-aos="zoom-out-down"
            data-aos-delay="1500"
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
                    transition:
                      "transform 0.4s ease-in-out, filter 0.4s ease-in-out",
                  }}
                />
              </Link>

              <style>
                {`
      /* Alag classname hover effect */
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

export default Girls;
