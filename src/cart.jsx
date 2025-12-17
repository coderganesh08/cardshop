import React from 'react';

function Cart({ cart, toggleCart }) {
  return (
    <div className="cart-panel">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      )}
      <button onClick={toggleCart}>Close</button>
    </div>
  );
}

export default Cart;
