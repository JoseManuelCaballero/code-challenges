const positiveWithNegative = require('../src/positiveWithNegative');

test('run positiveWithNegative with only negative values', () => {  
    const array = [-1, -2, -3]
    expect(positiveWithNegative(array)).toEqual([]);
});

test('run positiveWithNegative with only positive values', () => {  
    const array = [1, 2, 3]
    expect(positiveWithNegative(array)).toEqual([]);
});

test('run positiveWithNegative with negative and positive values', () => {    
    const array = [-3, -2, -1, -4, 3, 2, 1, 5]
    expect(positiveWithNegative(array)).toEqual([1, 2, 3]);  
});

test('run positiveWithNegative without values', () => {    
    const array = []
    expect(positiveWithNegative(array)).toEqual([]);  
});
