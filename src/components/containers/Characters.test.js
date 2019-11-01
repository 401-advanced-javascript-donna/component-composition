import React from 'react';
import { shallow } from 'enzyme';
import Characters from './Characters';

describe('Characters container', () => {
  global.fetch = jest.fn(() => Promise.resolve({}));
  it('renders Characters', () => {
    const wrapper = shallow(<Characters charCount={20} />);
    expect(wrapper).toMatchSnapshot();
  });
});
