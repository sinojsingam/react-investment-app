import Input from "./Input";

export default function UserInputs({ onValueChange, inputValue }) {
  return (
    <div className="input-group" id="user-input">
      <Input
        name={"init_investment"}
        inputValue={inputValue.init_investment}
        onValueChange={onValueChange}
      >
        Initial investment
      </Input>
      <Input
        name={"annual_investment"}
        inputValue={inputValue.annual_investment}
        onValueChange={onValueChange}
      >
        Annual investment
      </Input>
      <Input
        name={"expected_return"}
        inputValue={inputValue.expected_return}
        onValueChange={onValueChange}
      >
        Expected Return
      </Input>
      <Input
        name={"duration"}
        inputValue={inputValue.duration}
        onValueChange={onValueChange}
      >
        Duration
      </Input>
    </div>
  );
}
