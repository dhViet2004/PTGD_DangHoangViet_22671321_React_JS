const calcAverage = (score1, score2, score3)=>(score1+score2+score3)/3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);


const checkWinner= (avgDolphins, avgKoalas)=>{
    if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    }else if(avgKoalas>= avgDolphins*2){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    }else{
        console.log("No team wins!");
    }
}
console.log("-------------------------------------------------------------------");
console.log(`Diem trung binh cua Dolphins la: ${avgDolphins1}`);
console.log(`Diem trung binh cua Koalas la: ${avgKoalas1}`);

checkWinner(avgDolphins1, avgKoalas1);
console.log("-------------------------------------------------------------------");
console.log(`Diem trung binh cua Dolphins la: ${avgDolphins2}`);
console.log(`Diem trung binh cua Koalas la: ${avgKoalas2}`);
checkWinner(avgDolphins2, avgKoalas2);


