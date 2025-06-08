function countDigits(digit)
{

if(digit ===0) return 1;
let count=0;
digit = Math.abs(digit);
while(digit>0)
{
    digit =Math.floor(digit/10);
    count++;
}
return count;
}

console.log(countDigits(-10));
