import { useState } from "react";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

function LoginPage({ goToSignup, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

        <h1>🔐 Login</h1>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <br /><br />
        <button onClick={handleLogin}>
          Login
        </button>

        <br /><br />

        <p>
          Don't have an account?
        </p>

        <br />
        <button onClick={goToSignup}>
          Create Account
        </button>

      </div>
    </div>
  );
}

export default LoginPage;