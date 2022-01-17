const shortestBalancedFragment = require('../src/shortestBalancedFragment');

test('run shortestBalancedFragment with string 1', () => {  
    expect(shortestBalancedFragment("azABaabza")).toEqual(5);
});

test('run shortestBalancedFragment with string 2', () => {  
    expect(shortestBalancedFragment("TacoCat")).toEqual(-1);
});

test('run shortestBalancedFragment with string 3', () => {    
    expect(shortestBalancedFragment("AcZCbaBz")).toEqual(8);  
});

test('run shortestBalancedFragment without string 4', () => {    
    expect(shortestBalancedFragment("abcdefghijklmnopqrstuvwxyz")).toEqual(-1);  
});
