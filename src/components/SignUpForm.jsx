import { useState } from "react";

export default function SignUpForm({ setToken, setError, error }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length < 1 || password.length < 2) {
      setFlag(false);
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }
  // prettier-ignore
  return (
    <>
      <h2>Sign Up!</h2>;{error && <p>{error}</p>};
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

/* <button disabled={flag}>Submit</button>; */
