import { findTheOdd } from './findOdd'

test('[7] should return 7, because it occurs 1 time (which is odd).', () => {
	expect(findTheOdd([7])).toBe(
		'[7] should return 7, because it occurs 1 time (which is odd).'
	)
})

test('[0] should return 0, because it occurs 1 time (which is odd).', () => {
	expect(findTheOdd([0])).toBe(
		'[0] should return 0, because it occurs 1 time (which is odd).'
	)
})

test('[1, 1, 2] should return 2, because it occurs 1 time (which is odd).', () => {
	expect(findTheOdd([1, 1, 2])).toBe(
		'[1,1,2] should return 2, because it occurs 1 time (which is odd).'
	)
})

test('[0, 1, 0, 1, 0] should return 2, because it occurs 1 time (which is odd).', () => {
	expect(findTheOdd([0, 1, 0, 1, 0])).toBe(
		'[0,1,0,1,0] should return 0, because it occurs 3 time (which is odd).'
	)
})

test('[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1] should return 4, because it occurs 1 time (which is odd).', () => {
	expect(findTheOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(
		'[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it occurs 1 time (which is odd).'
	)
})

test('[1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 5] should return 4, because it occurs 1 time (which is odd).', () => {
	expect(findTheOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1, 5])).toBe(
		'[1,2,2,3,3,3,4,3,3,3,2,2,1,5] should return 4, because it occurs 1 time (which is odd).'
	)
})
