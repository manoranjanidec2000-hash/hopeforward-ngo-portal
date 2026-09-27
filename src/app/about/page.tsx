import Link from "next/link";

const teamMembers = [
  { name: "Dr. Emily Okafor", role: "Executive Director", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" },
  { name: "Ananya Sen", role: "Head of Programs", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" },
  { name: "David Miller", role: "Director of Finance", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
  { name: "Rajesh Kumari", role: "Community Outreach", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80" },
];

export default function AboutPage() {
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
            <Link href="/login" className="text-btn">Login</Link>
            <Link href="/login?next=/donate" className="primary-btn">Donate Now</Link>
          </div>
        </nav>
      </header>

      <main className="container page-section">
        <div className="section-header title-row">
          <h2>About HopeForward</h2>
          <span className="crumb">Home &gt; About Us</span>
        </div>

        <div className="about-main">
          <div className="about-copy">
            <h3>A Journey of Faith and Mutual Aid</h3>
            <p>
              HopeForward is a community-driven organization helping families through education, healthcare, rural
              development, and sustainable initiatives that build dignity and long-term resilience.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80"
            alt="HopeForward community outreach"
          />
        </div>

        <div className="mission-grid">
          <div className="info-card">
            <h4>Our Mission</h4>
            <p>
              Empowering vulnerable and underserved communities through education, healthcare, social welfare, and
              sustainable development.
            </p>
          </div>
          <div className="info-card">
            <h4>Our Vision</h4>
            <p>
              A world where every community has equal access to opportunities and essential resources.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="value-grid">
            {['Transparency', 'Community', 'Sustainability', 'Inclusion'].map((value) => (
              <div className="value-card" key={value}>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="team-section">
          <h3>The Team Driving Change</h3>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
