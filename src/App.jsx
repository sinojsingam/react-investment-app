import UserInputs from "./components/UserInputs";
import Header from "./components/Header";
import Results from "./components/Results";
import Debug from "./components/Debug";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

let JSON_DATA = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [value, setValue] = useState(JSON_DATA);

  function handleChange(e) {
    switch (e.target.name) {
      case "init_investment":
        isNaN(Number(e.target.value))
          ? console.log("enter number")
          : setValue((prev) => ({
              ...prev,
              initialInvestment: Number(e.target.value),
            }));
        break;
      case "annual_investment":
        isNaN(Number(e.target.value))
          ? console.log("enter number")
          : setValue((prev) => ({
              ...prev,
              annualInvestment: Number(e.target.value),
            }));
        break;
      case "expected_return":
        isNaN(Number(e.target.value))
          ? console.log("enter number")
          : setValue((prev) => ({
              ...prev,
              expectedReturn: Number(e.target.value),
            }));
        break;
      case "duration":
        isNaN(Number(e.target.value))
          ? console.log("enter number")
          : setValue((prev) => ({
              ...prev,
              duration: Number(e.target.value),
            }));
        break;
    }
  }
  let result = calculateInvestmentResults(value);

  return (
    <>
      <Header />
      <UserInputs inputValue={value} onValueChange={handleChange} />
      <Results data={result} />
    </>
  );
}

export default App;
