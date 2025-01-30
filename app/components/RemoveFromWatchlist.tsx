"use client";

import { IconX } from "@tabler/icons-react";
import { handleRemoveFromWatchlist } from "../utils/watchlist";

interface RemoveFromWatchlistButtonProps {
  movieId: string;
}

export default function RemoveFromWatchlistButton({
  movieId,
}: RemoveFromWatchlistButtonProps) {
  return (
    <IconX
      onClick={() => handleRemoveFromWatchlist({ movieId })}
      className="absolute top-3 right-4 text-white w-7 h-7 z-50 hover:text-red-600 duration-300"
    />
  );
}
