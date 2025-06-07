function findSecondLargestNumber(arr){
    let max = -Infinity;
    let secMax = - Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            secMax=max;
            max = arr[i];
        }
        else if(arr[i]>secMax && arr[i]!=max)
        {
            secMax = arr[i];
        }
    }
    return secMax;
}

let arr = [1,2,3,43,4,4,];
let result = findSecondLargestNumber(arr);
console.log(result);

