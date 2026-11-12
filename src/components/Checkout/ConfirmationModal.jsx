import React from 'react';
import { inr } from '../../data/studioModes';

export default function ConfirmationModal({
  orderData,
  onClose,
  onResetAll
}) {
  if (!orderData) return null;

  const orderId = `FC-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleSendWhatsApp = () => {
    let msg = `*FOOD CRAFT - NEW KITCHEN ORDER #${orderId}*\n`;
    msg += `------------------------------------\n`;
    msg += `*Customer:* ${orderData.customerName}\n`;
    msg += `*Contact:* ${orderData.customerPhone}\n`;
    msg += `*Pickup In:* ${orderData.mins} minutes\n\n`;
    msg += `*ITEMS ORDERED:*\n`;

    orderData.items.forEach(it => {
      const qtyStr = it.qty > 1 ? ` (x${it.qty})` : '';
      msg += `• ${it.name}${qtyStr} - ${inr(it.price * (it.qty || 1))}\n`;
    });

    msg += `\n------------------------------------\n`;
    msg += `*TOTAL AMOUNT:* ${inr(orderData.total)}\n`;
    msg += `------------------------------------\n`;
    if (orderData.chefNote) {
      msg += `*Chef Note:* ${orderData.chefNote}\n`;
    }
    msg += `\nThank you for choosing Food Craft Studio!`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()} style={{ textAlign: 'center' }}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎉</div>
        <h3>Order Placed Successfully!</h3>
        <p className="sub">
          Order ID: <b style={{ color: 'var(--primary)' }}>#{orderId}</b>
        </p>

        <div
          style={{
            margin: '20px 0',
            padding: '16px',
            borderRadius: '16px',
            background: '#0f1511',
            border: '1px solid var(--border)',
            textAlign: 'left'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Pickup Ready In:</span>
            <b>{orderData.mins} mins</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Customer:</span>
            <b>{orderData.customerName}</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ color: 'var(--text-muted)' }}>Total Paid / Due:</span>
            <b style={{ color: 'var(--accent)', fontSize: '18px' }}>{inr(orderData.total)}</b>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-dim)', marginTop: '8px' }}>
            Total Items: {orderData.items.length} items
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            className="btn-glass"
            style={{
              flex: 1,
              background: '#25d36622',
              borderColor: '#25d36660',
              color: '#25d366',
              height: '44px'
            }}
            onClick={handleSendWhatsApp}
          >
            📲 Send to WhatsApp
          </button>
          <button
            type="button"
            className="btn-fire"
            style={{ flex: 1, height: '44px' }}
            onClick={() => {
              onClose();
              onResetAll();
            }}
          >
            Craft Another ↻
          </button>
        </div>
      </div>
    </div>
  );
}

