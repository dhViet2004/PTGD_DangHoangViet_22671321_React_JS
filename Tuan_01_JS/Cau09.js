function printForecast(arr){
    let forecast = '';
    for (let i = 0; i < arr.length; i++){
        forecast+= `...${arr[i]}°C in ${i+1} days`;
    }
    return forecast;
}

data1 = [17, 21, 23];
data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));



