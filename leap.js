function isLeapYear(year){
    if(year%4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLipi=isLeapYear(2043);
// console.log(isLipi)

function isLeapYear2(year){
    if(year %100 !==0 && year%4===0){
        return true;
    }
    else if(year %100 ==0 && year%4 ===0){
        return true;
    }
    else{
        return false;
    }
}
const leap=isLeapYear2(2400);
// console.log(leap)





function oddAverage(numbers){
     let odd=[];
for(const number of numbers){

if(number%2 ===1){
odd.push(number)
}

}
let sum=0;
for (const number of odd){
sum= sum + number;
}
const count=odd.length;
console.log(sum);
const avg=sum/count;
return avg;
}

const numbers=[42,46,85,39,26,71,56];
const average=oddAverage(numbers);
console.log(average)
