import React from "react";
import "./Product.css";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import Card from "../Components/Card.jsx";

const Product = ({result}) => {
  return (
    <>
      <section className="card-container">
       {result}
      </section>
    </>
  );
};

export default Product;
