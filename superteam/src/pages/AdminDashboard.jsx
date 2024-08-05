import NavbarBlock from "../components/NavbarBlockComponent";
import Input from "../components/InputComponent";
import RoundButton from "../components/RoundButtonComponent";

export default function AdminDashboard() {
  return (
    <>
      <NavbarBlock />
      <div>
        <RoundButton children={"Select Image"} />
        <Input children={"Name"} />
        <Input children={"Price"} type="number" />
        <RoundButton children={"Add Product"} />
      </div>
    </>
  );
}
