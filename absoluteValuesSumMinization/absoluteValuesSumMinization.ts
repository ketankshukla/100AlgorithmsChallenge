const absoluteValuesSumMinimization = (a: number[]): number => {

    const half = halfway(a)
    return (a.length % 2) ? a[half] :  a[half-1]

}

const halfway = (a: number[]): number => Math.floor(a.length/2)

halfway

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));