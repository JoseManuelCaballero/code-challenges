const minimalDifference = require('../src/minimalDifference');

test('run minimalDifference with numbers from 1 to 6', () => {  
    const array = [1, 2, 3, 4, 5, 6]
    expect(minimalDifference(array)).toEqual(1);
});
