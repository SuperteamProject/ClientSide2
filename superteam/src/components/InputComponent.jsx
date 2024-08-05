import "../App.css";

export default function Input({ children, type = "text" }) {
  return (
    <>
      <input type={type} className="custom-input" placeholder={children} />
    </>
  );
}
