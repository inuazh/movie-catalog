import SearchBar from "@/components/SearchBar";
import { Metadata } from "next";
// import Link from "next/link";

export type Movie = {
  id: number;
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: "catalog",
};

export default async function CatalogPage() {
  const response = await fetch(`${process.env.API_BASE_URL}/posts?_limit=10`, {
    cache: "no-store",
  });

  const movies: Movie[] = await response.json();

  return (
    <>
      {/* {movies.map((movie) => (
        <Link
          className="border rounded p-4 mb-2 block"
          key={movie.id}
          href={`/catalog/${movie.id}`}
        >
          <h2 className="font-bold mb-1">{movie.title}</h2>
          <p>{movie.body}</p>
        </Link>
      ))} */}
      <SearchBar movies={movies} />
    </>
  );
}
