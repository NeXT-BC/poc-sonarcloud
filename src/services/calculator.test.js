const calculator = require('./calculator')
test('one plus two is three', () => {
    expect(calculator.plus(1, 2)).toEqual(3)
})

test('two multiply three is six', () => {
    expect(calculator.multiply(2, 3)).toEqual(6)
})

test('ten divide two is five', () => {
    expect(calculator.divide(10, 2)).toEqual(5)
})

test('two minus one is one', () => {
    expect(calculator.minus(2, 1)).toEqual(1)
})
