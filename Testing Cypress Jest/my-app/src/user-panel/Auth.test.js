import React from 'react';
import { mount } from 'enzyme';
import Panel from './Panel.js';
import {Auth} from "./Auth.js";
import {fetchData} from "./utils.js";


jest.mock('./utils',()=>({
    fetchData:()=> Promise.resolve({username: "Jacek", points:10})
}));
test('renders prosze sie zalogowac when data is fetched', () => {
    const wrapper = mount(<Auth/>);
    expect(wrapper.state("isLoggedIn")).toBeFalsy();
    expect(wrapper.text()).toBe("Proszę się zalogować!")

});
test('renders children when data is fetched', () => {
    const wrapper = mount(<Auth/>);
    Promise.resolve();
    wrapper.update();
    expect(wrapper.state("isLoggedIn")).toBeTruthy();
    

});
