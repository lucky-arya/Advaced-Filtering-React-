import { useState } from "react";
import Navigation from "./Navigation/Nav.jsx";

import "./App.css";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Products from "./Db/data.js";
import Category from "./Sidebar/Category/Category.jsx";
import Card from "./Components/Card.jsx";


function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //input filter end

  const filteredItems = Products.filter(
    (Product) => Product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  //Radio filters
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  };

  // buttons filter
  const handleClick = (event) => {
    setSelectCategory(event.target.value);
  };

  function filteredProducts(products, select, query) {
    let filteredData = products;
    // filtring by category
    if (query) {
      filteredData = filteredItems;
    }
    //selcted category filter
    if (select) {
      filteredData = filteredData.filter(
        ({ category, color, company, newPrice, title }) => {
          return (
            category === select ||
            color === select ||
            company === select ||
            newPrice === select ||
            title === select
          );
        }
      );
    }

    return filteredData.map(({ img, title, star, reviews,newPrice ,prevPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

const result=filteredProducts(Products, selectCategory, query);

  return (
    <>
      <Navigation  query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
}

export default App;
