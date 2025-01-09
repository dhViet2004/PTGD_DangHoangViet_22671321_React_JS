const bill = 275;

const bill1 = 40;
const bill2 = 430;

function tienTip(bill){
    return (bill>=50 && bill <= 300) ? bill*0.15 : bill * 0.2;
}
console.log("---------------------------------------------------------------------------------------");
const tip = tienTip(bill);
const total = bill + tip;

console.log(`Hóa đơn là ${bill}, tiền tip là ${tip.toFixed(2)}, tổng tiền là ${total}`);
console.log("---------------------------------------------------------------------------------------");
const tip1 = tienTip(bill1);
const total1 = bill1 + tip1;

console.log(`Hóa đơn là ${bill1}, tiền tip là ${tip1.toFixed(2)}, tổng tiền là ${total1}`);
console.log("---------------------------------------------------------------------------------------");
const tip2 = tienTip(bill2);
const total2 = bill2 + tip2;

console.log(`Hóa đơn là ${bill2}, tiền tip là ${tip2.toFixed(2)}, tổng tiền là ${total2}`);
