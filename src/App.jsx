import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Studio from './components/Studio/Studio';
import MenuSection from './components/Menu/MenuSection';
import CheckoutModal from './components/Checkout/CheckoutModal';
import ConfirmationModal from './components/Checkout/ConfirmationModal';
import Toast from './components/common/Toast';

export default function App() {
  const [selectedMode, setSelectedMode] = useState('shawarma');
  const [orderMap, setOrderMap] = useState(new Map());
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Show Toast helper
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  // Add / update item in order slip
  const handleUpdateOrderItem = (id, itemData) => {
    setOrderMap((prev) => {
      const next = new Map(prev);
      next.set(id, itemData);
      return next;
    });
  };

  // Remove item from order slip
  const handleRemoveOrderItem = (id) => {
    setOrderMap((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  };

  // Menu: Add direct item
  const handleAddToCart = (dish) => {
    setOrderMap((prev) => {
      const next = new Map(prev);
      const existing = next.get(dish.id);
      if (existing) {
        next.set(dish.id, { ...existing, qty: (existing.qty || 1) + 1 });
      } else {
        next.set(dish.id, { name: dish.name, price: dish.price, qty: 1 });
      }
      return next;
    });
    showToast(`Added ${dish.name} (₹${dish.price})`);
  };

  // Menu: Change Qty
  const handleChangeQty = (dishId, delta) => {
    setOrderMap((prev) => {
      const next = new Map(prev);
      const existing = next.get(dishId);
      if (!existing) return prev;
      const newQty = (existing.qty || 1) + delta;
      if (newQty <= 0) {
        next.delete(dishId);
      } else {
        next.set(dishId, { ...existing, qty: newQty });
      }
      return next;
    });
  };

  // Customize in Live Studio
  const handleCustomizeDish = (studioModeKey) => {
    if (studioModeKey) {
      setSelectedMode(studioModeKey);
    }
    const studioEl = document.getElementById('studio');
    if (studioEl) {
      studioEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    showToast(`Loaded ${studioModeKey ? studioModeKey.toUpperCase() : ''} Craft Studio!`);
  };

  // Total items in cart
  const cartCount = Array.from(orderMap.values()).reduce(
    (acc, it) => acc + (it.qty || 1),
    0
  );

  // Confirm order
  const handleConfirmOrder = (orderData) => {
    setIsCheckoutOpen(false);
    setConfirmedOrder(orderData);
  };

  // Reset entire session
  const handleResetAll = () => {
    setOrderMap(new Map());
    setConfirmedOrder(null);
  };

  return (
    <div className="app-root">
      {/* Navigation */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => {
          if (orderMap.size === 0) {
            showToast("Your cart slip is empty! Craft a dish or pick from menu.");
            return;
          }
          setIsCheckoutOpen(true);
        }}
      />

      <main className="wrap">
        {/* Hero Section */}
        <div className="hero-banner">
          <div className="pill-status">
            <i></i>
            <span>Live Interactive Artisanal Kitchen</span>
          </div>
          <h1>
            Craft Your Own <em>Epic Shawarmas, Smash Burgers, Pizzas & Drinks</em>
          </h1>
          <p className="hero-sub">
            Welcome to <b>FOOD CRAFT</b> — choose your dish station, spread gourmet sauces, stack fresh artisanal ingredients, and customize your exact food and drinks with live interactive kitchen animations!
          </p>
        </div>

        {/* Section 1: The Multi-Dish Live Craft Studio */}
        <Studio
          selectedMode={selectedMode}
          onSelectMode={setSelectedMode}
          orderMap={orderMap}
          onUpdateOrderItem={handleUpdateOrderItem}
          onRemoveOrderItem={handleRemoveOrderItem}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
          showToast={showToast}
        />

        {/* Section 2: Explore All 27 Kitchen Dishes */}
        <MenuSection
          orderMap={orderMap}
          onAddToCart={handleAddToCart}
          onChangeQty={handleChangeQty}
          onCustomizeDish={handleCustomizeDish}
        />
      </main>

      {/* Footer */}
      <footer id="footer">
        <div className="wrap">
          <p>
            © {new Date().getFullYear()} <b>FOOD CRAFT</b> — Multi-Kitchen Customization Studio. All prices in Indian Rupees (₹).
          </p>
          <p style={{ marginTop: '6px', fontSize: '12px' }}>
            Built with React & Vite. Real-time ingredient stacking, custom drinks blending & WhatsApp instant pickup dispatch.
          </p>
        </div>
      </footer>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        orderMap={orderMap}
        onConfirmOrder={handleConfirmOrder}
      />

      {/* Order Confirmation Modal */}
      <ConfirmationModal
        orderData={confirmedOrder}
        onClose={() => setConfirmedOrder(null)}
        onResetAll={handleResetAll}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

