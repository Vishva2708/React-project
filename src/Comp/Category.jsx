import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Category = () => {
  const [state, setState] = useState([]);
  const [price, setPrice] = useState("all");
  const [color, setColor] = useState("all");
  const [sort, setSort] = useState("default");
  const { category } = useParams();

  useEffect(() => {
    async function fetchapi() {
      try {
        const info = await axios.get(`http://localhost:3000/${category}`);
        setState(info.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchapi();
  }, [category]);

  // Get unique colors (using "specification" from your JSON)
  const uniqueColors = [...new Set(state.map((item) => item.specification))];

  // Filter products by price and color
  const filteredProducts = state.filter((item) => {
    // Price filter
    let priceCheck = true;
    if (price !== "all") {
      const [min, max] = price.split("-");
      const itemPrice = Number(item.price?.replace(/[^0-9]/g, "")) || 0;
      if (!isNaN(itemPrice)) {
        priceCheck = itemPrice >= Number(min) && itemPrice <= Number(max);
      }
    }

    // Color filter
    let colorCheck = true;
    if (color && color !== "all") {
      colorCheck = item.specification?.toLowerCase() === color.toLowerCase();
    }

    return priceCheck && colorCheck;
  });
  const sortedProducts = [...filteredProducts];
  if (sort === "az") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "za") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="container my-4 mt-5">
      <div className="row " data-aos="zoom-in-down">
        {/* FILTER SECTION */}
        <div className="col-md-3" style={{ marginTop: "80px" }}>
          <h4 className="text-success border-bottom border-success pb-2">
            Filters
          </h4>

          {/* Price Filter */}
          <div className="mb-3" style={{ marginTop: "30px" }}>
            <label className="form-label fw-semibold">Price</label>
            <select
              className="form-select"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            >
              <option value="all">All</option>
              <option value="0-1000">0 - 1000</option>
              <option value="1000-2000">1000 - 2000</option>
              <option value="2000-3000">2000 - 3000</option>
              <option value="3000-4000">3000 - 4000</option>
            </select>
          </div>

          {/* Color Filter */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Color</label>
            <select
              className="form-select"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            >
              <option value="all">All</option>
              {uniqueColors.map((clr, i) => (
                <option key={i} value={clr}>
                  {clr}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Sort By</label>
            <select
              className="form-select"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="default">Default</option>
              <option value="az">A - Z</option>
              <option value="za">Z - A</option>
            </select>
          </div>
        </div>

        {/* PRODUCT SECTION */}
        <div className="col-md-9" style={{ marginTop: "50px" }}>
          <h3
            className="text-center fw-bold text-uppercase mt-5 ms-5 mb-3 p-2"
            style={{
              fontFamily: "delius",
              display: "inline-block",
              borderBottom: "2px solid green",
              color: "green",
              letterSpacing: "1px",
            }}
          >
            Categories
          </h3>
          <div className="d-flex flex-wrap justify-content-start">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((el, i) => (
                <div
                  key={i}
                  className="p-2"
                  style={{ width: "30%", margin: "1%" }}
                >
                  <div
                    className="card h-100 shadow-sm img-hover-card"
                    style={{ overflow: "hidden", borderRadius: "8px" }}
                  >
                    <Link
                      to={`/${el.category}/${el.id}`}
                      style={{ display: "block", overflow: "hidden" }}
                    >
                      <img
                        src={el.image}
                        alt={el.name}
                        className="hover-img img-fluid"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          transition:
                            "transform 0.4s ease-in-out, filter 0.4s ease-in-out",
                        }}
                      />
                    </Link>
                    <div className="card-body">
                      <h6 className="card-title">{el.name}</h6>
                      <p className="card-text mb-1">
                        <strong>Price:</strong> {el.price}
                      </p>
                      <p className="card-text mb-1">
                        <strong>Color:</strong> {el.specification}
                      </p>
                      <p className="card-text">
                        <strong>Category:</strong> {el.category}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-muted text-center w-100">
                No products found matching your filters.
              </p>
            )}
          </div>
       <style>
    {`
      .img-hover-card .hover-img:hover {
        transform: scale(1.1) rotateY(-1deg);
        filter: brightness(1.1);
      }
    `}
  </style>
        </div>
      </div>
       
    </div>
  );
};

export default Category;
