const prompt = require('prompt-sync')();
//<-------------GLOBAL VARS------------>
let arithOp;
let ans;
const ADD = 0;
const SUBTRACT = 1;
const MULTIPLY = 2;
const DIVIDE = 3;
const MODULAR = 4;

//main();
easyDiff();

function main(){
    console.log("Hello! Welcome to Max Out - Three Out the math game");
    let gameMode = Number(prompt("Would you like to play the MAX OUT mode or THREE OUT mode"));
    if(gameMode === 1)
        maxScore();
    else
        threeOut();
}

function maxScore(){
    console.log(`Good choice! What difficulty would you like to play at?`);
    let gameDiff = prompt(`EASY, MEDIUM, or HARD`)
    for(i = 0; i < 19; i++){
        let equation = diffSelect(gameDiff);
        let ans = prompt(equation);
        
    }
}

function threeOut(){
    console.log("threeOut");
}

function diffSelect(gameDif){
    if(gameDiff === "EASY")
        easyDiff();
    if(gameDiff === "MEDIUM")
        mediumDiff();
    if(gameDiff === "HARD")
        hardDiff();
}
function easyDiff(){
    arithOp = Math.floor(Math.random()*2);
    let equation;
    if(arithOp === ADD){
        equation = `${Math.floor(Math.random()*10)} + ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        console.log(ans);
        return console.log(equation);
    }else{
        equation = `${Math.floor(Math.random()*10)} - ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation);
     }

}
function mediumDiff(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD){
        return console.log(`${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)}`);
    }
    if(arithOp === SUBTRACT){
        return console.log(`${Math.floor(Math.random()*100)} - ${Math.floor(Math.random()*100)}`);
    }
    if(arithOp === MULTIPLY){
        return console.log(`${Math.floor(Math.random()*10)} * ${Math.floor(Math.random()*10)}`);
    }
    if(arithOp === DIVIDE){
        return console.log(`${Math.floor(Math.random()*10)} * ${Math.floor(Math.random()*10)+1}`);
    }
    if(arithOp === MODULAR){
        return console.log(`${Math.floor(Math.random()*10)} % ${Math.floor(Math.random()*10)}`);
    }
}
function hardDiff(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD){
        return console.log(`${Math.floor(Math.random()*1000)} + ${Math.floor(Math.random()*1000)}`);
    }
    if(arithOp === SUBTRACT){
        return console.log(`${Math.floor(Math.random()*1000)} - ${Math.floor(Math.random()*1000)}`);
    }
    if(arithOp === MULTIPLY){
        return console.log(`${Math.floor(Math.random()*100)} * ${Math.floor(Math.random()*10)}`);
    }
    if(arithOp === DIVIDE){
        return console.log(`${Math.floor(Math.random()*100)} * ${Math.floor(Math.random()*10)+1}`);
    }
    if(arithOp === MODULAR){
        return console.log(`${Math.floor(Math.random()*100)} % ${Math.floor(Math.random()*10)}`);
    }
}