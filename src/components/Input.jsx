import { useState } from "react";

export default function Input({ children, name }) {
  const [value, setValue] = useState(0);
  function handleChange(e) {
    // get the new values from user input
    setValue(e.target.value);
  }

  let data = { [name]: value };
  console.log(data);
  return (
    <label>
      {children}: <input value={value} name={name} onChange={handleChange} />
    </label>
  );
}
