/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var asset = area/2 ;
console.log(asset);

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if(money>=25000){
    console.log('Laptop');
}
else if(money>=10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate');    
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here
for(var i=1;i<=lastDay;i++){
if(i%3===0){
    console.log(i+' - medicine');
}
else{
    console.log(i+' - rest');
}
}

/** Problem 04 - (Delete / Store) */
var fileName= "docx.txt";
//write your code here
var fileNew = fileName.slice(-4);
if(fileNew==='.pdf' || fileNew==='docx' || fileName[0]==='#'){
    console.log('Store');
}
else{
    console.log('Delete');
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "mewo" , roll: 96 ,department: "cse"  }/*{ name: "jhankar" , roll: 1014 ,department: "cse" };*/
//write your code here
var email = student.name + student.roll + '.' + student.department + '@ph.ac.bd';
console.log(email);

/** Problem 06 :  (Current Salary )  */
var experience = 40;
var startingSalary = 30000;
//write your code here
for(var i=1;i<=experience;i++){
    startingSalary = startingSalary+(startingSalary*(5/100));
}
console.log(startingSalary.toFixed(2));