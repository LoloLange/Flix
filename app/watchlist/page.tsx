"use client";
import { useEffect, useState } from "react";
import { MediaCard } from "../components/UI/cards/MediaCard";
import { Watchlist } from "../types/types";
import { TitleAndDescription } from "../components/UI/text/TitleAndDescription";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<Watchlist[]>([]);

  useEffect(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) {
      setWatchlist(JSON.parse(savedWatchlist));
    }
  }, []);

  return (
    <section className="min-h-[calc(100vh-170px-112px)] mt-28 px-20">
      <TitleAndDescription title="Watchlist" description="See movies or tv shows that you have saved to watch later" />
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-4 gap-5">
          {watchlist.map((r) => (
            <MediaCard key={r.id} type={r.type} media={r} watchlist={true} />
          ))}
        </div>
      ) : (
        <p>You have not added any movies or shows to the watchlist.</p>
      )}
    </section>
  );
}
