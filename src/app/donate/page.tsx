"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Villages",
    category: "Clean Water",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
    raised: 850000,
    target: 1000000,
    progress: 85,
  },
  {
    id: 2,
    title: "Education Fund",
    category: "Education",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    raised: 720000,
    target: 900000,
    progress: 80,
  },
  {
    id: 3,
    title: "Community Health Centers",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    raised: 670000,
    target: 850000,
    progress: 79,
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    category: "Community",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    raised: 540000,
    target: 700000,
    progress: 77,
  },
  {
    id: 5,
    title: "Tree Plantation Drive",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    raised: 430000,
    target: 600000,
    progress: 72,
  },
  {
    id: 6,
    title: "Digital Literacy Program",
    category: "Education",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    raised: 610000,
    target: 800000,
    progress: 76,
  },
];

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function DonatePage() {
  const router = useRouter();
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const selectedId = Number(params.get("campaign") || 1);
  const selectedCampaign = campaigns.find((campaign) => campaign.id === selectedId) || campaigns[0];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [frequency, setFrequency] = useState("One-Time Donation");
  const [donationAmount, setDonationAmount] = useState(2500);
  const [donor, setDonor] = useState({ name: "", email: "", phone: "" });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("hopeforward-user");
    if (!savedUser) {
      router.push("/login?next=/donate");
      return;
    }

    const parsed = JSON.parse(savedUser);
    setDonor({ name: parsed.name || "", email: parsed.email || "", phone: parsed.phone || "" });
    setIsLoggedIn(true);
  }, [router]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!donor.name.trim() || !donor.email.trim() || !donor.phone.trim()) {
      setFormError("Please fill in all donor details to continue.");
      return;
    }

    localStorage.setItem(
      "hopeforward-donation",
      JSON.stringify({
        campaign: selectedCampaign.title,
        amount: donationAmount,
        frequency,
        paymentMethod: "Credit/Debit Card",
      })
    );

    router.push("/payment");
  };

  if (!isLoggedIn) {
    return null;
  }

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
        <div className="page-intro">
          <h1>Make a Donation</h1>
        </div>

        <div className="donation-card full-donation-card">
          <div className="donation-head">
            <div className="mini-brand">HopeForward</div>
            <span>Home &gt; Campaigns &gt; {selectedCampaign.title} &gt; Donate</span>
          </div>

          <div className="donation-details">
            <div className="selected-image-wrap">
              <img src={selectedCampaign.image} alt={selectedCampaign.title} />
            </div>

            <div className="selected-copy">
              <span className="chip">{selectedCampaign.category}</span>
              <h3>{selectedCampaign.title}</h3>
              <p>Support this campaign with a secure contribution that reaches communities in need.</p>
              <div className="amount-row large">
                <strong>{formatCurrency(selectedCampaign.raised)}</strong>
                <span>Target: {formatCurrency(selectedCampaign.target)}</span>
              </div>
              <div className="progress-bar">
                <span style={{ width: `${selectedCampaign.progress}%` }} />
              </div>
            </div>
          </div>

          <form className="donation-form" onSubmit={handleSubmit}>
            <div className="frequency-row">
              {['One-Time Donation', 'Monthly Recurring'].map((option) => (
                <button
                  type="button"
                  key={option}
                  className={frequency === option ? "choice-btn active" : "choice-btn"}
                  onClick={() => setFrequency(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="amount-grid">
              {[500, 1000, 2500, 5000].map((amount) => (
                <button
                  type="button"
                  key={amount}
                  className={donationAmount === amount ? "amount-btn active" : "amount-btn"}
                  onClick={() => setDonationAmount(amount)}
                >
                  ₹{amount.toLocaleString("en-IN")}
                </button>
              ))}
              <label className="custom-amount">
                <span>Custom Amount</span>
                <input
                  type="number"
                  min="100"
                  value={donationAmount}
                  onChange={(event) => setDonationAmount(Number(event.target.value) || 0)}
                />
              </label>
            </div>

            <div className="form-grid">
              <label>
                <span>Full Name</span>
                <input
                  type="text"
                  value={donor.name}
                  onChange={(event) => setDonor({ ...donor, name: event.target.value })}
                  placeholder="Enter your full name"
                />
              </label>
              <label>
                <span>Email Address</span>
                <input
                  type="email"
                  value={donor.email}
                  onChange={(event) => setDonor({ ...donor, email: event.target.value })}
                  placeholder="Enter your email"
                />
              </label>
              <label>
                <span>Phone Number</span>
                <input
                  type="tel"
                  value={donor.phone}
                  onChange={(event) => setDonor({ ...donor, phone: event.target.value })}
                  placeholder="Enter phone number"
                />
              </label>
              <label>
                <span>Payment Method</span>
                <select defaultValue="Credit/Debit Card">
                  <option>Credit/Debit Card</option>
                  <option>UPI</option>
                  <option>Net Banking</option>
                </select>
              </label>
            </div>

            {formError && <p className="error-text">{formError}</p>}

            <div className="summary-box">
              <div>
                <span>Campaign</span>
                <strong>{selectedCampaign.title}</strong>
              </div>
              <div>
                <span>Frequency</span>
                <strong>{frequency}</strong>
              </div>
              <div>
                <span>Total Amount</span>
                <strong>{formatCurrency(donationAmount)}</strong>
              </div>
            </div>

            <button type="submit" className="primary-btn full-width">
              Proceed to Payment
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
