const diemDolphins = [96, 108, 89];
const diemKoalas = [88, 91, 110];


// Bonus Test Data 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1  = [109, 95, 123];

// Bonus Test Data 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2  = [109, 95, 106];

function diemTrungBinh(diem){
    const total = diem.reduce((acc, x)=> acc + x , 0);
    return total/diem.length;
}



function xacDinhDoiThang(dolphins, koalas){
    const minScore = 100;
    if(dolphins>= minScore && koalas>= minScore){
        if(dolphins>koalas){
            return "Dolphins thắng";
        }else if (koalas>dolphins){
            return "Koalas thắng";
        }else{
            return "Hòa";
        }
    }else if (dolphins>= minScore && koalas < minScore){
        return "Dolphins thắng";
    }else if (koalas >= minScore && dolphins < minScore){
        return "Koalas thắng";
    }else{
        return "Không đội nào thắng, điểm dều dưới mức tối thiểu";
    }
}
console.log("---------------------------------------------------------------------------------------")
const AvgDolphins = diemTrungBinh(diemDolphins).toFixed(2);
const AvgKoalas = diemTrungBinh(diemKoalas).toFixed(2);

console.log("Điểm trung bình Dolphins: "+AvgDolphins);
console.log("Điểm trung bình Koalas: "+ AvgKoalas);

console.log(xacDinhDoiThang(AvgDolphins,AvgKoalas));

console.log("---------------------------------------------------------------------------------------")

const AvgDolphinsBonus1 = diemTrungBinh(dolphinsScoresBonus1).toFixed(2);
const AvgKoalasBonus1 = diemTrungBinh(koalasScoresBonus1).toFixed(2);

console.log("Điểm trung bình Dolphins: "+AvgDolphinsBonus1);
console.log("Điểm trung bình Koalas: "+ AvgKoalasBonus1);

console.log(xacDinhDoiThang(AvgDolphinsBonus1,AvgKoalasBonus1));

console.log("---------------------------------------------------------------------------------------")

const AvgDolphinsBonus2 = diemTrungBinh(dolphinsScoresBonus2).toFixed(2);
const AvgKoalasBonus2 = diemTrungBinh(koalasScoresBonus2).toFixed(2);

console.log("Điểm trung bình Dolphins: "+AvgDolphinsBonus2);
console.log("Điểm trung bình Koalas: "+ AvgKoalasBonus2);

console.log(xacDinhDoiThang(AvgDolphinsBonus2,AvgKoalasBonus2));