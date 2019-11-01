import React from 'react';
import { shallow } from 'enzyme';
import DeckOfCards from './DeckOfCards';
import { characters } from '../content.json';

describe('DeckOfCards component', () => {
  it('renders DeckOfCards', () => {
    const wrapper = shallow(<DeckOfCards items={characters} title="characters" />);
    expect(wrapper).toMatchSnapshot();
  });
});
