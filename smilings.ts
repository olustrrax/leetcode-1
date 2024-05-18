const regEx = /^[:;][-~]?[)D]$/
export const countSmileys = (smiling: string[]) => {
	const countSmiling = smiling.reduce((o, i) => {
		return regEx.test(i) ? ++o : o
	}, 0)
	return countSmiling
}
