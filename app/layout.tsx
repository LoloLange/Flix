import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Header from "./components/shared/Header";
import { ViewTransitions } from "next-view-transitions";
import { Footer } from "./components/shared/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://flix-git.vercel.app"),
  title: {
    default: "Flix",
    template: "%s | Flix",
  },
  description:
    "Your go-to for movie and TV show info. Browse synopses, ratings, latest releases and more. Stay updated and discover titles you can't miss.",
  keywords: [
    "movies",
    "TV shows",
    "film database",
    "movie reviews",
    "latest releases",
    "streaming",
    "movie trailers",
    "Flix",
    "TMDb",
    "The Movie Database",
    "cinema",
    "movie ratings",
    "popular movies",
    "top rated movies",
    "series",
    "watchlist",
    "entertainment",
    "Hollywood",
    "upcoming movies",
    "movie recommendations",
    "streaming platforms",
    "Netflix",
    "Disney+",
    "HBO",
    "Amazon Prime Video",
    "actors",
    "directors",
    "filmography",
    "movie synopses",
    "TV schedules",
    "best series",
  ],
  creator: "Lorenzo Langellotti",
  publisher: "Lorenzo Langellotti",

  openGraph: {
    title: "Flix",
    description:
      "Your go-to for movie and TV show info. Browse synopses, ratings, latest releases and more. Stay updated and discover titles you can't miss.",
    url: "https://flix-git.vercel.app",
    siteName: "Flix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo de Flix en un fondo negro",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
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
