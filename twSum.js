const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] == target){
                return [i,j]
            }            
        }
        
    }
}

console.log(twoSum([1,2,3],4))