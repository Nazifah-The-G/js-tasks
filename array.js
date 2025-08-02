let myObject ={
name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};
for(const prop in myObject){
    const key = prop;
    const type = typeof myObject.prop;
    console.log('key:',key,'|','type:',type);
}
/* let word = "banana";
let count = 0;

for (let letter of word) {
  if (letter === "a") {
    count++;
  }
} */
// console.log(count); // should print 3
const string = 'AbraCAdabrA';
let i=0;
for(letter of string){
    if(letter==='a'|| letter==='A'){
      i++;
    }
}
console.log(i)
const word ="hello";
if(word.includes('a')&&
word.includes('e')&&
word.includes('i')&&
word.includes('o')&&
word.includes('u')){
  console.log("yay!it has all vowels.");
}
else{console.log("sorry!it doesn't have all vowels.")}