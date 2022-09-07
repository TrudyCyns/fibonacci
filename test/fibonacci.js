const { assert } = require('chai');
const { describe, it } = require('mocha');
const fibonacci = require('../fibonacci');

describe('Fibonacci Numbers', () => {
  it('Index 0 => 0', () => {
    assert.equal(fibonacci(0), 0);
  });
  it('Index 1 => 1', () => {
    assert.equal(fibonacci(1), 1);
  });
  it('Index 5 => 5', () => {
    assert.equal(fibonacci(5), 5);
  });
  it('Index 10 => 55', () => {
    assert.equal(fibonacci(10), 55);
  });
});
