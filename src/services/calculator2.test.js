const calculator2 = require('./calculator2')
test('one plus two is three', () => {
    expect(calculator2.plus(1, 2)).toEqual(3)
})

test('two multiply three is six', () => {
    expect(calculator2.multiply(2, 3)).toEqual(6)
})

test('ten divide two is five', () => {
    expect(calculator2.divide(10, 2)).toEqual(5)
})

test('two minus one is one', () => {
    expect(calculator2.minus(2, 1)).toEqual(1)
})
