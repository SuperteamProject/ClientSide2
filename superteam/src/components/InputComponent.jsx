import "../App.css";

export default function Input({ children, type = "text", value, onChange }) {
  return (
    <>
      <input
        type={type}
        className="custom-input"
        placeholder={children}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
