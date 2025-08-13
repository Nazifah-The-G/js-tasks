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
// console.log(howMany(numbers,24))
//Write a function to find the longest word in a given string.
let str = ' I am learning Programming to become a programmer';
function longest(statement){
    let longestWord;
    let arr =statement.split(' ');
    
    for(let word of arr){
        if(word.length>arr[0]){
            longestWord = word;
        }

    }
    return longestWord;
}
console.log(longest(str))