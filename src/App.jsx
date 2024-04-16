import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import { useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  return (
    <>
      <SignUpForm
        token={token}
        setToken={setToken}
        error={error}
        setError={setError}
        message={message}
        setMessage={setMessage}
      />
      <Authenticate
        token={token}
        setToken={setToken}
        error={error}
        setError={setError}
        message={message}
        setMessage={setMessage}
      />
    </>
  );
}

export default App;
