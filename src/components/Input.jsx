export default function Input({ children, labelName }) {
  return (
    <label>
      {children}: <input name="myInput" />
    </label>
  );
}
