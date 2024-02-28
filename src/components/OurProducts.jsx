import React from 'react'
import "../components/OurProducts.css";
import products from "../assets/products.png"
const OurProducts = () => {
  return (
    <div className="ourProducts">
      <img src={products} alt="products image" />
      <span>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </span>
    </div>
  );
}

export default OurProducts
