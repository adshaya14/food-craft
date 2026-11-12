import React, { useState } from 'react';
import { FULL_MENU } from '../../data/fullMenu';
import { inr } from '../../data/studioModes';

const CATEGORIES = [
  { key: "all", name: "All Dishes", emoji: "🌟", count: 27 },
  { key: "shawarma", name: "Shawarmas & Wraps", emoji: "🌯", count: 5 },
  { key: "burgers", name: "Smash Burgers", emoji: "🍔", count: 4 },
  { key: "pizzas", name: "Artisanal Pizzas", emoji: "🍕", count: 4 },
  { key: "grill", name: "Charcoal Grills", emoji: "🍗", count: 4 },
  { key: "bowls", name: "Loaded Bowls", emoji: "🍚", count: 4 },
  { key: "drinks", name: "Drinks & Shakes", emoji: "🥤", count: 4 },
  { key: "sides", name: "Sides & Fries", emoji: "🍟", count: 2 },
];

export default function MenuSection({
  orderMap,
  onAddToCart,
  onChangeQty,
  onCustomizeDish
}) {
  const [activeCat, setActiveCat] = useState("all");
  const [activeDiet, setActiveDiet] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDishes = FULL_MENU.filter(item => {
    if (activeCat !== "all" && item.cat !== activeCat) return false;
    if (activeDiet === "veg" && item.diet !== "veg") return false;
    if (activeDiet === "non-veg" && item.diet !== "non-veg") return false;
    if (activeDiet === "chef" && item.tag !== "Chef's Pick" && item.tag !== "Best Seller") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const match = item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <section className="menu-section" id="menu">
      <div className="wrap">
        <div className="menu-header">
          <h2>Explore All <em>27 Kitchen Dishes & Drinks</em></h2>
          <p>Order direct from kitchen or click <b>"Custom 🛠️"</b> to load any dish into our live craft studio!</p>
        </div>

        {/* Category Pills */}
        <div className="cat-filter-bar">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              type="button"
              className={`cat-pill-btn ${activeCat === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCat(cat.key)}
            >
              <span className="emoji">{cat.emoji}</span>
              <span>{cat.name}</span>
              <span className="count">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Diet & Search Row */}
        <div className="filter-search-row">
          <div className="diet-bar">
            <button
              type="button"
              className={`diet-tag ${activeDiet === 'all' ? 'active' : ''}`}
              onClick={() => setActiveDiet('all')}
            >
              All Items
            </button>
            <button
              type="button"
              className={`diet-tag ${activeDiet === 'non-veg' ? 'active' : ''}`}
              onClick={() => setActiveDiet('non-veg')}
            >
              🍗 Non-Veg
            </button>
            <button
              type="button"
              className={`diet-tag ${activeDiet === 'veg' ? 'active' : ''}`}
              onClick={() => setActiveDiet('veg')}
            >
              🌱 Pure Veg
            </button>
            <button
              type="button"
              className={`diet-tag ${activeDiet === 'chef' ? 'active' : ''}`}
              onClick={() => setActiveDiet('chef')}
            >
              ⭐ Chef's Picks
            </button>
          </div>

          <div className="search-box">
            <span className="ico">🔍</span>
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="dishes-grid">
          {filteredDishes.map(dish => {
            const currentItem = orderMap.get(dish.id);
            const qty = currentItem ? currentItem.qty : 0;

            let badgeClass = "dish-badge";
            if (dish.tag.includes("Spicy")) badgeClass += " spicy";
            if (dish.tag.includes("Chef")) badgeClass += " chef";

            return (
              <div key={dish.id} className="dish-card">
                <div>
                  <div className="dish-top-bar">
                    <span className={`diet-indicator ${dish.diet}`}>
                      <i></i>
                    </span>
                    <span className={badgeClass}>{dish.tag}</span>
                  </div>

                  <div className="dish-art">
                    <img src={dish.img} alt={dish.name} loading="lazy" />
                  </div>

                  <div className="dish-details">
                    <h3>{dish.name}</h3>
                    <p>{dish.desc}</p>
                  </div>
                </div>

                <div className="dish-bottom">
                  <div className="dish-price">
                    <span>₹</span>{dish.price}
                  </div>

                  <div className="dish-ctrls">
                    {dish.customizable && (
                      <button
                        type="button"
                        className="btn-glass"
                        style={{ height: '34px', padding: '0 12px', fontSize: '12px' }}
                        onClick={() => onCustomizeDish(dish.customizable)}
                        title="Customize in Live Studio"
                      >
                        Custom 🛠️
                      </button>
                    )}

                    {qty > 0 ? (
                      <div className="qty-stepper">
                        <button
                          type="button"
                          onClick={() => onChangeQty(dish.id, -1)}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{qty}</span>
                        <button
                          type="button"
                          onClick={() => onChangeQty(dish.id, 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="btn-fire"
                        style={{ height: '34px', padding: '0 14px', fontSize: '12px' }}
                        onClick={() => onAddToCart(dish)}
                      >
                        Add +
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

