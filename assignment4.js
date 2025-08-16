function totalFine( fare ) {
          // You have to write your code here
          if(typeof fare!=='number' || fare<=0){
            return 'Invalid';
          }
            let fine = fare + fare*20/100 + 30 ;
          return fine;
}


function  onlyCharacter( str ) {
          // You have to write your code here
          if(typeof str !== 'string'){
            return 'Invalid';
          }
          let noSpaces=str.split(' ').join('');
          let inUpperCase=noSpaces.toUpperCase();
          return inUpperCase;
}


function  bestTeam( player1, player2 ) {
          // You have to write your code here
          if(typeof player1 !== 'object' || typeof player2 !== 'object'){
            return 'Invalid';
          }
          else if(player1.foul +player1.cardY+player1.cardR > player2.foul +player2.cardY+player2.cardR){
            return player2.name;
          }
          else if(player1.foul +player1.cardY+player1.cardR < player2.foul +player2.cardY+player2.cardR){
            return player1.name;
          }
          else{
            return 'Tie';
          }          
}


function  isSame(arr1 , arr2 ) {
          // You have to write your code here
          if(Array.isArray(arr1)!== true || Array.isArray(arr2)!== true){
            return 'Invalid';
          }
          if(arr1.length !== arr2.length){
            return false;
          }
          if(arr1.length === arr2.length){
            let arrayLength = arr1.length;
          for (let i = 0; i < arrayLength; i++){
          if(arr1[i] !== arr2[i]){
            return false;
          }
          }
          return true;
          }
          }



function  resultReport( marks ) {
          // You have to write your code here
          if(Array.isArray(marks)!== true){
            return 'Invalid';
          }
          let sum = 0;
          let avgNumber = 0;
          let pass =0;
          let fail =0;
          for(let number of marks){
            if(number>=40){
              pass++ ;
            }
            if(number<40){
              fail++ ;
            }
            sum = sum + number;
          }
          
        if (marks.length > 0) {
        avgNumber = Math.round(sum / marks.length);
        }
        return { finalScore: avgNumber, pass: pass, fail: fail };
}
      console.log(isSame([1,2,3],[1,2,5]))





