const test = QUnit.test;

function isEven(number) {
  if(number % 2 === 0) return true;
  return false;
}

test ('given an even number, return true', function(assert) {
    const inputNumber = 16;
    const result = isEven(inputNumber);
    const expected = true;
    assert.equal(result, expected);
});

test ('given an odd number, return false', function(assert) {
    const inputNumber = 13;
    const result = isEven(inputNumber);
    const expected = false;
    assert.equal(result, expected);
});
