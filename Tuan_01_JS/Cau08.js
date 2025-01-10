const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bill){
    return (bill>=50 && bill<=300) ? bill*0.15 : bill*0.2;
}

function calcAverage(arr){
    let sum = 0;
    for (let i = 0 ; i< arr.length; i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

for(let i = 0; i<bills.length ; i++){
    tips.push(calcTip(bills[i]));
    totals.push(calcTip(bills[i])+bills[i])
}
console.log(`Array Bill: ${bills}`);
console.log(`Array Tip: ${tips}`);
console.log(`Arrray Total ( Bill+Tip ): ${totals}`);
console.log(`Average totals: ${calcAverage(totals)}`);

