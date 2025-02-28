const Calculator = require('./test.js');
const assert = require('assert');

describe('Calculator', function() {
    let calc;

    beforeEach(function() {
        calc = new Calculator();
    });

    it('should add two numbers correctly', function() {
        assert.strictEqual(calc.add(5, 3), 8);
        assert.strictEqual(calc.add(-1, -1), -2);
        assert.strictEqual(calc.add(0, 0), 0);
    });

    it('should subtract two numbers correctly', function() {
        assert.strictEqual(calc.subtract(5, 3), 2);
        assert.strictEqual(calc.subtract(-1, -1), 0);
        assert.strictEqual(calc.subtract(0, 0), 0);
    });

    it('should multiply two numbers correctly', function() {
        assert.strictEqual(calc.multiply(5, 3), 15);
        assert.strictEqual(calc.multiply(-1, -1), 1);
        assert.strictEqual(calc.multiply(0, 5), 0);
    });

    it('should divide two numbers correctly', function() {
        assert.strictEqual(calc.divide(6, 3), 2);
        assert.strictEqual(calc.divide(-6, -3), 2);
        assert.strictEqual(calc.divide(0, 1), 0);
    });

    it('should throw an error when dividing by zero', function() {
        assert.throws(() => calc.divide(1, 0), Error, "Division by zero is not allowed.");
    });
});