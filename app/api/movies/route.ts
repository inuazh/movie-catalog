import { NextResponse } from "next/server";

type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
};

const MOVIES: Movie[] = [
  { id: 1, title: "The House That Jack Built", year: 2018, genre: "thriller" },
  { id: 2, title: "Dogville", year: 2003, genre: "drama" },
  { id: 3, title: "The Thing", year: 1982, genre: "horror" },
  { id: 4, title: "The Room", year: 2003, genre: "drama" },
  { id: 5, title: "The Lobster", year: 2015, genre: "fantasy" },
];

export function GET(request: Request): NextResponse {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");

  const result = genre ? MOVIES.filter((m) => m.genre === genre) : MOVIES;

  return NextResponse.json({ data: result, total: result.length });
}

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as Partial<Movie>;

  if (!body.title || !body.year) {
    return NextResponse.json(
      { error: "title and year required!" },
      { status: 400 },
    );
  }

  const newMovie: Movie = {
    id: MOVIES.length + 1,
    title: body.title,
    year: body.year,
    genre: body.genre ?? "other",
  };

  return NextResponse.json({ data: newMovie }, { status: 201 });
}
