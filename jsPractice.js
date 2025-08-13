/*Math.min(2,4,7,99)
console.log(Math)
const min = Math.min(2,3,4,5);
console.log(min);
const round = Math.round(5.56)
console.log(round);*/
/*for (var i = 0; i < 5; i++) {
 	 setTimeout(function () {
 	console.log(i);
  }, 100);
}*/
/*const heights = [65, 66, 68, 72, 78, 60, 65, 66];
function tallest(variable){
        let ans =  Math.min(...variable);
		return ans;
}
console.log(tallest(heights))*/
const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function getMin(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
	return min;
}

const min = getMin(heights);
console.log('min value is', min);