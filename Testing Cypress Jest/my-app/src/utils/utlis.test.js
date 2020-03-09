import React from 'react';
import {calculator, uppercaseFirstLetter} from './index';

describe('calculator', () => {
    test('should sum 2 numbers', () => {
        const sum = calculator(2, '+', 3);

        expect(sum).toEqual(5);
    });
    test('should correctly return with decimals numbers numbers', () => {
        const sum1 = calculator(0.2,'+', 0.2);

        expect(sum1).toEqual(0.4);
    });
    
    test('should substract 2 numbers', () => {
        const sub = calculator(5, '-', 3);

        expect(sub).toEqual(2);
    });
    test('should multiply 2 numbers', () => {
        const mul = calculator(2, '*', 3);

        expect(mul).toEqual(6);
    });
    
    describe('divide',()=>{
        test("should return nie mozna dzielic przez 0",()=>{
            const num = calculator(1,'/', 0)
            expect(num).toEqual('Nie mozna dzielic przez zero')
        });
        
    
        test('should divide 2 numbers', () => {
            const div = calculator(4, '/', 2);
            expect(div).toEqual(2);
        });
        
    });
});

describe('uppercasefirstletter',()=>{
    test("shuld return error with argument as not string",()=>{
        const result = uppercaseFirstLetter(3)
        expect(result).toEqual('to nie jest string')
    });
    test("shuld return string with uppered case letter",()=>{
        const result = uppercaseFirstLetter("karol")
        expect(result).toEqual('Karol')
    });
    test("shuld return error with argument as not string",()=>{
        const result = uppercaseFirstLetter("   karol")
        expect(result).toEqual('Karol')
    });
});




