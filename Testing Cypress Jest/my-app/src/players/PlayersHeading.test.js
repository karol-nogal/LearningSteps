import React from "react";
import {mount} from "enzyme";
import PlayersHeading from "./PlayersHeading";

describe("PlayersHeading", ()=>{
    test('renders 3 columns',()=>{
        const wrapper = mount(<PlayersHeading/>)
       expect(wrapper.find('th')).toHaveLength(3);   
    })
})