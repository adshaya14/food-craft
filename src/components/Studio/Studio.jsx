import React, { useState, useEffect, useRef } from 'react';
import { STUDIO_MODES, getFoodAssetUrl, inr } from '../../data/studioModes';
import { TOPPING_ART_CONFIG } from '../../data/toppingArt';

export default function Studio({
  selectedMode,
  onSelectMode,
  orderMap,
  onUpdateOrderItem,
  onRemoveOrderItem,
  onOpenCheckout,
  showToast
}) {
  const mode = STUDIO_MODES[selectedMode] || STUDIO_MODES.shawarma;
  const [activeToppings, setActiveToppings] = useState(new Set());
  const [saucePercent, setSaucePercent] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isRolled, setIsRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [isCarving, setIsCarving] = useState(false);
  const [nowNote, setNowNote] = useState({
    k: "Chef's studio",
    title: mode.baseName,
    text: "Select ingredients to customize your dish."
  });

  const boardRef = useRef(null);
  const shelfRef = useRef(null);

  // When switching studio modes, reset local studio state
  useEffect(() => {
    setActiveToppings(new Set());
    setSaucePercent(0);
    setIsRolled(false);
    setIsRolling(false);
    setIsReady(false);
    
    // Auto-add base to cart if not present
    onUpdateOrderItem(`base_${selectedMode}`, {
      name: `${mode.name}: ${mode.baseName}`,
      price: mode.basePrice,
      qty: 1
    });

    const timer = setTimeout(() => {
      setIsReady(true);
      setNowNote({
        k: "Chef's studio",
        title: mode.baseName,
        text: "Warmed on station. Spread sauce or click ingredients to craft."
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [selectedMode]);

  // Toggle Topping
  const handleToggleTopping = (topping) => {
    if (isRolled) {
      showToast("Dish is complete! Click Checkout or Reset to craft another.");
      return;
    }

    const next = new Set(activeToppings);
    if (next.has(topping.id)) {
      next.delete(topping.id);
      setActiveToppings(next);
      onRemoveOrderItem(topping.id);
      setNowNote({
        k: "Chef's studio",
        title: `Removed ${topping.name}`,
        text: "Removed from your dish."
      });
      showToast(`Removed ${topping.name}`);
    } else {
      next.add(topping.id);
      setActiveToppings(next);
      onUpdateOrderItem(topping.id, {
        name: `${mode.name}: ${topping.name}`,
        price: topping.price,
        qty: 1
      });
      setNowNote({
        k: topping.name,
        title: topping.name,
        text: topping.note
      });
      showToast(`Added ${topping.name} (${inr(topping.price)})`);
    }
  };

  // Spread sauce (click spatula)
  const handleSpreadSauce = () => {
    if (isRolled) return;
    setSaucePercent(100);
    onUpdateOrderItem(`sauce_${selectedMode}`, {
      name: `${mode.name}: ${mode.sauceName}`,
      price: mode.saucePrice,
      qty: 1
    });
    setNowNote({
      k: mode.sauceName,
      title: mode.sauceName,
      text: "Evenly spread across the base! Now layer your ingredients."
    });
    showToast(`Added ${mode.sauceName} (${inr(mode.saucePrice)})`);
  };

  // Carve meat from spit
  const handleCarveSpit = () => {
    if (isRolled || isCarving) return;
    const mainProtein = mode.toppings[0];
    if (!mainProtein) return;

    if (activeToppings.has(mainProtein.id)) {
      handleToggleTopping(mainProtein);
      return;
    }

    setIsCarving(true);
    setTimeout(() => {
      setIsCarving(false);
      const next = new Set(activeToppings);
      next.add(mainProtein.id);
      setActiveToppings(next);
      onUpdateOrderItem(mainProtein.id, {
        name: `${mode.name}: ${mainProtein.name}`,
        price: mainProtein.price,
        qty: 1
      });
      setNowNote({
        k: mainProtein.name,
        title: mainProtein.name,
        text: mainProtein.note
      });
      showToast(`Carved & Added ${mainProtein.name}!`);
    }, 800);
  };

  // Finish / Roll Dish
  const handleFinishDish = () => {
    if (isRolled) {
      onOpenCheckout();
      return;
    }
    setIsRolling(true);
    setTimeout(() => {
      setIsRolling(false);
      setIsRolled(true);
      setNowNote({
        k: "Chef's studio",
        title: `${mode.name} Complete!`,
        text: mode.doneText
      });
      showToast(`${mode.name} Crafted Successfully! Ready for checkout.`);
    }, 600);
  };

  // Reset Studio
  const handleResetStudio = () => {
    setActiveToppings(new Set());
    setSaucePercent(0);
    setIsRolled(false);
    setIsRolling(false);
    
    // Remove studio items from cart
    Array.from(orderMap.keys()).forEach(key => {
      if (!key.startsWith("dish-")) {
        onRemoveOrderItem(key);
      }
    });

    onUpdateOrderItem(`base_${selectedMode}`, {
      name: `${mode.name}: ${mode.baseName}`,
      price: mode.basePrice,
      qty: 1
    });

    setNowNote({
      k: "Chef's studio",
      title: "Studio Reset",
      text: "Base refreshed! Start crafting fresh."
    });
    showToast("Craft Studio Reset!");
  };

  // Total calculation for POS Ticket
  const totalAmount = Array.from(orderMap.values()).reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  return (
    <section className="studio-section" id="studio">
      {/* Station Selector Bar */}
      <div className="dish-selector-bar">
        {Object.entries(STUDIO_MODES).map(([key, st]) => (
          <button
            key={key}
            type="button"
            className={`station-btn ${selectedMode === key ? 'active' : ''}`}
            onClick={() => onSelectMode(key)}
          >
            <span className="emoji">{st.title.slice(0, 2)}</span>
            <span>{st.name}</span>
            <span className="hint-tag">Base {inr(st.basePrice)}</span>
          </button>
        ))}
      </div>

      <div className="studio-box">
        {/* Dynamic Studio Header */}
        <div className="studio-header-banner">
          <h2>{mode.title}</h2>
          <p>{mode.desc}</p>
        </div>

        {/* Live Chef Feedback Box */}
        <div className="now-note">
          <div className="k">{nowNote.k}</div>
          <h4>{nowNote.title}</h4>
          <p>{nowNote.text}</p>
        </div>

        {/* Studio Stage */}
        <div className="stage">
          {/* Left Station: Sauce Bowl & Rotisserie Spit */}
          <div className="studio-left">
            {/* Sauce Bowl & Spatula */}
            <div className="dish">
              <span className={`hud-tag ${saucePercent > 0 ? 'hide' : ''}`}>
                {mode.spatPrompt}
              </span>
              <img className="dish-img" src="/assets/food/sauce-bowl.png" alt="Sauce Bowl" />
              <div
                className="spat home"
                onClick={handleSpreadSauce}
                role="button"
                tabIndex={0}
                aria-label={`Click to spread ${mode.sauceName}`}
              >
                <img src="/assets/food/spatula.png" alt="Spatula" />
              </div>
            </div>

            {/* Rotisserie Spit / Protein Grill */}
            <div
              className={`spit ${isCarving ? 'cut' : ''}`}
              onClick={handleCarveSpit}
              role="button"
              tabIndex={0}
              aria-label="Click to carve main protein"
            >
              <span className={`hud-tag ${activeToppings.has(mode.toppings[0]?.id) ? 'hide' : ''}`}>
                {mode.spitPrompt}
              </span>
              <div className="heat"></div>
              <img className="meat" src="/assets/food/spit.png" alt="Rotisserie Spit" />
              <div className="sheen"></div>
              <div className="carve">
                <img src="/assets/food/knife.png" alt="Carving Knife" />
              </div>
            </div>
          </div>

          {/* Center Station: Cutting Board & Dish Canvas */}
          <div className="board" ref={boardRef} id="board">
            <img className="board-img" src="/assets/food/board.png" alt="Wooden Cutting Board" />

            <div className={`bread ${!isReady || isRolled ? 'out' : ''}`}>
              <img className="base" src={mode.baseImg} alt={mode.baseName} />

              {/* Sauce Smear Layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: '8%',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${mode.sauceColor[0]} 0%, ${mode.sauceColor[1]} 60%, transparent 85%)`,
                  opacity: saucePercent > 0 ? 0.85 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: 'none'
                }}
              />

              {/* Active Toppings Layer */}
              <div className="tops">
                {mode.toppings.map(topping => {
                  if (!activeToppings.has(topping.id)) return null;
                  const config = TOPPING_ART_CONFIG[topping.icon] || TOPPING_ART_CONFIG[topping.id] || [
                    { x: 50, y: 50, w: 50, r: 0, d: 0 }
                  ];

                  return (
                    <div key={topping.id}>
                      {config.map((item, idx) => {
                        if (item.isDrizzle) {
                          return (
                            <span
                              key={idx}
                              className="pc drizzle"
                              style={{ '--r': `${item.r}deg` }}
                            >
                              <img src={getFoodAssetUrl(item.file || topping.icon)} alt="" />
                            </span>
                          );
                        }
                        return (
                          <span
                            key={idx}
                            className="pc"
                            style={{
                              left: `${item.x}%`,
                              top: `${item.y}%`,
                              width: `${item.w}%`,
                              '--r': `${item.r}deg`
                            }}
                          >
                            <img src={getFoodAssetUrl(topping.icon)} alt="" />
                          </span>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Completed Dish Graphic */}
            <div className={`rolled ${isRolled ? 'show' : ''}`}>
              <img src={mode.doneImg} alt="Finished Dish" />
            </div>

            {/* Sauce Meter */}
            <div className={`meter ${isRolled ? 'hide' : ''}`}>
              <span>{mode.sauceName.split(" ")[0]}</span>
              <div className="bar">
                <i style={{ width: `${saucePercent}%` }}></i>
              </div>
              <span>{saucePercent}%</span>
            </div>
          </div>

          {/* Right Station: Live POS Ticket */}
          <div className="pos-ticket">
            <div className="ticket-head">
              <h3>FOOD <em>CRAFT</em></h3>
              <p>Studio Kitchen Slip</p>
            </div>

            <ul className="ticket-lines">
              {Array.from(orderMap.entries()).map(([key, item]) => (
                <li key={key}>
                  <span>{item.name} {item.qty > 1 ? `(x${item.qty})` : ''}</span>
                  <i></i>
                  <em>{inr(item.price * (item.qty || 1))}</em>
                  <button
                    className="del-btn"
                    onClick={() => {
                      onRemoveOrderItem(key);
                      // If it's a topping, uncheck it from active
                      const next = new Set(activeToppings);
                      next.delete(key);
                      setActiveToppings(next);
                    }}
                    title="Remove item"
                  >
                    ✕
                  </button>
                </li>
              ))}
              {orderMap.size === 0 && (
                <li style={{ color: 'var(--text-dim)', justifyContent: 'center' }}>
                  No items in studio slip yet.
                </li>
              )}
            </ul>

            <div className="ticket-total-row">
              <span>Slip Total:</span>
              <b>{inr(totalAmount)}</b>
            </div>

            <div className="ticket-actions">
              <button
                type="button"
                className="btn-glass"
                onClick={handleResetStudio}
                title="Reset this studio dish"
              >
                Reset
              </button>
              <button
                type="button"
                className="btn-fire"
                onClick={handleFinishDish}
              >
                {isRolled ? 'Checkout →' : mode.actionBtn}
              </button>
            </div>
          </div>

          {/* Dynamic Toppings Shelf */}
          <div className="shelf" ref={shelfRef}>
            <span className="hud-tag">
              {selectedMode === 'drinks' ? 'tap ingredients to blend in your glass ↓' : 'tap ingredients to add onto dish ↓'}
            </span>
            {mode.toppings.map(t => {
              const isOn = activeToppings.has(t.id);
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`top ${isOn ? 'on' : ''}`}
                  onClick={(e) => handleToggleTopping(t, e)}
                  aria-label={`${t.name}, ${inr(t.price)}`}
                >
                  <img src={getFoodAssetUrl(t.icon)} alt={t.name} />
                  <b>{t.short}</b>
                  <small>{inr(t.price)}</small>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

