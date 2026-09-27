import Link from "next/link";

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

export default function VolunteersPage() {
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
        <div className="page-intro">
          <h1>Make a Difference With Your Time</h1>
        </div>

        <div className="volunteer-grid">
          {volunteers.map((volunteer) => (
            <article className="volunteer-card" key={volunteer.id}>
              <img src={volunteer.image} alt={volunteer.title} />
              <div className="card-content">
                <h3>{volunteer.title}</h3>
                <div className="meta-row">
                  <span>{volunteer.location}</span>
                  <span>{volunteer.date}</span>
                </div>
                <p>{volunteer.description}</p>
                <button className="primary-btn full-width">Register</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
