function mapArrayDeclarative(arr, func) {
    return arr.map(func);
}

function mapArrayImperative(arr, func) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(func(arr[i]));
    }
    return newArray;
}

function doubleNumber(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbersImperative = mapArrayImperative(numbers, doubleNumber);

const doubledNumbersDeclarative = mapArrayDeclarative(numbers, doubleNumber);

console.log(doubledNumbersImperative);

console.log(doubledNumbersDeclarative)
