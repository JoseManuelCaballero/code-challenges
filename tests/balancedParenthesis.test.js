const balancedParenthesis = require('../src/balancedParenthesis');

test('run balancedParenthesis with correct string', () => {  
    expect(balancedParenthesis("[{()}]")).toEqual(true);
});

test('run balancedParenthesis with correct string 2', () => {  
    expect(balancedParenthesis("{([])}")).toEqual(true);
});

test('run balancedParenthesis with correct string 3', () => {    
    expect(balancedParenthesis("([{}])")).toEqual(true);  
});

test('run balancedParenthesis with correct string 4', () => {    
    expect(balancedParenthesis("[{}]")).toEqual(true);  
});

test('run balancedParenthesis with incorrect string', () => {    
    expect(balancedParenthesis("([{]})")).toEqual(false);  
});

test('run balancedParenthesis with incorrect string 2', () => {    
    expect(balancedParenthesis("{[})")).toEqual(false);  
});
