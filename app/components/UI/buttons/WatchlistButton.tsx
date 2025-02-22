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
    } else {
      setAdded(false);
    }
  }, [media]);

  return added ? (
    <button
      onClick={() => handleRemoveFromWatchlist({ movieId: media.id })}
      className="flex gap-x-2 border-2 border-gray-700 w-fit py-1.5 min-[2000px]:py-2 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300 items-center"
    >
      <IconX className="w-6 h-6 min-[2000px]:w-7 min-[2000px]:h-7" />
      Remove from Watchlist
    </button>
  ) : (
    <button
      onClick={() => handleAddToWatchlist({ media, setAdded })}
      className="flex gap-x-2 border-2 border-gray-700 w-fit py-1.5 min-[2000px]:py-2 px-3 mt-4 rounded-lg cursor-pointer shadow-lg hover:scale-105 duration-300 items-center"
    >
      <IconPlus className="w-6 h-6 min-[2000px]:w-7 min-[2000px]:h-7" />
      Add to Watchlist
    </button>
  );
}
