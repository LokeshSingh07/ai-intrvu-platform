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
      <body style={{ margin: 0, backgroundColor: "#FAF8F4" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
            fontFamily: "'IBM Plex Sans', sans-serif",
            color: "#12151B",
          }}
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.75rem",
              margin: 0,
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "1rem",
              color: "#6B7280",
              maxWidth: "28rem",
            }}
          >
            The app hit an unexpected error. Try again, and reach out if it keeps happening.
          </p>
          {error?.digest && (
            <p
              style={{
                marginTop: "0.75rem",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#8A8F9C",
              }}
            >
              Error ID: {error.digest}
            </p>
          )}
          <button
            onClick={() => reset()}
            style={{
              marginTop: "1.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: "#12151B",
              color: "#FFFFFF",
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1E222B")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#12151B")}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}