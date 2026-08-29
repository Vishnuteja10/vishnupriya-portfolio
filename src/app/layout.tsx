import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vishnupriya | Retention Marketing & Lifecycle Strategist",
  description: "Diagnosing customer journeys, building lifecycle systems, and designing retention and CRM strategies that turn one-time buyers into repeat customers.",
  keywords: "Retention Marketing, Lifecycle Marketing, CRM Strategist, D2C, Email Deliverability, Customer Behavior, Shopify, Cohort Retention",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
