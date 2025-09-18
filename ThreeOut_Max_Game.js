const prompt = require('prompt-sync')();
//<-------------GLOBAL VARS------------>
//GAME CHECKS
let ans;
let equation;
let score = 0;
let lives = 3;
//ARITH MODE
let arithOp;
const ADD = 0;
const SUBTRACT = 1;
const MULTIPLY = 2;
const DIVIDE = 3;
const MODULAR = 4;

main();

//<------------------RUNNER------------------->
function main(){
    console.log("Hello! Welcome to Max Score - Three Out the math game");
    let gameMode = ``;
    while(!(gameMode == `MAX SCORE` || gameMode == `THREE OUT`)){
        gameMode = prompt("Would you like to play the MAX SCORE mode or THREE OUT mode:  ").toUpperCase();
    }
    if(gameMode == `MAX SCORE`)
        maxScore();
    else if(gameMode.toUpperCase() == `THREE OUT`)
        threeOut();
    console.log(`Thank you for playing! Your final score is ${score} points`);
}

//<----------------GAME MODE FUNCTION-------------->
function maxScore(){
    console.log(`Good choice! Max Score mode requires you to answer 20 equations. +10 points for the correct answer, 
        -5 points for the incorrect answer. You are allowed to skip the equation by typing SKIP.\nWhat difficulty would you like to play at?`);
    let gameDiff = prompt(`EASY, MEDIUM, or HARD:  `);
    checkAns: for(i = 0; i < 20; i++){
        console.log(`Current score: ${score}`);
        let playerAns = prompt(diffSelect(gameDiff.toUpperCase()));
        if(Number(playerAns) == ans){
            console.log(`Congrats you gained 10 points`);
            score+=10;
            continue checkAns;
        }else if(playerAns.toUpperCase() === `SKIP`){
            console.log(`You have skipped this equation`);
            i--;
            continue checkAns;
        }else if(isNaN(Number(playerAns))){
            while(isNaN(Number(playerAns))){
                console.log(`Please enter a valid response`);
                playerAns = Number(prompt(equation));
                if(playerAns == ans){
                    console.log(`Congrats you gained 10 points`);
                    score+=10;
                    continue checkAns;
                }else if(isNaN(playerAns) && playerAns.toUpperCase() === `SKIP`){
                    console.log(`You have skipped this equation`);
                    i--;
                    continue checkAns;
                }
            }
        }
        console.log(`Sorry you lost 5 points`)
        score-=5;
    }
}

function threeOut(){
    console.log(`Good choice! In Three Out mode your goal is to answer as many equations correctly as possible. 
        +10 points for the correct answer, -1 of 3 lives for the incorrect answer. \nWhat difficulty would you like to play at?`);
    let gameDiff = prompt(`EASY, MEDIUM, or HARD:  `);
    checkAns: while(lives > 0){
        let playerAns = Number(prompt(diffSelect(gameDiff.toUpperCase())));
        if(playerAns == ans){
            console.log(`Congrats you gained 10 points`);
            console.log(`Remaining lives: ${lives}`);
            score+=10;
            continue checkAns;
        }else if(isNaN(playerAns))
            console.log(`Invalid input`);
        lives--;
        console.log(`Remaining lives: ${lives}`);
    }
}

//<--------------DIFFICULTY FUNCTION--------------->
function diffSelect(gameDiff){
    while(!(gameDiff == `EASY` || gameDiff == `MEDIUM` || gameDiff == `HARD`)){
        gameDiff = prompt(`EASY, MEDIUM, or HARD:  `);
    }
    if(gameDiff == "EASY")
        easyDiff();
    if(gameDiff == "MEDIUM")
        mediumDiff();
    if(gameDiff == "HARD")
        hardDiff();
}

function easyDiff(){
    arithOp = Math.floor(Math.random()*2);
    if(arithOp === ADD){
        equation = `${Math.floor(Math.random()*10)} + ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }else{
        equation = `${Math.floor(Math.random()*10)} - ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
     }
}
function mediumDiff(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD){
        equation = `${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === SUBTRACT){
        equation = `${Math.floor(Math.random()*100)} - ${Math.floor(Math.random()*100)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === MULTIPLY){
        equation = `${Math.floor(Math.random()*10)} * ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === DIVIDE){
        equation = `${Math.floor(Math.random()*10)} / ${Math.floor(Math.random()*10)+1}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === MODULAR){
        equation = `${Math.floor(Math.random()*10)} % ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
}
function hardDiff(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD){
        equation = `${Math.floor(Math.random()*1000)} + ${Math.floor(Math.random()*1000)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === SUBTRACT){
        equation = `${Math.floor(Math.random()*1000)} - ${Math.floor(Math.random()*1000)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === MULTIPLY){
        equation = `${Math.floor(Math.random()*100)} * ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === DIVIDE){
        equation = `${Math.floor(Math.random()*100)} / ${Math.floor(Math.random()*10)+1}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
    if(arithOp === MODULAR){
        equation = `${Math.floor(Math.random()*100)} % ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation+" = ");
    }
}