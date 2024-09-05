import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../theme/globals.css";

const montserrat = Montserrat({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Carolina Ferreira",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
