export default function Input({ children, name, onChange, inputValue }) {
  return (
    <label>
      {children}: <input value={inputValue} name={name} onChange={onChange} />
    </label>
  );
}
