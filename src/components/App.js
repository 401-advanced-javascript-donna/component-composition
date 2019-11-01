import React from 'react';
import Characters from './containers/Characters';
import Gifs from './containers/Gifs';

export default function App() {
  return (
    <>
      <Characters charCount={20} />
      <Gifs gifsCount={10} />
    </>
  );
}
