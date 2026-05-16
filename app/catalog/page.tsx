
import Link from "next/link";

export default function CatalogPage() {
  type Movie = {
    id: number;
    title: string;
    year: number;
  };

  const movies: Movie[] = [
    { id: 1, title: "The House That Jack Built", year: 2018 },
    { id: 2, title: "Dogville", year: 2003 },
    { id: 3, title: "The Thing", year: 1982 },
    { id: 4, title: "The Room", year: 2003 },
    { id: 5, title: "The Lobster", year: 2015 },
  ];
  return (
    <>
      {movies.map((movie) => (
        <Link className="" key={movie.id} href={`/catalog/${movie.id}`}>
          {movie.title} year of {movie.year}
        </Link>
      ))}
    </>
  );
}
