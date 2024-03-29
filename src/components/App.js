import React from 'react';
import { characters, gifs } from '../content.json';

export default function App() {
  return (
    <>
      <section>
        <header>
          <h2>Characters</h2>
        </header>
        {characters.map(({ _id, name, image }) => (
          
        ))}
      </section>
      <section>
        {gifs.map(({ _id, image }) => (
          <div key={_id}>
            <header><h3>{_id}</h3></header>
            <figure>
              <img src={image} alt={_id} />
            </figure>
          </div>
        ))}
      </section>
    </>
  );
}
