import React from "react";
import categories from "./categories";
import CategoryCard from "./CategoryCard";
import './styles.css'; 

function handleCategoryClick(category) {
 
}

return (
  <div>
    <h1 className="whats-on-your-mind">What's on your mind?</h1>
    <div className="category-scroll">
      {categories.map(cat => (
        <CategoryCard
          key={cat.name}
          name={cat.name}
          image={cat.image}
          onClick={handleCategoryClick}
        />
      ))}
    </div>
    <div className="button-container">
      <div className="price">₹ {price}</div>
      <button
        className="addcart"
        onClick={() => addToCart(curElem)}
      >
        Add
      </button>
      <button
        className="order-btn"
        onClick={() => alert(`Order placed for ${name}!`)}
      >
        Order
      </button>
    </div>
  </div>
);


