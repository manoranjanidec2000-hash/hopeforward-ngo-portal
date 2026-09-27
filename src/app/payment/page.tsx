"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function PaymentPage() {
  const router = useRouter();
  const [savedDonation, setSavedDonation] = useState<{ campaign: string; amount: number; frequency: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("hopeforward-donation");
    if (!stored) {
      router.push("/login");
      return;
    }

    setSavedDonation(JSON.parse(stored));
  }, [router]);

  const handlePayment = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem("hopeforward-success", JSON.stringify({
      campaign: savedDonation?.campaign || "HopeForward Campaign",
      amount: savedDonation?.amount || 0,
      frequency: savedDonation?.frequency || "One-Time Donation",
      date: new Date().toISOString(),
      method: "Credit Card ending in 4532",
    }));
    router.push("/success");
  };

  if (!savedDonation) return null;

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
            <Link href="/donate" className="primary-btn">Donate Now</Link>
          </div>
        </nav>
      </header>

      <main className="container page-section">
        <div className="page-intro narrow">
          <h1>Payment</h1>
        </div>

        <div className="payment-layout">
          <div className="payment-card">
            <h3>Donation Summary</h3>
            <div className="summary-box payment-summary">
              <div>
                <span>Campaign</span>
                <strong>{savedDonation.campaign}</strong>
              </div>
              <div>
                <span>Donation</span>
                <strong>{savedDonation.frequency}</strong>
              </div>
              <div>
                <span>Amount</span>
                <strong>₹{savedDonation.amount.toLocaleString("en-IN")}</strong>
              </div>
            </div>

            <form className="auth-form payment-form" onSubmit={handlePayment}>
              <label>
                <span>Cardholder Name</span>
                <input type="text" placeholder="Enter cardholder name" required />
              </label>
              <label>
                <span>Card Number</span>
                <input type="text" placeholder="1234 5678 9012 3456" required />
              </label>
              <div className="form-grid">
                <label>
                  <span>Expiry Date</span>
                  <input type="text" placeholder="MM/YY" required />
                </label>
                <label>
                  <span>CVV</span>
                  <input type="password" placeholder="***" required />
                </label>
              </div>

              <button type="submit" className="primary-btn full-width">Pay ₹{savedDonation.amount.toLocaleString("en-IN")}</button>
              <p className="secure-note">Secure payment • encrypted & protected</p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
