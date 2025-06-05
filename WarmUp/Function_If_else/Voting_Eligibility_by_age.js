function eligibleToVote(age) {
    if (age < 1) {
        return "Invalid input";
    }else if(age<18)
    {
        return "Not eligible to vote";
    }
    else if(age>=18)
    {
        return "Eligible to vote";
    }
}

console.log(eligibleToVote(18));
console.log(eligibleToVote(0));
console.log(eligibleToVote(8));
