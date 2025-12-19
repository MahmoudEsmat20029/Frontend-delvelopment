import { useState } from "react";

export default function MainComponent() {
  const [signIn, setSignIn] = useState(true);

  function handleclick() {
    setSignIn((prev) => !prev);
  }

  return (
    <div className="container">
      {signIn ? <h1>Login</h1> : <h1>Sign In</h1>}

      <div className="sign-input">
        {!signIn && (
          <div className="input-field">
            <i class="fa-solid fa-user"></i>
            <input type="text" placeholder="UserName" />
          </div>
        )}
        <div className="input-field">
          <i class="fa-solid fa-envelope"></i>
          <input type="text" placeholder="Email Id" />
        </div>
        <div className="input-field">
          <i class="fa-solid fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        {signIn && (
          <p>
            Lost password ? {}
            <a href="#" style={{ textDecoration: "none" }}>
              Click here!
            </a>
          </p>
        )}

        <div className="buttons">
          <button className={signIn ? "" : "active"} onClick={handleclick}>
            Sign In
          </button>
          <button className={signIn ? "active" : ""} onClick={handleclick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
