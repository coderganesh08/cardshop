import React, { useState } from "react";

const Menucard = ({ menuData, addToCart }) => {
  const [filteredData, setFilteredData] = useState(menuData);

  // Get unique categories dynamically
  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  // Filter function
  const filterCategory = (category) => {
    if (category === "All") {
      setFilteredData(menuData);
    } else {
      const updatedList = menuData.filter((item) => item.category === category);
      setFilteredData(updatedList);
    }
  };

  return (
    <section className="main-section">
      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((category, index) => (
          <button
            key={index}
            className="filter-btn"
            onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Cards */}
      <section className="main-card--container">
        {filteredData.map((curElem) => {
          const { id, name, image, description, price } = curElem; // removed category

          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <img className="card-image" src={image} alt={name} />
                  <h2 className="card-title">{name}</h2>
                  <p className="description">{description}</p>

                  <div className="button-container">
                    {/* Remove the Order Now button */}
                    <div className="price">₹ {price}</div>
                    <button
                      className="addcart"
                      onClick={() => addToCart(curElem)}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Menucard;
