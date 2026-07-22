'use client';

export const dynamic = "force-dynamic";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h1>Something went wrong</h1>
          <p>We hit an unexpected error. Please try again.</p>
          <button onClick={() => reset()}>Try Again</button>
        </div>
      </body>
    </html>
  );
}