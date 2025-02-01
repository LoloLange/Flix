import { Watchlist } from "../../../types/types";
import { useState, useEffect } from "react";
import { IconPlus, IconX } from "@tabler/icons-react";
import {
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
} from "../../../utils/watchlist";

export default function WatchlistButton({ media }: { media: Watchlist }) {
  const [added, setAdded] = useState<boolean>(false);

  useEffect(() => {
    const existingWatchlist = localStorage.getItem("watchlist");
    const watchlist = existingWatchlist ? JSON.parse(existingWatchlist) : [];
    if (watchlist.some((item: typeof media) => item.id === media.id)) {
      setAdded(true);
    }
  }, [media]);

  useEffect(() => {
    console.log(added);
  }, [added]);

  return added ? (
    <button
      onClick={() => handleRemoveFromWatchlist({ movieId: media.id })}
      className="flex gap-x-2 border-2 border-gray-700 w-fit py-1.5 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300"
    >
      <IconX />
      Remove from Watchlist
    </button>
  ) : (
    <button
      onClick={() => handleAddToWatchlist({ media, setAdded })}
      className="flex gap-x-2 border-2 border-gray-700 w-fit py-1.5 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300"
    >
      <IconPlus />
      Add to Watchlist
    </button>
  );
}
