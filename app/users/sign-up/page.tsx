export default function SignupPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Sign Up</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "300px", margin: "2rem auto" }}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
