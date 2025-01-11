import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Header from "./components/shared/Header";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "./components/shared/Footer";

export const metadata: Metadata = {
  title: "Flix",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" />
        </head>
        <body className={`${inter.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
