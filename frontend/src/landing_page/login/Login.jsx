import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3002/api/auth/login", {
        email: email.trim().toLowerCase(),
        password,
      });
      console.log("Response:", res.data);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        // Redirect to Dashboard app
        window.location.href = "http://localhost:5173";
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2  className="mt-5">Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button  className="btn btn-primary mt-4"  style={{ marginTop: "10px", padding: "10px 20px" }}>
          Login
        </button>
      </form>

      {/* Register link */}
      <p style={{ marginTop: "15px" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
