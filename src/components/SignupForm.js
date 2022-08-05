import { useState } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const display = (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <form>
      <label htmlFor="name">
        Name :
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Mary"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          id="email"
          placeholder="mary.poppins@disney.fr"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit" onClick={display}>
        Submit
      </button>
    </form>
  );
}
