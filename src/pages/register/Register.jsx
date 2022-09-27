import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div class="container">
        <h2 id="title">Register</h2>

        <form class="items" onSubmit={handleSubmit}>
          <input
            type="text"
            id="form-text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            id="form-text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="form-password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              something went wrong
            </span>
          )}
          <button id="button" type="submit">
            Register
          </button>

          <button id="sign">
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
