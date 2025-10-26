/*
*array has some duplicate elements
*/


const biraniKhor=['abul','labib','rony','abul','labib']

const number=[1,5,68,25,5,74,68,25];


function noDuplicate(array){
    const unique=[];
for(const item of array){
    if(unique.includes(item) === false){
        unique.push(item);
    }
}
return unique;
}

const uniqueArray=noDuplicate(biraniKhor);
console.log(uniqueArray);