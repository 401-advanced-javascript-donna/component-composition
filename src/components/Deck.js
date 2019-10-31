import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ children }) => {
  return (
    <section>
      <header>
        <h2>Characters</h2>
      </header>
      {children}
    </section>
  );
};

Deck.propTypes = {
  children: PropTypes.node.isRequired
};

export default Deck;
