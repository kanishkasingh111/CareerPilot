import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

function LoginPage({ goToSignup, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      alert("Login Successful ✅");

      onLogin(userCredential.user);

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="app-container">
      <div className="roadmap-card">

        <h1 className="login-title">
          Welcome Back 👋
        </h1>

        <p className="login-subtitle">
          Continue your CareerPilot journey.
        </p>
        <br />
        <input
          type="email"
          placeholder="📧 Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
          <br /><br />
          <button
            className="eye-btn"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            type="button"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>

        </div>
        <br /><br />
        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login →
        </button>

        <br /><br />

        <p>
          Don't have an account?
        </p>

        <br />
        <button
          className="signup-btn"
          onClick={goToSignup}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default LoginPage;