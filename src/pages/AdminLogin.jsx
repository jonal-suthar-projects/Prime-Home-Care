import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "primehomecarenj@gmail.com" &&
      password === "Primehomenj2025*"
    ) {
      localStorage.setItem("adminToken", "authenticated");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f4f6f9"
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          width: "380px",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          background: "#ffffff"
        }}
      >
        <h2 style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#000",
          fontWeight: "600"
        }}>
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#0077b6",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;