import React from 'react';
import Deck from './Deck';
import Card from './Card';
import PropTypes from 'prop-types';

const DeckOfCards = ({ items, title }) => {
  const cards = items.map(item => {
    return <div key={item._id}><Card {...item} /></div>;
  });

  return (
    <Deck title={title}>
      {cards}
    </Deck>
  );
};

DeckOfCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default DeckOfCards;
