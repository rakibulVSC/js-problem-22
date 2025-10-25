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
console.log(leap)