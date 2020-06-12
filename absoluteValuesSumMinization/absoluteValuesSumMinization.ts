const absoluteValuesSumMinimization = (a: number[]): number => {
    const halfway = (a: number[]): number => Math.floor(a.length / 2)
	return a.length % 2 ? a[halfway(a)] : a[halfway(a) - 1]
}

console.log(absoluteValuesSumMinimization([ 2, 4, 7 ]))
console.log(absoluteValuesSumMinimization([ 2, 4, 7, 6 ]))
console.log(absoluteValuesSumMinimization([ 2, 4, 7, 6, 6 ]))
console.log(absoluteValuesSumMinimization([ 2, 4, 7, 9, 6, 8 ]))