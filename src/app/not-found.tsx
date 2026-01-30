export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: 600 }}>404</h1>
      <p style={{ opacity: 0.7, marginTop: "0.5rem" }}>
        Page not found
      </p>
      <a href="/" style={{ marginTop: "1.5rem", textDecoration: "underline" }}>
        Go back home
      </a>
    </main>
  );
}
