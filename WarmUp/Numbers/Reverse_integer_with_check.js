function reverseNumber(num)
{
    let n = num;
    num = Math.abs(num);
    let rev=0;
    while(num>0)
    {
        let rem = num%10;
        rev = (rev*10)+rem;
        num = Math.floor(num/10);
    }

    let limit = Math.pow(2,31);
    if(rev >limit-1)
    {
        return 0;
    }
    else
    {
        return n<0 ? -rev :rev;
    }
}

console.log(reverseNumber(-123));
