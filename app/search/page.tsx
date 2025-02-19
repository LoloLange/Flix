import { Suspense } from 'react';
import { SearchContainer } from "../components/search/SearchContainer";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContainer />
    </Suspense>
  );
}