import React from 'react';
import { mount } from 'enzyme';
import Panel from './Panel.js';
import {Auth} from "./Auth.js"

jest.mock('./Auth.js', () => ({
    Auth: jest.fn()
}));

const AuthMock = Auth;

test('renders correctly with normal data', () => {
    AuthMock.mockImplementation(({ children }) => children(
        {userData: {
            username: "Karol",
            points: 20
            }
        }));
    const wrapper = mount(<Panel />);
    const name = wrapper.find('h3');
    const score = wrapper.find('h4');
    expect(name.text()).toBe('Witaj Karol');
    expect(score.text()).toBe('Twoje punkty to: 20');
});

test('renders nieznajomy if username is null ',()=>{
    AuthMock.mockImplementation(({ children }) => children(
        {userData: {
            username: undefined,
            points: 200
            }
        }));
    const wrapper = mount(<Panel />);
    const name = wrapper.find('h3');
    const score = wrapper.find('h4');
    expect(name.text()).toBe('Witaj nieznajomy');
    expect(score.text()).toBe('Twoje punkty to: 200');    
});
