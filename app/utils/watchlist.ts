import { Dispatch } from "react";
import { Watchlist } from "../types/types";

export const handleAddToWatchlist = ({
  media,
  setAdded,
}: {
  media: Watchlist;
  setAdded: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const existingWatchlist = localStorage.getItem("watchlist");
  const watchlist = existingWatchlist ? JSON.parse(existingWatchlist) : [];

  if (!watchlist.some((item: typeof media) => item.id === media.id)) {
    watchlist.push(media);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
    setAdded(true);
  }
};

export const handleRemoveFromWatchlist = ({ movieId }: { movieId: string }) => {
  const existingWatchlist = localStorage.getItem("watchlist");
  if (existingWatchlist) {
    const watchlist = JSON.parse(existingWatchlist);
    const updatedWatchlist = watchlist.filter(
      (item: { id: string }) => item.id !== movieId
    );

    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    location.reload();
  } else {
    alert("Watchlist is already empty.");
  }
};
