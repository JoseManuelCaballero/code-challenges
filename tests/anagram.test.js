const anagram = require('../src/anagram');

describe('anagram()', () => {
    it('when words is empty then it not returns any anagram.', () => {
        // input
        const word = "any"
        const words = []

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toHaveLength(0);

    })

    it('when words contains an string empty then it not returns any anagram.', () => {
        // input
        const word = "any"
        const words = [""]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toHaveLength(0);

    })

    it('when words contains the same word then it returns this word as anagram', () => {
        // input
        const word = "ave"
        const words = ["ave"]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toEqual(["ave"])

    })

    it('when words contains an anagram then it returns this word as anagram', () => {
        // input
        const word = "ave"
        const words = ["eva"]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toEqual(["eva"])

    })

    it('when words no contains an anagram then it should return there is not any anagram', () => {
        // input
        const word = "ave"
        const words = ["fea"]

        // output
        const anagrams = anagram(word, words)

        // expected
        expect(anagrams).toHaveLength(0);

    })    

    const scenarios = [
        { word: "ave", words: ["vea"], expected: ["vea"] },
        { word: "Ave", words: ["Eva", "Va", "Vea"], expected: ["Eva", "Vea"] },
        { word: "Alegan", words: ["Angela", "Galena"], expected: ["Angela", "Galena"] },        
        { word: "Riesgo", words: ["Sergio", "Regio"], expected: ["Sergio"] },
        { word: "Agranda", words: ["granada", "nada"], expected: ["granada"] },
        { word: "Desamparador", words: ["rama", "desparramado"], expected: ["desparramado"] },
        { word: "Lic??a", words: ["Luc??a", "Luc??"], expected: ["Luc??a"] },
        { word: "Conservadora", words: ["conversadora"], expected: ["conversadora"] },
    ]

    scenarios.forEach(({ word, words, expected }) => {
        it(`given the word "${word}" and the words "[${words}]" the anagrams are "${expected}"`, () => {
            const anagrams = anagram(word, words)

            expect(anagrams).toEqual(expected)

        })
    })

})

