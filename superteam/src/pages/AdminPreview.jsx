import Card from "../components/CardComponent";
import NavbarBlock from "../components/NavbarBlockComponent";

export default function AdminPreview() {
  const deletePizza = () => {};

  const editPizza = () => {};

  return (
    <>
      <div>
        <NavbarBlock children={"Menu Preview"} />
        <div className="mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <Card
                imageUrl="../../assets/pizza-1.png"
                title="Pepperoni Pizza"
                price="20.000"
                onDelete={deletePizza}
                onEdit={editPizza}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <Card
                imageUrl="/ClientSide2/superteam/Assets/pizza-1.png"
                title="Pepperoni Pizza"
                price="20.000"
                onDelete={deletePizza}
                onEdit={editPizza}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <Card
                imageUrl="/ClientSide2/superteam/Assets/pizza-1.png"
                title="Pepperoni Pizza"
                price="20.000"
                onDelete={deletePizza}
                onEdit={editPizza}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <Card
                imageUrl="/ClientSide2/superteam/Assets/pizza-2.png"
                title="Pepperoni Pizza"
                price="20.000"
                onDelete={deletePizza}
                onEdit={editPizza}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <Card
                imageUrl="/ClientSide2/superteam/Assets/pizza-1.png"
                title="Pepperoni Pizza"
                price="20.000"
                onDelete={deletePizza}
                onEdit={editPizza}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-4">
              <Card
                imageUrl="/ClientSide2/superteam/Assets/pizza-1.png"
                title="Pepperoni Pizza"
                price="20.000"
                onDelete={deletePizza}
                onEdit={editPizza}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
