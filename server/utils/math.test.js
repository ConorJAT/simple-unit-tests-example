const mathUtils = require('./math.js');

const testVars = {
    max: 20,
    min: 0,
};

describe('add()', () => {
    test('Finds the sum of two numbers.', () => {
        expect(mathUtils.add(5, 10)).toBe(15);
    });

    test('Should clamp number to maximum.', () => {
        expect(mathUtils.add(testVars.max, 1)).toBe(testVars.max);
    });

    test('Should clamp number to minimum.', () => {
        expect(mathUtils.add(testVars.min, -1)).toBe(testVars.min);
    })
});

describe('subtract()', () => {
    test('Finds the difference of two numbers.', () => {
        expect(mathUtils.sub(15, 10)).toBe(5);
    });

    test('Should clamp number to maximum.', () => {
        expect(mathUtils.sub(testVars.max, -1)).toBe(testVars.max);
    });

    test('Should clamp number to minimum.', () => {
        expect(mathUtils.sub(testVars.min, 1)).toBe(testVars.min);
    })
});

describe('multiply()', () => {
    test('Finds the product of two numbers.', () => {
        expect(mathUtils.mult(3, 4)).toBe(12);
    });

    test('Should clamp number to maximum.', () => {
        expect(mathUtils.mult(testVars.max, 2)).toBe(testVars.max);
    });

    test('Should clamp number to minimum.', () => {
        expect(mathUtils.mult(testVars.min, -1)).toBe(testVars.min);
    })
});
