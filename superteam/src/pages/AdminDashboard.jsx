import NavbarBlock from "../components/NavbarBlockComponent";
import Input from "../components/InputComponent";
import RoundButton from "../components/RoundButtonComponent";
import "../App.css";

export default function AdminDashboard() {
  return (
    <>
      <div>
        <NavbarBlock children={"See all Menu "} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "80vh", gap: "40px" }}
        >
          <RoundButton children={"Select Image"} />
          <Input children={"Name"} />
          <Input children={"Price"} type="number" />
          <RoundButton children={"Add Product"} />
        </div>
      </div>
    </>
  );
}
