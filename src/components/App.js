import React from 'react';
import { characters, gifs } from '../content.json';
import DeckOfCards from './DeckOfCards';

export default function App() {
  return (
    <>
      <DeckOfCards items={characters} title="Characters"/>
      <DeckOfCards items={gifs} title="Gifs"/>
    </>
  );
}
