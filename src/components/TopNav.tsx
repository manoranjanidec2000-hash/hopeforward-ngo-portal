"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TopNavProps = {
  isLoggedIn?: boolean;
};

export default function TopNav({ isLoggedIn = false }: TopNavProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLogin = pathname.startsWith("/login");

  return (
    <header className="topbar">
      <nav className="navbar container">
        <Link href="/" className="brand-wrap">
          <div className="brand-mark">H</div>
          <span>HopeForward</span>
        </Link>

        <div className="nav-links">
          <Link href="/" className={isHome ? "active" : ""}>Home</Link>
          <Link href="/campaigns" className={pathname === "/campaigns" ? "active" : ""}>Campaigns</Link>
          <Link href="/volunteers" className={pathname === "/volunteers" ? "active" : ""}>Volunteers</Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>About Us</Link>
        </div>

        <div className="nav-actions">
          <Link href="/login" className={`text-btn ${isLogin ? "active" : ""}`}>
            {isLoggedIn ? "Profile" : "Login"}
          </Link>
          <Link href="/login?next=/donate" className="primary-btn">
            Donate Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
