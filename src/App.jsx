import UserInputs from "./components/UserInputs";
import Header from "./components/Header";
import Results from "./components/Results";

JSON_DATA = {
  init_investment: 0,
  annual_investment: 0,
  expected_return: 0,
  duration: 0,
};

function App() {
  return (
    <>
      <Header />
      <UserInputs />
      <Results />
    </>
  );
}

export default App;
