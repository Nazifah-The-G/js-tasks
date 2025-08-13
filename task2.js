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
//console.log(longest(str))
// Generate a random integer between 10 and 20 (inclusive)
let randomNum = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

//console.log(randomNum);
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestFinder(input){
    let smallest;
    for(let height of input){
        if(height.length<input[0].length){
            smallest = height ;
        }

    }
    return `${smallest} has the smallest height.` ;
}
//console.log(smallestFinder(heights2))
  const electronics = [
    { name: 'laptop', price: 35000, quantity: 2 },
    { name: 'tablet', price: 15000, quantity: 3 },
    { name: 'mobile', price: 20000, quantity: 1 }
];

function calculateElectronicsBudget(items) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.quantity;
    }
    return total;
}

//console.log(`Total budget required: ${calculateElectronicsBudget(electronics)} tk`);
    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
function findAveragePhonePrice(devices){
    let totalPrice = 0;
    for(let device of devices){
        totalPrice=totalPrice+ device.price;
        avgPrice = totalPrice/devices.length;
    }
    return avgPrice;
}    
//console.log(findAveragePhonePrice(phones))
 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
function totalSalary (input){
    let total = 0;
    for(let employee of input){
        total += employee.starting+employee.experience*employee.increment;
        
    }
    return total;
    
}
console.log(totalSalary(employees))