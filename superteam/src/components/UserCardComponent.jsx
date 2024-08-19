import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

UserCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default function UserCard({ imageUrl, title, price }) {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">Rp {price}</p>
        <div className="card__button">
          <button onClick={handleOrderClick} className="card__button-edit">
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
