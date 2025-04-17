// [4, 16, 36, 64]
const numbers = [2, 4, 6, 8];
function square(numbers){
    const newNumbers = numbers.map(n=>n*n);
    return newNumbers;
}
console.log(square(numbers));