// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

const solution = (A) => {
    let B = A.sort((a,b) => a-b);
    if (A[A.length-1] < 0){
        return 1;
    }
    for (let i = 1; i < 1000000; i++) {
        // console.log(i)
        if ( !B.includes(i)){
            return i
        }
        
    }
}

// console.log(solution([-1,-3,-2]))
console.log(solution( [1, 3, 6, 4, 1, 2]))