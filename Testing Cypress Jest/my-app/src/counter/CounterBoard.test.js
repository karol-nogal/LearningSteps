import React from 'react';
import { mount } from 'enzyme';
import CounterBoard from './CounterBoard';



const onIncreaseMock = jest.fn();
const onDecreaseMock = jest.fn();
const onResetMock = jest.fn();




describe('CounterBoard',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = mount(<CounterBoard
            value={5}
            onIncrease={onIncreaseMock}
            onDecrease={onDecreaseMock}
            onReset={onResetMock}
            
            />)
    })
    test('renders correctly counter value',()=>{
        

        const score = wrapper.find('h1');
        expect(score.text()).toBe('5')
    });
    test('invoke onIncrease when increase button is clicked',()=>{
        
            const buttonIncrease = wrapper.find("#increase");
            buttonIncrease.simulate("click");
            expect(onIncreaseMock).toHaveBeenCalled();
    });
    test('invoke onDecrease when increase button is clicked',()=>{
       
            const buttonDecrease = wrapper.find("#decrease");
            buttonDecrease.simulate("click");
            expect(onDecreaseMock).toHaveBeenCalled();
    });
    test('invoke onReset when increase button is clicked',()=>{
        
            const buttonReset = wrapper.find("#reset");
            buttonReset.simulate("click");
            expect(onResetMock).toHaveBeenCalled();
    });
    test('score has text align center style',()=>{
        
        const score = wrapper.find('h1');
        expect(score.props().style).toEqual({textAlign: 'center'})
    });
})