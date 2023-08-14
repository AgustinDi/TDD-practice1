import { describe, expect, it } from 'vitest';
import { FizzBuzz } from '../src/FizzBuzz';

describe('fizzbuzz Testing', () => {
     it('fizzBuzz is a function', () => {
          expect(typeof FizzBuzz).toBe('function')
     })
     // it('if not parameter sended thorw an error', () => {
     //      expect(FizzBuzz()).toThrow()
     // })
     // it('fizzbuzz must throw an error if parameter is not a number', () => {
     //      expect(FizzBuzz('xd')).toThrow('parameter provided is not a number')
     // })
})