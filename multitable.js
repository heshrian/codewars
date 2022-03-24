multiplicationTable = function (size) {
  if (size === 1) {
    return [[1]];
  }
  let table = [];
  for (let i = 1; i <= size; i++) {
    let numbers = Array(size)
      .fill(1)
      .map((el, index) => (el + index) * i);
    table.push(numbers);
  }
  return table;
};
console.log(multiplicationTable(4))