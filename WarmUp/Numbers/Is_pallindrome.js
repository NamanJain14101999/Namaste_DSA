function isPallindrome(n)
{
    if(n<0) return false;
    let rev=0;
    let num = n;
    while(n>0)
    {
        let rem = n%10;
        rev = (rev*10)+ rem;
        n = Math.floor(n/10);
    }
    return num===rev;
}

console.log(isPallindrome(121));
