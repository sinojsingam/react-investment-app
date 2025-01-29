export default function Input({ children, name, onValueChange, inputValue }) {
  return (
    <label>
      {children}:{" "}
      <input value={inputValue} name={name} onChange={onValueChange} />
    </label>
  );
}
