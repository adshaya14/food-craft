import React, { useState } from 'react';
import { inr } from '../../data/studioModes';

export default function CheckoutModal({
  isOpen,
  onClose,
  orderMap,
  onConfirmOrder
}) {
  if (!isOpen) return null;

  const [mins, setMins] = useState(15);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [chefNote, setChefNote] = useState("");

  const totalAmount = Array.from(orderMap.values()).reduce(
    (acc, item) => acc + item.price * (item.qty || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderMap.size === 0) return;
    onConfirmOrder({
      customerName: customerName || "Guest Foodie",
      customerPhone: customerPhone || "Not provided",
      chefNote,
      mins,
      items: Array.from(orderMap.entries()).map(([k, v]) => ({ id: k, ...v })),
      total: totalAmount
    });
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h3>FOOD <em>CRAFT</em> Checkout</h3>
        <p className="sub">Fresh kitchen pickup & live WhatsApp order dispatch</p>

        <form onSubmit={handleSubmit}>
          {/* Order Summary */}
          <div className="checkout-summary">
            {Array.from(orderMap.entries()).map(([key, item]) => (
              <div key={key} className="checkout-summary-row">
                <span>{item.name} {item.qty > 1 ? `(x${item.qty})` : ''}</span>
                <b>{inr(item.price * (item.qty || 1))}</b>
              </div>
            ))}
            <div
              className="checkout-summary-row"
              style={{
                borderTop: '1px dashed var(--border)',
                marginTop: '8px',
                paddingTop: '8px',
                fontSize: '14px',
                fontWeight: '700'
              }}
            >
              <span>Total Payable:</span>
              <span style={{ color: 'var(--primary)', fontSize: '18px' }}>{inr(totalAmount)}</span>
            </div>
          </div>

          {/* Pickup Time */}
          <div className="form-group">
            <label>Pickup In</label>
            <div className="pickup-time-row">
              <button
                type="button"
                onClick={() => setMins(Math.max(10, mins - 5))}
                aria-label="Decrease time"
              >
                −
              </button>
              <span>{mins} mins</span>
              <button
                type="button"
                onClick={() => setMins(Math.min(90, mins + 5))}
                aria-label="Increase time"
              >
                +
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              placeholder="e.g. Arun Kumar"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>WhatsApp / Phone Number</label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Special Chef Instructions (Optional)</label>
            <textarea
              rows="2"
              placeholder="e.g. Extra spicy, less mayo, cut wrap in half..."
              value={chefNote}
              onChange={(e) => setChefNote(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn-fire"
            style={{ width: '100%', marginTop: '20px', height: '46px' }}
          >
            Confirm & Place Order ({inr(totalAmount)}) →
          </button>
        </form>
      </div>
    </div>
  );
}

