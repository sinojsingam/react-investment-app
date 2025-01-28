import Input from "./Input";

export default function UserInputs() {
  return (
    <div className="input-group" id="user-input">
      <Input name={"init_investment"}>Initial investment</Input>
      <Input name={"annual_investment"}>Annual investment</Input>
      <Input name={"expected_return"}>Expected Return</Input>
      <Input name={"duration"}>Duration</Input>
    </div>
  );
}
