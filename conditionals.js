//exercise 21
function isEven(num){
   if(num % 2 === 0) {
       console.log("even");
   } 
}

isEven(4);
isEven(3);
   
//exercise 22
function getColor(phrase){
    if(phrase === "stop") {
        console.log("red");
    } else if(phrase === "slow") {
        console.log(yellow);
    } else if(phrase === "go") {
        console.log("green");
    } else {
        console.log("purple");
    }
}

getColor("stop");
getColor("slow");
getColor("go");
getColor("what?");

//exercise 23
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE 

// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}

//exercise 24
const mystery = 'Peanut7'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE



// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}
