const { assert } = require('chai');
const { describe, it } = require('mocha');
const fibonacci = require('../fibonacci');

describe('Fibonacci Numbers', () => {
  it('0', () => {
    assert.equal(fibonacci(0), 0);
  });
  it('1', () => {
    assert.equal(fibonacci(1), 1);
  });
});
