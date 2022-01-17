const quickSort = require('../src/quickSort');

test('run quickSort with only negative values', () => {  
    expect(quickSort([2,4,9,7,8,3,1])).toEqual([1,2,3,4,7,8,9]);
});

test('run quickSort with only positive values', () => {  
    expect(quickSort([3,6,8,4,3,1])).toEqual([1,3,3,4,6,8]);
});
