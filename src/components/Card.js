import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ _id, name, image }) => {
  return (
    <div key={_id}>
      <header><h3>{name}</h3></header>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name} has {_id}</p>
    </div>
  );
};

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Card;
