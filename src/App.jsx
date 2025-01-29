import UserInputs from "./components/UserInputs";
import Header from "./components/Header";
import Results from "./components/Results";
import { useState } from "react";

let JSON_DATA = {
  init_investment: 0,
  annual_investment: 0,
  expected_return: 0,
  duration: 0,
};

function App() {
  const [value, setValue] = useState(JSON_DATA);
  function handleChange(e) {
    // get the new values from user input
    //setValue(e.target.value);
    switch (e.target.name) {
      case "init_investment":
        setValue((prev) => ({
          ...prev,
          init_investment: Number(e.target.value),
        }));
        break;
      case "annual_investment":
        setValue((prev) => ({
          ...prev,
          annual_investment: Number(e.target.value),
        }));
        break;
      case "expected_return":
        setValue((prev) => ({
          ...prev,
          expected_return: Number(e.target.value),
        }));
        break;
      case "duration":
        setValue((prev) => ({ ...prev, duration: Number(e.target.value) }));
        break;
    }
  }
  function handleClick() {
    console.log(value);
  }

  return (
    <>
      <Header />
      <UserInputs inputValue={value} onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      <Results />
    </>
  );
}

export default App;
