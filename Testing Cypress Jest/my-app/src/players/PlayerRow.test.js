import React from "react";
import {mount} from "enzyme";
import PlayerRow from "./PlayerRow";

describe("PlayersRow", ()=>{
    test('renders correctly player name points and number',()=>{
        const wrapper = mount(<PlayerRow idx={2} player={{username:"Kamcio", points:10}}/>)
       const columns = wrapper.find('tr');
      expect(columns.childAt(0).text()).toBe("3")
      expect(columns.childAt(1).text()).toBe("Kamcio")
      expect(columns.childAt(2).text()).toBe("10")  
    });
    test('renders correctly bg color swhen points >100',()=>{
        const wrapper = mount(<PlayerRow idx={2} player={{username:"Kamcio", points:110}}/>)
       const row = wrapper.find('tr');
        expect(row.props().style).toEqual({backgroundColor: 'red'})
    })
    test('renders correctly bg color swhen points <100',()=>{
        const wrapper = mount(<PlayerRow idx={2} player={{username:"Kamcio", points:11}}/>)
       const row = wrapper.find('tr');
        expect(row.props().style).toEqual({backgroundColor: 'white'})
    })
})