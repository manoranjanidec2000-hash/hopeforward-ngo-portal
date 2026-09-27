import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HopeForward | NGO Donation Portal",
  description: "HopeForward is a donation and volunteer platform for education, healthcare, clean water, and community support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
