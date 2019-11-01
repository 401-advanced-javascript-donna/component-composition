import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ _id, name, image, title }) => {
  return (
    <>
      {title && <header><h3>{name}</h3></header>}
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name} has {_id}</p>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Card;
