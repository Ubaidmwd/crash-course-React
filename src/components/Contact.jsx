import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="email" />
      </form>
      <button onClick={() => console.log(name)}>press</button>
      <p>{name}</p>
    </div>
  );
};

export default Contact;
