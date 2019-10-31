import React from 'react';
import { characters, gifs } from '../content.json';
import Card from './Card';
import Deck from './Deck';

export default function App() {
  const characterCards = characters.map(item => {
    return <div key={item._id}><Card {...item} /></div>;
  });
  const gifsCards = gifs.map(item => {
    return <div key={item._id}><Card {...item} /></div>;
  });
  return (
    <>
      <Deck title="Characters">
        {characterCards}
      </Deck>
      <Deck title="Gifs">
        {gifsCards}
      </Deck>
    </>
  );
}
