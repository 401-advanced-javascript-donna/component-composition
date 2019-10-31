import React from 'react';
// import { characters, gifs } from '../content.json';
import Characters from './containers/Characters';
// import DeckOfCards from './DeckOfCards';

export default function App() {
  return (
    <>
      <Characters charCount={20} />
    </>
  );
}
