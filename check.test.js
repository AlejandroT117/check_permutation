const check_permutation = require('./index')

const test_list = [
    {
        description: 'Checking case and case',
        test: ['case', 'case'],
        expected: false
    },
    {
        description: 'Checking case and seca',
        test: ['case', 'seca'],
        expected: false
    }
]


describe("Check if two strings are permutations", ()=>{
    for (const t of test_list) {
        test(t.description, ()=>{
            const result = check_permutation(...t.test)
            const expected = t.expected

            expect(result).toBe(expected)
        })
    }
})