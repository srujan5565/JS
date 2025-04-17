//.reduce() is a method used to reduce an array into a single value (like sum, product, etc.)
const marks = [85, 90, 78, 92];
let sum = marks.reduce((sum,mark)=>{return sum+mark},0);
console.log(sum);