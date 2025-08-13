 
function square(input) {
  let squareNum = input * input; 
  return squareNum;
  }
   let result = square(7); // square(7) ja return korbe setake result variable e strore koro 
//  console.log(result);
function countVowel(word){
  let i=0;
  for (let letter of word){ 
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u')
    {i++;}

  }
console.log(i)
}
// countVowel('asdfg');

// let str='abArdAkhaAole';
// let count = 0;
// for(let letter of str){
//   if(letter === 'a' || letter ==='A'){
//     count++;
//   }
// } 
//console.log(count)

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let oddNumbers =[]
// for(let number of numbers){
// if(number % 2 === 0){
//   oddNumbers.push(number);
// }
// }
//console.log(oddNumbers);
// 
let input= [1, 2, 3];
let new_input = Array.from(input);
new_input.shift();
new_input.unshift(99);
//console.log(new_input)
//console.log(input)
// let obj = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ];
// for(let person in obj){
//   console.log(obj[0].name ,'scored', obj[1].marks)
// }
// let d2 =[
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// d2[1][0] = 99;
// console.log(d2)
// const statement = 'I am a hard working person';
// statement.split(' ');
// for(let word of statement){ ///ei problemta solve korte parini//
//   console.log(statement)
// }
//Write a function called make_avg() which will take an array of integers 
// and the size of that array and return the average of those values.

function make_avg(input){
  let avg = 0;
  for(let number of input){
   avg = avg+ number / input.length
  }
  return avg;
}
//console.log(make_avg([1,2]))
