import React from 'react';
import { mount } from 'enzyme';
import Counter from './Counter';
import CounterBoard from './CounterBoard';


describe('Counter',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = mount(<Counter/>)
    });
    test('when onIncrease is invoked calue is increased by 1',()=>{
        const onIncrease  = wrapper.find(CounterBoard).props().onIncrease;
        
        onIncrease();
        wrapper.update();

        expect(wrapper.state('value')).toBe(1);
    });
    test('when onDecrease is invoked value from 0 is still set to 0',()=>{
        const onDecrease  = wrapper.find(CounterBoard).props().onDecrease;
        
        onDecrease();
        wrapper.update();

        expect(wrapper.state('value')).toBe(0);
    });
    test('when onDecresa is invoked value is decreased by 1',()=>{
        const onDecrease  = wrapper.find(CounterBoard).props().onDecrease;
        wrapper.setState({value: 2})
        expect(wrapper.state('value')).toBe(2);

        onDecrease();
        wrapper.update();

        expect(wrapper.state('value')).toBe(1);
    });
    test('when onReset is invoked value is set to 0',()=>{
        const onReset  = wrapper.find(CounterBoard).props().onReset;
        wrapper.setState({value:5})
        expect(wrapper.state('value')).toBe(5);
        
        onReset();
        wrapper.update();

        expect(wrapper.state('value')).toBe(0);
    });

})