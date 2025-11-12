import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "./Reduxcart/Action";
import { useNavigate } from "react-router";

const Cart = () => {
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [message, setMessage] = useState("");

  const data = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryCoupons = {
  SHIRT10: { category: "Shirts", discount: 10 },
  DRESS15: { category: "Anarkali Dress", discount: 15 },
  KURTA20: { category: "Kurta Set", discount: 20 },
  GIRLS25: { category: "Girls", discount: 25 },
};
const applyCoupon = () => {
  const entered = coupon.toUpperCase();

  if (categoryCoupons[entered]) {
    const { category, discount } = categoryCoupons[entered];

    // Check if cart has that category
   const categoryInCart = data.some(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    if (categoryInCart) {
      setDiscountPercent(discount);
      setMessage(`🎉 ${discount}% off on ${category} items applied!`);
    } else {
      setDiscountPercent(0);
      setMessage(`❌ No ${category} items in your cart`);
    }
  } else {
    setDiscountPercent(0);
    setMessage("❌ Coupon not valid");
  }
};

  const subTotal = data.reduce(
    (acc, el) =>
      acc + Number(el.price.replace(/[^0-9.]/g, "")) * Number(el.quantity || 1),
    0
  );
  const gstAmount = subTotal * 0.12;
  const discountAmount = (subTotal * discountPercent) / 100;
  const finalAmount = subTotal + gstAmount - discountAmount;

  return (
    <div className="container my-5" style={{ marginTop: "100px" }}>
      <h2
        style={{
          fontFamily: "quicksand",
          borderBottom: "1px solid green",
          display: "inline-block",
          marginTop: "50px",
        }}
      >
        Shopping Cart
      </h2>

      <div className="row mt-4">
        {/* LEFT: Cart Items */}
        <div className="col-md-8" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
          {data.length === 0 ? (
            <p className="text-muted">Your cart is empty.</p>
          ) : (
            data.map((el, i) => (
              <div
                key={i}
                className="d-flex align-items-center mb-4 border-bottom pb-3"
              >
                <img
                  src={el.image}
                  alt={el.name}
                  className="rounded me-3"
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "cover",
                  }}
                />
                <div className="flex-grow-1">
                  <h6>{el.name}</h6>
                  <p className="mb-1">{el.price}</p>
                  <div className="d-flex align-items-center mb-1">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => dispatch(decrement(i))}
                    >
                      -
                    </button>
                    <span className="btn btn-light">{el.quantity || 1}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2"
                      onClick={() => dispatch(increment(i))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-link text-danger p-0"
                    onClick={() => dispatch(remove(i))}
                  >
                    Remove
                  </button>
                </div>
                <div className="ms-3">
                  <h6>
                    Total: Rs.
                    {(
                      Number(el.price.replace(/[^0-9.]/g, "")) *
                      Number(el.quantity || 1)
                    ).toFixed(2)}
                  </h6>
                </div>
              </div>
            ))
          )}
        </div>

        {/* RIGHT: Summary */}
        <div className="col-lg-4" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="border p-3 rounded shadow-sm">
            <h5>Cart Summary</h5>
            <hr />
            <p>Subtotal: Rs.{subTotal.toFixed(2)}</p>
            <p>GST (12%): Rs.{gstAmount.toFixed(2)}</p>
            <h5>
              Total:{" "}
              <span className="text-success fw-bold">
                Rs. {finalAmount.toFixed(2)}
              </span>
            </h5>
            
            <button
              className="btn btn-success w-100 mt-2"
              onClick={() => navigate("/Checkout")}
              disabled={data.length === 0}
            >
              Checkout
            </button>
            <small className="text-muted d-block mt-2">
              Shipping & taxes calculated at checkout
            </small>
             <h4 className="p-3 fs-3 " style={{
            color: "#b5651d",
           display:'inline-block',
           fontWeight:'890',
            letterSpacing: "1px",
            fontFamily: "quicksand",
          }}>
            Apply Coupon</h4>
        <div className="d-flex">
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            placeholder="Enter coupon"
            className="form-control me-2"
          />
          <button className="btn btn-success" onClick={applyCoupon}>
            Apply
          </button>
        </div>

        {message && (
          <p
            className="mt-2"
            style={{
              color: discountPercent ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}

        {discountPercent > 0 && (
          <p style={{ color: "red" }}>
            Discount ({discountPercent}%): -Rs.{discountAmount.toFixed(2)}
          </p>
        )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
