import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, imageUrl, title, price, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    
    navigate('/cart', {
      state: { image: imageUrl, title: title, price: price, id: id }
    });
  };

  return (
    <div className="card-container">
      <img src={imageUrl} alt={title} className="card__image" />
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__price">Rp.{price}</p>
        <div className="card__button">
          <button onClick={handleEdit} className="card__button-edit">
            Order
          </button>
          {/* <button onClick={() => onDelete(id)} className="card__button-trash">
            <i className="bi bi-trash"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
