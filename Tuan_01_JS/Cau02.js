var massMark = 78;
var heightMark = 1.69;
var BMIMark = massMark/(heightMark*heightMark);
console.log("BMI cua Mark: "+BMIMark.toFixed(2));
var massJohn = 92;
var heightJohn = 1.95;
var BMIJohn = massJohn/(heightJohn*heightJohn);
console.log("BMI cua John: "+BMIJohn.toFixed(2));
function markHigherBMI(BMIMark, BMIJohn){
    if(BMIMark>BMIJohn)
        return true;
    else
        return false;
}

if(markHigherBMI(BMIMark,BMIJohn)){
    console.log("BMI cua Mark ("+BMIMark.toFixed(2)+") cao hon John ("+ BMIJohn.toFixed(2)+")");
}else{
    console.log("BMI cua Mark ("+BMIMark.toFixed(2)+") khong cao hon John ("+ BMIJohn.toFixed(2)+")")
}

var massMark1 = 95;
var heightMark1 = 1.88;
var BMIMark1 = massMark1/(heightMark1*heightMark1);
console.log("BMI cua Mark: "+BMIMark1.toFixed(2));
var massJohn1 = 85;
var heightJohn1 = 1.76;
var BMIJohn1 = massJohn1/(heightJohn1*heightJohn1);
console.log("BMI cua John: "+BMIJohn1.toFixed(2));

if(markHigherBMI(BMIMark1,BMIJohn1)){
    console.log("BMI cua Mark ("+BMIMark1.toFixed(2)+") cao hon John ("+ BMIJohn1.toFixed(2)+")");
}else{
    console.log("BMI cua Mark ("+BMIMark1.toFixed(2)+") khong cao hon John ("+ BMIJohn1.toFixed(2)+")")
}