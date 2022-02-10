const balancedParenthesis = require('../src/balancedParenthesis');

describe('balancedParenthesis()', () => {
    it('when string is null, it should returns false', () =>{
        expect(balancedParenthesis(null)).toEqual(false);
    });

    it('when string is empty, it should returns true', () =>{
        expect(balancedParenthesis("")).toEqual(true);
    });

    it('when string no contains parenthesis, braces and brackets, it should returns true', () =>{
        expect(balancedParenthesis("hola mundo")).toEqual(true);
    });
    
    it('when string contains only one open brace, it should returns false', () =>{
        expect(balancedParenthesis("{")).toEqual(false);
    });

    it('when string contains only one open parenthesis, it should returns false', () =>{
        expect(balancedParenthesis("(")).toEqual(false);
    });
    
    it('when string contains only one open brackets, it should returns false', () =>{
        expect(balancedParenthesis("[")).toEqual(false);
    });

    it('when string contains open and closed braces correctly, it should returns true', () =>{
        expect(balancedParenthesis("{}")).toEqual(true);
    });    

    it('when string contains open and closed parenthesis correctly, it should returns true', () =>{
        expect(balancedParenthesis("()")).toEqual(true);
    });    

    it('when string contains open and closed brackets correctly, it should returns true', () =>{
        expect(balancedParenthesis("[]")).toEqual(true);
    });    

    it('when string contains open and closed brackets correctly and open and closed braces correctly, it should returns true', () => {    
        expect(balancedParenthesis("[{}]")).toEqual(true);  
    });    

    it('when string contains open and closed brackets correclty and open and closed parenthesis correctly, it should returns true', () => {    
        expect(balancedParenthesis("[()]")).toEqual(true);  
    });

    it('when string contains open and closed braces correctly and open and closed parenthesis correctly, it should returns true', () => {    
        expect(balancedParenthesis("{()}")).toEqual(true);  
    });
    
    it('when string contains open and closed brackets correctly, open and closed braces correctly and open and closed parenthesis correctly, it should returns true', () => {    
        expect(balancedParenthesis("[{()}]")).toEqual(true);
    });
    
    it('when string contains open and closed braces correctly, open and closed parenthesis correctly and open and closed brackets correctly, it should returns true', () => {  
        expect(balancedParenthesis("{([])}")).toEqual(true);
    });
    
    it('when string contains open and closed parenthesis correctly, open and closed brackets correctly and open and closed braces correctly, it should returns true', () => {  
        expect(balancedParenthesis("([{}])")).toEqual(true);  
    });        
    
    it('when string contains open and closed parenthesis correctly, open and closed brackets incorrectly and open and closed braces incorrectly, it should returns false', () => {
        expect(balancedParenthesis("([{]})")).toEqual(false);  
    });
    
    it('when string contains open and closed braces incorrectly, and only open bracket and only closed parenthesis, it should returns false', () => {    
        expect(balancedParenthesis("{[})")).toEqual(false);  
    });
    
})

