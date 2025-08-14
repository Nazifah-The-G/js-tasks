/*function signature/sample */
function cashOut( money ) {
// You have to write your code here
if(typeof(money)==='string' || money<0){
    return 'Invalid'
}
let cashOutAmount = money*1.75/100;
 return cashOutAmount;
}
//console.log(cashOut(-1))
/*function signature/sample */
function validContact( contact ) {
// You have to write your code here
if (contact.length ===11 && contact.startsWith('01') && typeof contact==='string'){
 return true;   
}
return false;
}
//console.log(validContact("02145678900"))
/*function signature/sample */
function calculateSleepTime( times ) {
// You have to write your code here
let totalInSec=0;
for (let time of times){
    if(typeof time !== 'number' ){
        return 'invalid';
    }
    totalInSec += time;
}
let totalInHour = parseInt(totalInSec/3600);
let totalRestMinute = totalInSec%3600;
totalInMinute =parseInt(totalRestMinute/60);
let totalInSecond = Math.abs(totalRestMinute-(totalInMinute*60))
return `hour:${totalInHour},minute:${totalInMinute},second:${totalInSecond}`;
}
console.log(calculateSleepTime([1000, 2000, 725] ))