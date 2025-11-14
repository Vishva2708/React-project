import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { myaction } from "./Reduxcart/Action";

const Productinfo = () => {
  const [state, setState] = useState({});
  const [related, setRelated] = useState([]);
  const [size, setSize] = useState(() => {
    return localStorage.getItem("selectedSize") || "";
  });

  const { category, id } = useParams();
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchapi();
  }, [category, id])

  async function fetchapi() {
    try {
      // 1. Read complete db.json
      const res = await axios.get("/db.json");
      const data = res.data;

      // 2. Get category array
      const key = category;                      // e.g. "Kurta Set"
      const categoryArray = data[key] || [];     // All items of category

      // 3. Find product with matching ID
      const product = categoryArray.find((el) => String(el.id) === String(id));

      setState(product || {});
      setRelated(categoryArray); // all products of same category
    } catch (error) {
      console.log("Error loading product:", error);
    }
  }

  // async function fetchapi() {
  //   const info = await axios.get(`http://localhost:3000/${category}/${id}`);
  //   const detail = await axios.get(`http://localhost:3000/${category}`);
  //   setState(info.data);
  //   setRelated(detail.data);
  // }

  const filtercategory = related.filter(
    (itm) => itm.category === state.category && itm.id !== state.id
  );

  function handleadd() {
    dispatch(myaction(state));
    alert("Added to Cart!");
    navigate("/cart");
  }

  function handlerelated(el) {
    navigate(`/${el.category}/${el.id}`);
  }
  return (
    <>
      <div
        className="container mt-5"
        style={{ fontFamily: "'Quicksand', sans-serif" }}
      >
        <h1
          className="text-center mb-5"
          style={{
            fontFamily: "'Delius', cursive",
            marginTop: "40px",
            display: "inline-block",
            borderBottom: "2px solid green",
            textAlign: "center",
          }}
        >
          Product Details
        </h1>

        <div className="row g-3">
          <div
            className="col-lg-6"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="row">
              <div
                className="col-6 mb-3"
                style={{ overflow: "hidden", borderRadius: "10px" }}
              >
                <img
                  src={state.image}
                  className="img-fluid hover-img shadow-sm"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                />
              </div>
              <div
                className="col-6 mb-3"
                style={{ overflow: "hidden", borderRadius: "10px" }}
              >
                <img
                  src={state.images}
                  className="img-fluid hover-img shadow-sm"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                />
              </div>
              <div
                className="col-6 mb-3"
                style={{ overflow: "hidden", borderRadius: "10px" }}
              >
                <img
                  src={state.imaging}
                  className="img-fluid hover-img shadow-sm"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                />
              </div>
              <div
                className="col-6 mb-3"
                style={{ overflow: "hidden", borderRadius: "10px" }}
              >
                <img
                  src={state.imager}
                  className="img-fluid hover-img shadow-sm"
                  style={{
                    height: "400px",
                    width: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease, filter 0.4s ease",
                  }}
                />
              </div>
            </div>

            <style>
              {`
    .hover-img:hover {
      transform: scale(1.1) rotateY(-1deg);
      filter: brightness(1.1);
    }
  `}
            </style>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-easing="ease-in-sine"
            className="col-lg-6 p-5 rounded"
            style={{
              boxShadow: "0 4px 7px rgba(0,0,0,0.1)",
              backgroundColor: "#ffffffff",
            }}
          >
            <h3 className="mb-4 mt-4">{state.name}</h3>
            <h5 className="mb-4">Price: {state.price}</h5>
            <div className="text-success mb-4">★★★★★</div>
            <h6 className="mb-4">Category: {state.category}</h6>

            {/* Sizes */}
            <div className="d-flex gap-2 mb-4 flex-wrap">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  className={`btn btn-outline-dark rounded ${
                    size === sz ? "active" : ""
                  }`}
                  onClick={() => {
                    setSize(sz);
                    localStorage.setItem("selectedSize", sz);
                  }}
                >
                  {sz}
                </button>
              ))}
            </div>

            {/* Accordion for Description */}
            <div className="container mt-4">
              <div
                className="accordion accordion-flush"
                id={`productAccordionFlush-${id}`}
              >
                {/* Specification Section */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`flush-headingSpec-${id}`}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseSpec-${id}`}
                      aria-expanded="true"
                      aria-controls={`flush-collapseSpec-${id}`}
                    >
                      Specification
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseSpec-${id}`}
                    className="accordion-collapse collapse show"
                    aria-labelledby={`flush-headingSpec-${id}`}
                    data-bs-parent={`#productAccordionFlush-${id}`}
                  >
                    <div className="accordion-body">
                      <h6>
                        <strong>Color:</strong> {state.specification}
                      </h6>
                      <h6>
                        <strong>Fabric:</strong> {state.Fabric}
                      </h6>
                      <h6>
                        <strong>Shape:</strong> {state.Shape}
                      </h6>
                      <h6>
                        <strong>Pattern:</strong> {state.Patern}
                      </h6>
                      <h6>
                        <strong>Length:</strong> {state.Length}
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Product Description */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`flush-headingDesc-${id}`}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseDesc-${id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapseDesc-${id}`}
                    >
                      Product Description
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseDesc-${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-headingDesc-${id}`}
                    data-bs-parent={`#productAccordionFlush-${id}`}
                  >
                    <div className="accordion-body">
                      {state.description || "No description available."}
                    </div>
                  </div>
                </div>

                {/* Styling Suggestion */}
                <div className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`flush-headingStyle-${id}`}
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapseStyle-${id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapseStyle-${id}`}
                    >
                      Styling Suggestion
                    </button>
                  </h2>
                  <div
                    id={`flush-collapseStyle-${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-headingStyle-${id}`}
                    data-bs-parent={`#productAccordionFlush-${id}`}
                  >
                    <div className="accordion-body">
                      {state["Styling Suggestion"] ||
                        "No styling suggestion available."}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="btn btn-success w-100 p-3 mt-5"
              onClick={handleadd}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2
          className="text-center mb-5 mt-5"
          style={{
            fontFamily: "'karla'",
            display: "inline-block",
            borderBottom: "2px solid green",
            textAlign: "center",
          }}
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1900"
        >
          You may also like
        </h2>
        <div className="row">
          {filtercategory.slice(0, 4).map((el) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={el.id}>
              <div
                className="cursor-pointer shadow-sm rounded p-2 card-hover"
                onClick={() => handlerelated(el)}
              >
                <img
                  src={el.image}
                  alt={el.name}
                  className="img-fluid rounded mb-3"
                  style={{
                    height: "400px",
                    objectFit: "cover",
                    width: "100%",
                    transition: "transform 0.4s ease",
                  }}
                />
                <p className="mt-2">{el.name}</p>
                <div className="text-success mb-2">★★★★★</div>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
        </div>

        <style>
          {`
    .card-hover {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
      border-radius: 10px;
    }
    .card-hover:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
    .card-hover:hover img {
      transform: scale(1.05);
    }
  `}
        </style>
      </div>
    </>
  );
};

export default Productinfo;
