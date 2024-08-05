import "../App.css";

export default function RoundButton({ children }) {
  return (
    <>
      <button className="btn custom-round-btn">{children}</button>
    </>
  );
}
