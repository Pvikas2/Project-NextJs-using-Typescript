export default function LoginPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Login</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px", margin: "2rem auto" }}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
