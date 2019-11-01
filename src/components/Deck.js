import React from 'react';
import PropTypes from 'prop-types';

const Deck = ({ children, title }) => {
  return (
    <section>
      {title && <header>
        <h2>{title}</h2>
      </header>}
      {children}
    </section>
  );
};

Deck.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Deck;
