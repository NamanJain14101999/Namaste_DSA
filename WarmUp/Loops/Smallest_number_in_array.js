function findSmallestNumber(arr)
{
    let min = Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;
}

let arr = [1,2,3,4,323,22,21,21,3];
let result  = findSmallestNumber(arr);
console.log(result);
