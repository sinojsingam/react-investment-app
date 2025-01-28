import Input from "./Input";

export default function UserInputs() {
  return (
    <div className="input-group">
      <Input>Initial investment</Input>
      <Input>Annual investment</Input>
      <Input>Expected Return</Input>
      <Input>Duration</Input>
    </div>
  );
}
