"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [receipt, setReceipt] = useState({
    campaign: "Clean Water for Rural Villages",
    frequency: "One-Time Donation",
    amount: 2500,
    date: new Date().toLocaleDateString(),
    method: "Credit Card ending in 4532",
  });

  useEffect(() => {
    const stored = localStorage.getItem("hopeforward-success");
    if (stored) {
      setReceipt(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <nav className="navbar container">
          <div className="brand-wrap">
            <div className="brand-mark">H</div>
            <span>HopeForward</span>
          </div>

          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/campaigns">Campaigns</Link>
            <Link href="/volunteers">Volunteers</Link>
            <Link href="/about">About Us</Link>
          </div>

          <div className="nav-actions">
            <Link href="/login" className="text-btn">Profile</Link>
            <Link href="/campaigns" className="primary-btn">Donate Now</Link>
          </div>
        </nav>
      </header>

      <main className="container page-section success-page-container">
        <div className="success-card big-success-card">
          <div className="success-icon">✓</div>
          <h3>Thank You for Your Generous Donation!</h3>
          <p>Your contribution is making a real difference in the lives of rural communities.</p>

          <div className="receipt-box">
            <h4>Receipt Details</h4>
            <div className="receipt-row"><span>Campaign</span><strong>{receipt.campaign}</strong></div>
            <div className="receipt-row"><span>Donation Type</span><strong>{receipt.frequency}</strong></div>
            <div className="receipt-row"><span>Date</span><strong>{receipt.date}</strong></div>
            <div className="receipt-row"><span>Payment Method</span><strong>{receipt.method}</strong></div>
            <div className="receipt-row"><span>Amount Donated</span><strong>₹{receipt.amount.toLocaleString("en-IN")}</strong></div>
          </div>

          <div className="success-actions">
            <button className="primary-btn">Download Receipt</button>
            <Link href="/campaigns" className="secondary-btn">View All Campaigns</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
