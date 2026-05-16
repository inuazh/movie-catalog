'use client'

import {  useState } from "react";


  type Movie = {
    id: number;
    title: string;
  }

  type SearchBarProps = {
    movies: Movie[]
  }


export default function SearchBar({movies}: SearchBarProps) {
    const [query, setQuery] = useState('');

    const filtered = movies.filter(m => 
        m.title.toLowerCase().includes(query.toLowerCase())
    );
    


  

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="...reserch"
      />
      <p>found: {filtered.length}</p>
      <ul>
        {filtered.map(mov => (
            <li key={mov.id}>{mov.title}</li>
        ))}
      </ul>
    </>
  );
}
