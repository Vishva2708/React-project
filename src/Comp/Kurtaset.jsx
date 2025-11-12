import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Kurtaset = () => {
 const product=[
      {
      "id": "6",
      "name": "Jaipuri Fashionable Pure Katha Cotton co-ord Set",
      "price": "₹899",
      "category": "Kurta Set",
      "image": "https://images.meesho.com/images/products/372459795/izpff_512.avif?width=512",
      "images":"https://images.meesho.com/images/products/429744101/4qe5m_512.avif?width=512",
      "size":"M",
   "description":"Brighten up your summer wardrobe with this Jaipuri Fashionable Pure Katha Cotton co-ord Set Crafted from lightweight and breathable fabric, it features delicate embroidery that adds a touch of elegance while keeping you cool and stylish all day"
   },
    {
      "id": "7",
      "name": "Pink Cotton Floral Embroidered Co-Ord Set",
      "price": "₹1269",
      "category": "Kurta Set",
      "image": "https://colorsofearth.in/cdn/shop/files/538-01_4.jpg?v=1750396363&width=800",
      "images":"https://colorsofearth.in/cdn/shop/files/538-01_3.jpg?v=1750396362&width=800",
      "size":"L",
    "description":"Brighten up your summer wardrobe with this Pink Cotton Floral Embroidered Co-Ord Set Crafted from lightweight and breathable fabric, it features delicate embroidery that adds a touch of elegance while keeping you cool and stylish all day"
   },
    {
      "id": "8",
      "name": "Indian Multicolor cotton co-ord set",
      "price": "₹2078",
      "category": "Kurta Set",
      "image": "https://asharfidesign.com/wp-content/uploads/2023/07/21-1.jpg",
      "images":"https://asharfidesign.com/wp-content/uploads/2023/07/22.jpg",
      "size":"XL",
  "description":"Brighten up your summer wardrobe with this Indian Multicolor cotton co-ord set Crafted from lightweight and breathable fabric, it features delicate embroidery that adds a touch of elegance while keeping you cool and stylish all day"
   },
    {
      "id": "9",
      "name": "Violet Muslin Printed Co-Ord Set",
      "price": "₹1229",
      "category": "Kurta Set",
      "image": "https://colorsofearth.in/cdn/shop/files/508-02_4.jpg?v=1719481226&width=800",
      "images":"https://colorsofearth.in/cdn/shop/files/508-02_6.jpg?v=1747393999&width=800",
      "size":"XXL",
    "description":"BrightViolet Muslin Printed Co-Ord SetViolet Poly Cotton Embroidered Co-ord Set Crafted from lightweight and breathable fabric, it features delicate embroidery that adds a touch of elegance while keeping you cool and stylish all day"
   }
 ]
  const viewcategory = "kurtaset";
  return (
    <div>
      <div className="container p-3 text-center mb-5">
        <div className="row" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          {product.slice(0, 4).map((el, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5" data-aos="fade-up-right" key={el.id}>
              <Link to={`/${el.category}/${el.id}`}>
                <img
                  src={el.image}
                  style={{ width: "100%", height: "500px", objectFit: "cover" }}
                />
              </Link>
            </div>
          ))}
        </div>
          <Link to={`/category/${viewcategory}`}>
          <button className="rounded p-2" style={{width:"150px"}}>View All</button>
          </Link>
      </div>
    </div>
  );
};

export default Kurtaset;
