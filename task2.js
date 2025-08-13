 let numbers = [5,6,11,12,98,5];
 function howMany (arr,whichOne){
    count = 0;
 for(let number of arr){
if(number === whichOne){
    count++ ;
}
 }
 return count;
 }
 console.log(howMany(numbers,24))