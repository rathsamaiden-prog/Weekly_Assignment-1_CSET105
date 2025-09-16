const prompt = require('prompt-sync')();

main();

function main(){
    console.log("Hello! Welcome to Max Out - Three Out the math game");
    let gameMode = Number(prompt("Would you like to play the MAX OUT mode or THREE OUT mode"));
    if(gameMode === 1)
        maxScore();
    else
        threeOut();
}

function maxScore(){
    console.log("maxScore");
}

function threeOut(){
    console.log("threeOut");
}