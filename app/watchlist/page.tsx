"use client";
import { useEffect, useState } from "react";
import { ExploreCard } from "../components/explore/ExploreCard";
import { Watchlist } from "../types/types";

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
      <div className="flex flex-col gap-y-2 items-center mb-10">
        <p className="text-3xl font-bold">Watchlist</p>
        <p className="text-gray-500">
          See movies or tv shows that you have saved to watch later
        </p>
      </div>
      {watchlist.length > 0 ? (
        <div className="grid grid-cols-4 gap-5">
          {watchlist.map((r) => (
            <ExploreCard key={r.id} type={r.type} media={r} watchlist={true} />
          ))}
        </div>
      ) : (
        <p>You have not added any movies or shows to the watchlist.</p>
      )}
    </section>
  );
}
