function findLargestNumber(arr){
    let max = -Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max =  arr[i];
        }
    }
    return max;
}

let arr = [1,2,34,5,6]
let result = findLargestNumber(arr);
console.log(result);
