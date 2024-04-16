// import "./app.jsx";

export default function Authenticate({
  setError,
  error,
  token,
  message,
  setMessage,
}) {
  // event.preventDefault();
  async function authenticate() {
    setMessage("");
    setError(false);
    const response = await fetch(
      "https://fsa-jwt-practice.herokuapp.com/authenticate",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const json = await response.json();

    if (!json.success) {
      setError((prev) => !prev);
      setMessage(json.message);
      return;
    }
    setMessage(json.message);
  }
  return (
    <>
      <div className={error ? "error" : "success"}>{message}</div>
      <h2>Authenticate!</h2>
      <button onClick={authenticate}>Authenticate</button>
    </>
  );
}
