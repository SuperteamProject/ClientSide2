import "../App.css";

export default function RoundButton({ children, onClick }) {
  return (
    <>
      <button className="custom-round-btn" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
