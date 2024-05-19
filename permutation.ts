export const permutation = (text: string) => {
	if (!text) {
		throw new TypeError('String should not be empty!')
	}
	const result = recursion(text)
	return [...new Set(result)]
}

const recursion = (text: string): string[] => {
	let result = []
	if (text.length === 1) return [text]

	for (let i = 0; i < text.length; i++) {
		const first = text[i]
		const remain = text.substring(0, i) + text.substring(i + 1)
		const remainPermuted = recursion(remain)
		for (let j = 0; j < remainPermuted.length; j++) {
			const permutedTxt = first + remainPermuted[j]
			result.push(permutedTxt)
		}
	}
	return result
}
