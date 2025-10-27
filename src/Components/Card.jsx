import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

const Card = ({img, title, star, reviews, prevPrice, newPrice}) => {
  return (
    <section className="card">
      <img
        src={img}
        alt={title}
        className="card-image"
      />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {Array.from({ length: star }).map((_, index) => (
            <AiFillStar key={index} className="rating-stars" />
          ))}
          <div className="total-reviews">{reviews}</div>
        </section>
        <section className="card-price">
          <div className="price">
            <del>${prevPrice}</del> ${newPrice}
          </div>
          <div className="bag" title="Add to wishlist">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Card