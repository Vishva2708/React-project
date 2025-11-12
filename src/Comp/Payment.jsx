import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Receive form and cart data from Checkout page
  const { form, cart } = location.state || {};

  //  If no data found (user directly visits /payment)
  if (!form || !cart || cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h4 className="text-danger">No products found. Please add items to cart.</h4>
        <button className="btn btn-success mt-3" onClick={() => navigate("/products")}>
          Go to Shop
        </button>
      </div>
    );
  }

  //  Calculate totals
  const subTotal = cart.reduce(
    (acc, el) =>
      acc + Number(el.price.replace(/[^0-9.]/g, "")) * Number(el.quantity || 1),
    0
  );
  const gst = subTotal * 0.12;
  const total = subTotal + gst;

  //  Confirm order handler
  const handleConfirm = () => {
    alert(" Your order has been placed successfully!");
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="container mt-5 p-4 mb-5">
      <h2 className="text-center fw-bold mb-4 mt-5" style={{ color: "#198754" }}>
         Order Confirmation
      </h2>

      {/* Order Details */}
      <div className="row">
        <div className="col-md-7">
          <div className="p-3 border rounded shadow-sm">
            <h5>Shipping Details</h5>
            <hr />
            <p><strong>Name:</strong> {form.name}</p>
            <p><strong>Address:</strong> {form.flat}, {form.area}, {form.city} - {form.pincode}</p>
            <p><strong>Payment Method:</strong> {form.paymentMethod}</p>
          </div>

          <div className="p-3 mt-4 border rounded shadow-sm">
            <h5>Order Items</h5>
            <hr />
            {cart.map((el, i) => (
              <div key={i} className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                  <img
                    src={el.image}
                    alt={el.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "5px",
                      objectFit: "cover",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <h6 className="mb-0">{el.name}</h6>
                    <small className="text-muted">Qty: {el.quantity || 1}</small>
                  </div>
                </div>
                <p className="fw-bold mb-0">
                  ₹
                  {(
                    Number(el.price.replace(/[^0-9.]/g, "")) *
                    Number(el.quantity || 1)
                  ).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="col-md-5">
          <div className="p-3 border rounded shadow-sm">
            <h5>Payment Summary</h5>
            <hr />
            <p>Subtotal: ₹{subTotal.toFixed(2)}</p>
            <p>GST (12%): ₹{gst.toFixed(2)}</p>
            <h5 className="text-success">Total: ₹{total.toFixed(2)}</h5>
            <button
              className="btn btn-success w-100 mt-3"
              onClick={handleConfirm}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
