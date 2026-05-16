import FavoriteButton from "@/components/FavoriteButton";
import type { Movie } from "../page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MoviePage({ params }: Props) {
  const { id } = await params;

  await new Promise(resolve=> setTimeout(resolve, 2000))

  const [movieRes, similarRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=4`),
  ]);


  const [movie, similar]: [Movie, Movie[]] = await Promise.all([
    movieRes.json(),
    similarRes.json(),
  ]);

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.body}</p>
      <FavoriteButton />
      <h2>similar</h2>
      <ul>
        {similar.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
