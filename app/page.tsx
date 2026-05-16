import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'home'
}

export default function Home() {
  return (
    <>
      <h1>movie catalog</h1>
      <nav className="flex gap-4">
        <Link href="/catalog">catalog</Link>
        <Link href="/about">about</Link>
      </nav>
    </>
  );
}
