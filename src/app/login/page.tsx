"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import TopNav from "@/components/TopNav";

export default function LoginPage() {
  const router = useRouter();
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const nextPath = params.get("next") || "/campaigns";
  const campaignId = params.get("campaign");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const sendOtp = () => {
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }

    setError("");
    setOtpSent(true);
  };

  const verifyAndLogin = (event: FormEvent) => {
    event.preventDefault();

    if (!otp.trim()) {
      setError("Please enter the OTP sent to your phone number.");
      return;
    }

    const targetPath = campaignId ? `${nextPath}&campaign=${campaignId}` : nextPath;
    localStorage.setItem(
      "hopeforward-user",
      JSON.stringify({ name, phone, loggedIn: true, campaignId })
    );
    router.push(targetPath);
  };

  return (
    <>
      <TopNav />
      <div className="auth-page">
        <div className="auth-shell">
          <div className="auth-card">
          <div className="auth-header">
            <div className="brand-wrap">
              <div className="brand-mark">H</div>
              <span>HopeForward</span>
            </div>
            <Link href="/" className="back-link">← Back to Home</Link>
          </div>

          <h1>Login to continue</h1>
          <p className="auth-intro">Enter your details and verify your phone number to access donations and campaigns.</p>

          <form onSubmit={verifyAndLogin} className="auth-form">
            <label>
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                disabled={otpSent}
              />
            </label>

            <label>
              <span>Phone Number</span>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                disabled={otpSent}
              />
            </label>

            {!otpSent ? (
              <button type="button" className="primary-btn full-width" onClick={sendOtp}>
                Send OTP
              </button>
            ) : (
              <>
                <label>
                  <span>OTP Verification</span>
                  <input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(event) => setOtp(event.target.value)}
                  />
                </label>

                <button type="submit" className="primary-btn full-width">
                  Verify & Login
                </button>
              </>
            )}

            {error && <p className="error-text">{error}</p>}
          </form>
          </div>
        </div>
      </div>
    </>
  );
}
