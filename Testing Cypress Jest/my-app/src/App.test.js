import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';

test('renders counter plus btn element', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('+');
  expect(linkElement).toBeInTheDocument();
});

test('renders counter plus btn with enzyme', () => {
    const wrapper = mount(<App />);
    const linkElement = wrapper.find('#increase');
    expect(linkElement).toHaveLength(1);
});
