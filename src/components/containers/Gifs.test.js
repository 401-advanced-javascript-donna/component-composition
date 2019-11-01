import React from 'react';
import { shallow } from 'enzyme';
import Gifs from './Gifs';

describe('Gifs container', () => {
  global.fetch = jest.fn(() => Promise.resolve({}));
  it('renders Gifs', () => {
    const wrapper = shallow(<Gifs gifsCount={20} />);
    expect(wrapper).toMatchSnapshot();
  });
});
