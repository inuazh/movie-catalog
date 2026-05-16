
import Link from "next/link";

 export type Movie = {
    id: number;
    title: string;
    body: string;
  };

export default  async function CatalogPage() {


 const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { cache: 'no-store'}
 );

 const movies: Movie[] = await response.json()

  return (
    <>
      {movies.map((movie) => (
          <Link className="border rounded p-4 mb-2 block" key={movie.id} href={`/catalog/${movie.id}`}>
            <h2 className="font-bold mb-1">{movie.title}</h2>
            <p>{movie.body}</p>
        </Link>
      ))}
    </>
  );
}
