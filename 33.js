var numOfWon = 0;
var numOfLost = 0;

for( var i = 1; i<=5; i++){
    var GussingNumber = parseInt (prompt("Enter the Number 1 to 5 :"));


var randomNumber = Math.floor(Math.random()*5) +1;

if(GussingNumber===randomNumber){
    console.log("You are the Winner ");
    numOfWon++;
}
else{
    console.log("You are the loss and Your Random Number is " + randomNumber);
    numOfLost++;
}
}

document.write("Total You have won ="+numOfWon +"</br>");
document.write("Total You have lost ="+numOfLost);