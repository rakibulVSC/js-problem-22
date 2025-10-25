function inchToFeet(inch){
    const feet=inch/12;
    return feet;
}
const height= inchToFeet(75);
// console.log(height);



function inchToFeet2(inch){
const feetFractrion=inch/12;
const feetNumber=parseInt(feetFractrion);
const inchRemaining=inch%12;
const result=feetNumber+ ' ft  '   + inchRemaining  + ' inch'
return result;
}
const height2=inchToFeet2(65);
// console.log(height2)