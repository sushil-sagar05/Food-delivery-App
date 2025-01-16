import React from 'react';

const Help = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Help & Support</h1>
      <section>
        <h2>Frequently Asked Questions</h2>
        <div>
          <h3>How do I place an order?</h3>
          <p>To place an order, browse our menu, add items to your cart, and proceed to checkout.</p>
        </div>
        <div>
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit cards, debit cards, and online payment methods.</p>
        </div>
        <div>
          <h3>How can I track my order?</h3>
          <p>You can track your order status in the 'My Orders' section of your account.</p>
        </div>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance, please contact our support team:</p>
        <ul>
          <li>Email: support@fooddelivery.com</li>
          <li>Phone: +1 234 567 890</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;