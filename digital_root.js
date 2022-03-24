function digital_root(n) {
//   //   console.log(n.toString().split(""));
//   console.log(n);
//   let arr = n.toString().split("");
//   let sum = arr.reduce(
//     (previousValue, currentValue) =>
//       Number.parseInt(previousValue) + Number.parseInt(currentValue),
//     0
//   );
//   if (sum > 9) {
//     digital_root(sum);
//   } else {
//     return sum;
//   }
let result = 0;
String(n).split('').map(num => {
  result += Number(num);
});
return result > 10 ? digital_root(result) : result;

}

console.log(digital_root(456));

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
