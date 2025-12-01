import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/api/auth/register", {
        email: email.trim().toLowerCase(),
        password,
      });

      if (res.data.success) {
        // Save token if you return token (optional)
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
        }

        // Redirect to dashboard
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
      <h2 className="mt-5">Register</h2>

      <form onSubmit={handleRegister}>
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

        <button  className="btn btn-primary mt-4" style={{ marginTop: "10px", padding: "10px 20px" }}>
          Register
        </button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have an account?{" "}
        <span
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/")}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
