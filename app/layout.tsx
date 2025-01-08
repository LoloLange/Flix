import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Header from "./components/shared/Header";
import { ViewTransitions } from "next-view-transitions";

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
        <body className={`${inter.variable} antialiased`}>
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
