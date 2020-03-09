import React from "react";
import {mount} from "enzyme";
import PlayersContent from "./PlayersContent.js";
import PlayerRow from "./PlayerRow"

describe("PlayersContent", ()=>{
    const MockPlayers=[
        {
           username:"piotrek"
        },
        {
            username:"michal"
        },
        {
            username:"adam"
        }
    ]
    test('renders ',()=>{
        const wrapper = mount(<PlayersContent players={MockPlayers}/>)
       expect(wrapper.find(PlayerRow)).toHaveLength(MockPlayers.length)
       expect(wrapper.find(PlayerRow)).at(0).toEqual({
           idx:0,
           player:MockPlayers[0]
       })
    })
})