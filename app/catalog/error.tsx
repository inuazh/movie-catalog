"use client";  

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function CatalogError({ error, reset }: ErrorProps) {
  return (
    <div>
      <h2>smf wrong</h2>
      <p>{error.message}</p>
      <button onClick={reset}>retry</button>
    </div>
  );
}