const divideString = require("../src/divideString");

describe("divideString", () => {
  it("when do not provide a string it returns the number 0.", () => {
    expect(divideString(null)).toEqual(0);
  });

  it("when the string is empty it returns 0 combinations.", () => {
    expect(divideString("")).toEqual(0);
  });

  it('when the string contains "aaa", it returns 1 combinations.', () => {
    expect(divideString("aaa")).toEqual(1);
  });

  it('when the string contains "bbb", it returns 1 combinations.', () => {
    expect(divideString("bbb")).toEqual(1);
  });

  it('when the string contains "bbbbb", it returns 6 combinations', () => {
    expect(divideString("bbbbb")).toEqual(6);
  });

  it('when the string contains "abb", it returns 0 combinations.', () => {
    expect(divideString("abb")).toEqual(0);
  });

  it('when the string contains "aba", it returns 0 combinations.', () => {
    expect(divideString("aba")).toEqual(0);
  });

  it('when the string contains "aabb", it returns 0 combinations.', () => {
    expect(divideString("aabb")).toEqual(0);
  });

  it('when the string contains "babaa", it returns 2 combinations.', () => {
    expect(divideString("babaa")).toEqual(2);
  });

  it('when the string contains "ababa", it returns 4 combinations.', () => {
    expect(divideString("ababa")).toEqual(4);
  });
});
