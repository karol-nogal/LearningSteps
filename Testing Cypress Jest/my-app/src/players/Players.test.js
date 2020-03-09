import React from "react";
import {mount} from "enzyme";
import Players from "./Players";

describe("Players", ()=>{
    test('renders ',()=>{
        const wrapper = mount(<Players/>)
       expect(wrapper.state()).toEqual({
           error:null,
           loading: true,
           players: expect.any(Object)
       });  
    });
    test('renders loading when in state is set to true',()=>{
        const wrapper = mount(<Players/>)
       expect(wrapper.text()).toBe("Loading ...")
    });
    test('renders loading when in state is set to false',()=>{
        const wrapper = mount(<Players/>)
        wrapper.setState({
            loading:false,
            error: new Error,
            players: expect.any(Object)
        })
       expect(wrapper.text()).toBe("We can not fetch players.")
    });
})