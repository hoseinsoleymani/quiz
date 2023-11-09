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

const numbers = [1, 2, 3, 4, 5, 6]

console.log(mapArrayDeclarative(numbers)) // Declarative

console.log(mapArrayImperative(numbers)) // Imperative
