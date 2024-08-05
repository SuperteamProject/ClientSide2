import "../App.css";
import PropTypes from "prop-types";

export default function Card({ imageUrl, title, price, onEdit, onDelete }) {
  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-price">Rp.{price}</p>
        <div className="card-actions">
          <button className="btn btn-dark" onClick={onEdit}>
            Edit Order
          </button>
          <button className="btn btn-link" onClick={onDelete}>
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
