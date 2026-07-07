import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

function SignupPage({ goToLogin }) {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert(
        "Account Created Successfully ✅"
      );

      goToLogin();

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="app-container">
      <div className="roadmap-card">

        <h1>📝 Sign Up</h1>

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

        <button onClick={handleSignup}>
          Create Account
        </button>

        <p>
          Already have an account?
        </p>

        <button onClick={goToLogin}>
          Login
        </button>

      </div>
    </div>
  );
}

export default SignupPage;