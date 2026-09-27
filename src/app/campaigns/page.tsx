"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Villages",
    category: "Clean Water",
    description: "Ensuring safe drinking water and sanitation access for families in remote communities.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
    raised: 850000,
    target: 1000000,
    progress: 85,
  },
  {
    id: 2,
    title: "Education Fund",
    category: "Education",
    description: "Building brighter futures by supporting school kits, scholarships, and digital learning.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    raised: 720000,
    target: 900000,
    progress: 80,
  },
  {
    id: 3,
    title: "Community Health Centers",
    category: "Healthcare",
    description: "Funding essential healthcare outreach, screenings, and medicines for underserved groups.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    raised: 670000,
    target: 850000,
    progress: 79,
  },
  {
    id: 4,
    title: "Disaster Relief Fund",
    category: "Community",
    description: "Supporting emergency food kits, shelter, and rebuilding for families after climate shocks.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    raised: 540000,
    target: 700000,
    progress: 77,
  },
  {
    id: 5,
    title: "Tree Plantation Drive",
    category: "Environment",
    description: "Restoring green cover and improving climate resilience in vulnerable villages.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
    raised: 430000,
    target: 600000,
    progress: 72,
  },
  {
    id: 6,
    title: "Digital Literacy Program",
    category: "Education",
    description: "Helping youth and women develop digital skills for work, learning, and inclusion.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    raised: 610000,
    target: 800000,
    progress: 76,
  },
];

const categories = ["All", "Education", "Healthcare", "Environment", "Community", "Clean Water"];

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function CampaignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("hopeforward-user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const filteredCampaigns = campaigns.filter((campaign) => {
    const matchesCategory = selectedCategory === "All" || campaign.category === selectedCategory;
    const matchesSearch =
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

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
            <Link href="/login" className="text-btn">{isLoggedIn ? "Profile" : "Login"}</Link>
            {!isLoggedIn && <Link href="/login?next=/donate" className="primary-btn">Login to Donate</Link>}
          </div>
        </nav>
      </header>

      <main className="container page-section">
        <div className="page-intro">
          <h1>Explore Active Campaigns</h1>
          <p>Discover the causes that need your support and help create meaningful change.</p>
        </div>

        <div className="toolbar">
          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                className={category === selectedCategory ? "filter-btn active" : "filter-btn"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="search-wrap">
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search campaigns..."
            />
          </div>
        </div>

        <div className="campaign-grid">
          {filteredCampaigns.map((campaign) => (
            <article className="campaign-card" key={campaign.id}>
              <img src={campaign.image} alt={campaign.title} />
              <div className="card-content">
                <span className="chip">{campaign.category}</span>
                <h3>{campaign.title}</h3>
                <p>{campaign.description}</p>
                <div className="progress-row">
                  <span>{campaign.progress}% funded</span>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${campaign.progress}%` }} />
                </div>
                <div className="amount-row">
                  <strong>{formatCurrency(campaign.raised)}</strong>
                  <span>of {formatCurrency(campaign.target)}</span>
                </div>
                {isLoggedIn ? (
                  <Link href={`/donate?campaign=${campaign.id}`} className="primary-btn full-width block-link">
                    Donate Now
                  </Link>
                ) : (
                  <Link href={`/login?next=/donate&campaign=${campaign.id}`} className="secondary-btn full-width block-link">
                    Login to Donate
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
