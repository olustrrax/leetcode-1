import { permutation } from './permutation'

test(`With input 'a': Your function should return: ['a']`, () => {
	expect(permutation('a')).toEqual(['a'])
})

test(`With input 'ab': Your function should return: ['ab', 'ba']`, () => {
	expect(permutation('ab')).toEqual(['ab', 'ba'])
})

test(`With input 'abc': Your function should return: ['abc','acb','bac','bca','cab','cba']`, () => {
	expect(permutation('abc')).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
})

test(`With input 'aabb': Your function should return: ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']`, () => {
	expect(permutation('aabb')).toEqual([
		'aabb',
		'abab',
		'abba',
		'baab',
		'baba',
		'bbaa',
	])
})

test(`With input '': Your function should return error: String should not be empty!`, () => {
	expect(() => permutation('')).toThrow('String should not be empty!')
})
