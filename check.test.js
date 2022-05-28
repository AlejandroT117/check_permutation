const check_permutation = require('./index')

const test_list = [
    {
        description: 'Checking case and case should return true',
        test: ['case', 'case'],
        expected: true
    },
    {
        description: 'Checking case and seca  should return true',
        test: ['case', 'seca'],
        expected: true
    },
    {
        description: 'Checking Alejandro and jaAndrole should return true',
        test: ['Alejandro', 'jaAndrole'],
        expected: true
    },
    {
        description: 'Checking taza and caza should return false',
        test: ['taza', 'caza'],
        expected: false
    },
    {
        description: 'Checking pez and pesa should return false',
        test: ['pez', 'pesa'],
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