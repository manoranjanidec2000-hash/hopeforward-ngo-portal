import Link from "next/link";
import TopNav from "@/components/TopNav";

const stats = [
  { label: "Total Donations", value: "₹2.5 Cr+" },
  { label: "Active Volunteers", value: "5,000+" },
  { label: "Campaigns Completed", value: "120+" },
  { label: "People Impacted", value: "350+" },
];

const campaigns = [
  {
    id: 1,
    title: "Clean Water for Rural Villages",
    category: "Clean Water",
    description: "Ensuring safe drinking water and sanitation access for families in remote communities.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80",
    raised: 850000,
    target: 1000000,
    progress: 85,
  },
  {
    id: 2,
    title: "Education Fund",
    category: "Education",
    description: "Building brighter futures by supporting school kits, scholarships, and digital learning.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    raised: 720000,
    target: 900000,
    progress: 80,
  },
  {
    id: 3,
    title: "Community Health Centers",
    category: "Healthcare",
    description: "Funding essential healthcare outreach, screenings, and medicines for underserved groups.",
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=900&q=80",
    raised: 670000,
    target: 850000,
    progress: 79,
  },
];

const volunteers = [
  {
    id: 1,
    title: "Rural Education Mentor",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80",
    location: "Gaya, Bihar",
    date: "12 Oct 2026",
    description: "Support after-school learning sessions and mentorship for children in need.",
  },
  {
    id: 2,
    title: "Community Health Outreach",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
    location: "Nagpur, Maharashtra",
    date: "18 Oct 2026",
    description: "Help mobilize screenings, awareness drives, and patient support services.",
  },
  {
    id: 3,
    title: "Water & Sanitation Volunteer",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    location: "Khandwa, Madhya Pradesh",
    date: "25 Oct 2026",
    description: "Work with village teams to improve water access and hygiene awareness.",
  },
];

const formatCurrency = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function HomePage() {
  return (
    <div className="page-shell">
      <TopNav />

      <main>
        <section className="hero-section container">
          <div className="hero-copy">
            <p className="eyebrow">Together, We Can Make a Difference</p>
            <h1>Together, We Can Make a Difference</h1>
            <p className="lede">
              HopeForward connects communities, donors, and volunteers to create meaningful social impact through
              education, healthcare, water access, and disaster relief.
            </p>
            <div className="hero-actions">
              <Link href="/volunteers" className="secondary-btn">Volunteer With Us</Link>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
              alt="Community support group in rural area"
            />
          </div>
        </section>

        <section className="stats-section container">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </section>

        <section className="featured-section container">
          <div className="section-header">
            <h2>Featured Causes That Need Your Help</h2>
          </div>

          <div className="campaign-grid compact-grid">
            {campaigns.map((campaign) => (
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
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="community-banner container">
          <div className="community-banner-content">
            <div className="community-badge">WhatsApp Community</div>
            <h3>Stay tuned with us for the latest updates</h3>
            <p>Join our community for volunteering announcements, campaign updates, field stories, and new opportunities.</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="primary-btn whatsapp-btn"
          >
            Join Community
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-wrap footer-brand">
              <div className="brand-mark">H</div>
              <span>HopeForward</span>
            </div>
            <p>
              We are a people-first NGO platform supporting education, healthcare, clean water, and resilient
              communities across India.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/campaigns">Campaigns</Link></li>
              <li><Link href="/volunteers">Volunteers</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>+91 98765 43210</li>
              <li>hello@hopeforward.org</li>
              <li>Huda City Centre, Gurugram</li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div className="socials">
              <span>f</span>
              <span>x</span>
              <span>in</span>
              <span>▶</span>
            </div>
          </div>
        </div>
        <div className="copyright container">
          <p>© 2026 HopeForward Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
