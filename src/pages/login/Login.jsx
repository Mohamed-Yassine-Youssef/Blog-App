import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "login_start" });
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "login_success", payload: res.data });
    } catch (err) {
      dispatch({ type: "login_failure" });
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h2 id="title">Login</h2>

        <form className="items" onSubmit={handleSubmit}>
          <input
            type="text"
            id="form-text"
            placeholder="Username"
            ref={userRef}
          />
          <input
            type="password"
            id="form-password"
            placeholder="Password"
            ref={passwordRef}
          />

          <button id="button" type="submit" disabled={isFetching}>
            Send
          </button>

          <button id="sign">
            <Link className="link" to="/register">
              Register
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
