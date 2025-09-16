const prompt = require('prompt-sync')();
//GLOBAL VARS
let arithOp;
const ADD = 0;
const SUBTRACT = 1;
const MULTIPLY = 2;
const DIVIDE = 3;
const MODULAR = 4;

//main();
hardMode();

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

function easyMode(){
    arithOp = Math.floor(Math.random()*2);
    if(arithOp === ADD)
        return console.log(`${Math.floor(Math.random()*10)} + ${Math.floor(Math.random()*10)}`);
    else
        return console.log(`${Math.floor(Math.random()*10)} - ${Math.floor(Math.random()*10)}`);

}
function mediumMode(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD)
        return console.log(`${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)}`);
    if(arithOp === SUBTRACT)
        return console.log(`${Math.floor(Math.random()*100)} - ${Math.floor(Math.random()*100)}`);
    if(arithOp === MULTIPLY)
        return console.log(`${Math.floor(Math.random()*10)} * ${Math.floor(Math.random()*10)}`);
    if(arithOp === DIVIDE)
        return console.log(`${Math.floor(Math.random()*10)} * ${Math.floor(Math.random()*10)+1}`);
    if(arithOp === MODULAR)
        return console.log(`${Math.floor(Math.random()*10)} % ${Math.floor(Math.random()*10)}`);
}
function hardMode(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD)
        return console.log(`${Math.floor(Math.random()*1000)} + ${Math.floor(Math.random()*1000)}`);
    if(arithOp === SUBTRACT)
        return console.log(`${Math.floor(Math.random()*1000)} - ${Math.floor(Math.random()*1000)}`);
    if(arithOp === MULTIPLY)
        return console.log(`${Math.floor(Math.random()*100)} * ${Math.floor(Math.random()*10)}`);
    if(arithOp === DIVIDE)
        return console.log(`${Math.floor(Math.random()*100)} * ${Math.floor(Math.random()*10)+1}`);
    if(arithOp === MODULAR)
        return console.log(`${Math.floor(Math.random()*100)} % ${Math.floor(Math.random()*10)}`);
}