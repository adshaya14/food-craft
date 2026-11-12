import React from 'react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="brand">
          <div className="brand-icon">🔥</div>
          <div>
            <div className="brand-name">FOOD <em>CRAFT</em></div>
            <div className="brand-tag">Artisanal Multi-Kitchen Studio</div>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#studio" className="nav-link">Craft Studio</a>
          <a href="#menu" className="nav-link">Full Kitchen Menu</a>
          <a href="#footer" className="nav-link">About Us</a>
          <button className="nav-cart-btn" onClick={onOpenCart} aria-label="Open Cart">
            <span>🛒 Slip</span>
            <span className="cart-badge">{cartCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

