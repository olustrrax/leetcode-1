export const findTheOdd = (numbers: number[]) => {
	const data = numbers.reduce((o, n) => {
		o[n] = (o[n] || 0) + 1
		return o
	}, {})

	const oddCountNumber = Object.keys(data).find((key) => data[key] % 2 === 1)

	if (oddCountNumber) {
		return `[${numbers}] should return ${oddCountNumber}, because it occurs ${data[oddCountNumber]} time (which is odd).`
	} else {
		console.log(
			`[${numbers}] cannot return any number, because it occurs 0 time (which is odd).`
		)
	}
}
