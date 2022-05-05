const myArrayOfNumbers = [2, 9, 7, 55, 6, 4, 10, 1, 0];

// Selection sort
function orderFromLowestToGreatest(paramArray) {
    let initialArray = [...paramArray];
    const finalArray = [];

    for (let cycleIndex = 0; cycleIndex < paramArray.length; cycleIndex++) {
        let smallestValueIndex = undefined;
        for (let comparisonIndex = 0; comparisonIndex < initialArray.length; comparisonIndex++) {
            if (initialArray[comparisonIndex] < initialArray[smallestValueIndex] || comparisonIndex === 0) {
                smallestValueIndex = comparisonIndex;
            }
        }

        finalArray.push(initialArray[smallestValueIndex]);

        initialArray = [
            ...initialArray.slice(0, smallestValueIndex),
            ...initialArray.slice(smallestValueIndex + 1, initialArray.length)
        ];

    }

    return finalArray;
}

console.log(orderFromLowestToGreatest(myArrayOfNumbers));
