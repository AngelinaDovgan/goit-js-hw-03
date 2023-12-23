function filterArray(numbers, value) {
    let right = [];
    for (let number of numbers) {
        if (number > value) {
            right = right.concat(number);
        }
    }
        return right;
    }
 
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));