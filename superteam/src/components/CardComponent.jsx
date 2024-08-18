import PropTypes from "prop-types";

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function Card({ imageUrl, title, price, onEdit, onDelete }) {
  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">Rp.{price}</p>
        <div className="card__button">
          <button onClick={onEdit} className="card__button-edit">
            Edit Order
          </button>
          <button onClick={onDelete} className="card__button-trash">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
