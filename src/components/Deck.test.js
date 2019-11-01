import React from 'react';
import { shallow } from 'enzyme';
import Deck from './Deck';
import Card from './Card';
import { characters } from '../content.json';

describe('Deck component', () => {
  const characterNodes = characters.map(item => {
    return <div key={item._id}><Card {...item} /></div>;
  });
  it('renders Deck', () => {
    const wrapper = shallow(<Deck title="characters">{characterNodes}</Deck>);
    expect(wrapper).toMatchSnapshot();
  });
});
