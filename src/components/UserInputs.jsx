import Input from "./Input";

export default function UserInputs({ onValueChange, inputValue }) {
  return (
    <div className="input-group" id="user-input">
      <Input
        name={"init_investment"}
        inputValue={inputValue.initialInvestment}
        onValueChange={onValueChange}
      >
        Initial investment
      </Input>
      <Input
        // initialInvestment: 0,
        // annualInvestment: 0,
        // expectedReturn: 0,
        // duration: 0,
        name={"annual_investment"}
        inputValue={inputValue.annualInvestment}
        onValueChange={onValueChange}
      >
        Annual investment
      </Input>
      <Input
        name={"expected_return"}
        inputValue={inputValue.expectedReturn}
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
