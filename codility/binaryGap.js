// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
// Write a function:
// function solution(N);
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..2,147,483,647].
// Copyright 2009–2022 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

const solution = (N) => {
  let binary = N.toString(2);
  console.log(binary)
  let counter = 0;
  let max = 0;
  let numsArr = binary.split("");
  console.log(numsArr);
  for (let i = 0; i < numsArr.length; i++) {
    if (Number.parseInt(numsArr[i])===0) {
        if (Number.parseInt(numsArr[i])===1){
            console.log('1')
        }
      counter++;
    }
  }
  console.log(counter);
  console.log(max);
  console.log('asd')
};
// let a = 8;
// console.log(a.toString(2).split(""));
solution(1041);
