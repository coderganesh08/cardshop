// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./nav";
import Menucard from "./menucard";
import menuData from "./menuApi";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [hideCartBtn, setHideCartBtn] = useState(true);

  useEffect(() => {
    const handleScroll = () => setHideCartBtn(window.scrollY < 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: i.qty - 1 } : i)
          .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => setCart([]);
  const toggleCart = () => setShowCart((prev) => !prev);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div className="App">
      <Nav toggleCart={toggleCart} cartCount={cartCount} />
      <Menucard menuData={menuData} addToCart={addToCart} />

      {/* Floating Cart Button */}
      <button
        className="floating-cart-btn"
        onClick={toggleCart}
        style={{
          position: "fixed", bottom: "30px", right: "30px",
          background: "#333", color: "#fff", border: "none", borderRadius: "50%",
          width: "56px", height: "56px", fontSize: "2rem",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)", zIndex: 1100,
          display: showCart || hideCartBtn ? "none" : "flex",
          alignItems: "center", justifyContent: "center",
        }}
      >
        🛒
        {cartCount > 0 && (
          <span style={{
            position: "absolute", top: "8px", right: "8px",
            background: "#e74c3c", color: "#fff", borderRadius: "50%",
            padding: "2px 8px", fontSize: "1rem"
          }}>{cartCount}</span>
        )}
      </button>

      {/* Cart Panel */}
      {showCart && (
        <div style={{
          position: "fixed", top: "50px", right: "20px", width: "320px",
          background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          borderRadius: "8px", padding: "15px", zIndex: 1200, animation: "slideIn 0.3s"
        }}>
          <button
            onClick={toggleCart}
            style={{
              float: "right", background: "#333", color: "#fff",
              border: "none", borderRadius: "50%", width: "32px", height: "32px",
              fontSize: "1.5rem", cursor: "pointer", marginBottom: "10px"
            }}
          >×</button>

          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p style={{ textAlign: "center", color: "#888" }}>No items in cart</p>
          ) : (
            <>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {cart.map((item) => (
                  <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <img src={item.image} alt={item.name} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "8px", marginRight: "10px" }} />
                    <span style={{ flex: 1 }}>
                      {item.name} <br />
                      <span style={{ fontSize: "0.9rem", color: "#666" }}>₹{item.price} × {item.qty}</span>
                    </span>

                    {/* Quantity Buttons */}
                    <div style={{ display: "flex", gap: "5px" }}>
                      <button
                        onClick={() => addToCart(item)}
                        style={{ background: "#27ae60", color: "#fff", border: "none", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer" }}>+</button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{ background: "#ff4d4d", color: "#fff", border: "none", borderRadius: "50%", width: "28px", height: "28px", cursor: "pointer" }}>-</button>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ fontWeight: "bold", textAlign: "right", marginTop: "10px" }}>Total: ₹{total}</div>

              <button onClick={clearCart} style={{ background: "#222", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
                Clear Cart
              </button>

              <button onClick={() => { alert("Your order has been placed!"); clearCart(); setShowCart(false); }} 
                      style={{ background: "#27ae60", color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", cursor: "pointer", width: "100%", marginTop: "10px" }}>
                Order Now
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
