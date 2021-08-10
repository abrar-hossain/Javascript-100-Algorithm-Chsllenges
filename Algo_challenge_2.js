// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params.


// problem 1
function sum(params1, params2) {
    return params1 + params2;
}
console.log(sum(1, 2));

// problem 2
function totalSum(...params1) {
    let total = 0;
    params1.forEach((perElem) => {
        total += perElem;
    });

    return total;
}

console.log(totalSum(1, 2.77, 1, 154.76, 15));