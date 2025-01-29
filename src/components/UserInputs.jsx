import Input from "./Input";

export default function UserInputs({ onChange, inputValue }) {
  return (
    <div className="input-group" id="user-input">
      <Input
        name={"init_investment"}
        inputValue={inputValue.init_investment}
        onChange={onChange}
      >
        Initial investment
      </Input>
      <Input
        name={"annual_investment"}
        inputValue={inputValue.annual_investment}
        onChange={onChange}
      >
        Annual investment
      </Input>
      <Input
        name={"expected_return"}
        inputValue={inputValue.expected_return}
        onChange={onChange}
      >
        Expected Return
      </Input>
      <Input
        name={"duration"}
        inputValue={inputValue.duration}
        onChange={onChange}
      >
        Duration
      </Input>
    </div>
  );
}
