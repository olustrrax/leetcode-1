import { countSmileys } from './smilings'

test('should return 2;', () => {
	expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2)
})

test('should return 3;', () => {
	expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3)
})

test('should return 1;', () => {
	expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
})

test('should return 0;', () => {
	expect(countSmileys([';]', ';*', ':$', ';-DD'])).toBe(0)
})

test('should return 0;', () => {
	expect(countSmileys([';]', ';*', ':$', ';-DD', ';--)'])).toBe(0)
})

test('should return 0;', () => {
	expect(countSmileys([';-]', ':--[', ';*', ':$', ';-<'])).toBe(0)
})
