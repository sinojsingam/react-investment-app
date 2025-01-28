import UserInputs from "./components/UserInputs";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="input-group" id="user-input">
        <UserInputs />
      </div>
    </>
  );
}

export default App;
