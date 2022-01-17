const divideString = require('../src/divideString');

test('run divideString test 1', () => {  
    expect(divideString("babaa")).toEqual(2);
});

test('run divideString  test 2', () => {  
    expect(divideString("ababa")).toEqual(4);
});

test('run divideString  test 3', () => {    
    expect(divideString("aba")).toEqual(0);  
});

test('run divideString  test 4', () => {    
    expect(divideString("bbbbb")).toEqual(6);  
});
