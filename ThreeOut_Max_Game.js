const prompt = require('prompt-sync')();
//<-------------GLOBAL VARS------------>
let arithOp;
let ans;
let equation;
let score;
const ADD = 0;
const SUBTRACT = 1;
const MULTIPLY = 2;
const DIVIDE = 3;
const MODULAR = 4;

main();
//easyDiff();

function main(){
    console.log("Hello! Welcome to Max Out - Three Out the math game");
    let gameMode = Number(prompt("Would you like to play the MAX OUT mode or THREE OUT mode"));
    if(gameMode === 1)
        maxScore();
    else
        threeOut();
    console.log(`Thank you for playing! Your final score is ${score} points`);
}

function maxScore(){
    console.log(`Good choice! What difficulty would you like to play at?`);
    let gameDiff = prompt(`EASY, MEDIUM, or HARD`)
    checkAns: for(i = 0; i < 20; i++){
        let playerAns = Number(prompt(diffSelect(gameDiff)));
        if(playerAns == ans){
            console.log(`Congrats you gained 10 points`);
            score+=10;
            continue checkAns;
        }else if(isNaN(playerAns)){
            while(isNaN(playerAns)){
                console.log(`Please enter a valid response`);
                console.log(equation);
                playerAns = Number(prompt());
                if(playerAns == ans){
                    console.log(`Congrats you gained 10 points`);
                    score+=10;
                    continue checkAns;
                }
            }
        }
        console.log(`Sorry you lost 5 points`)
        score-=5;
    }
}

function threeOut(){
    console.log("threeOut");
}

function diffSelect(gameDiff){
    if(gameDiff === "EASY")
        easyDiff();
    if(gameDiff === "MEDIUM")
        mediumDiff();
    if(gameDiff === "HARD")
        hardDiff();
}
function easyDiff(){
    arithOp = Math.floor(Math.random()*2);
    if(arithOp === ADD){
        equation = `${Math.floor(Math.random()*10)} + ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
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
        equation = `${Math.floor(Math.random()*100)} + ${Math.floor(Math.random()*100)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === SUBTRACT){
        equation = `${Math.floor(Math.random()*100)} - ${Math.floor(Math.random()*100)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === MULTIPLY){
        equation = `${Math.floor(Math.random()*10)} * ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === DIVIDE){
        equation = `${Math.floor(Math.random()*10)} / ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === MODULAR){
        equation = `${Math.floor(Math.random()*10)} % ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation);
    }
}
function hardDiff(){
    arithOp = Math.floor(Math.random()*5);
    if(arithOp === ADD){
        equation = `${Math.floor(Math.random()*1000)} + ${Math.floor(Math.random()*1000)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === SUBTRACT){
        equation = `${Math.floor(Math.random()*1000)} - ${Math.floor(Math.random()*1000)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === MULTIPLY){
        equation = `${Math.floor(Math.random()*100)} * ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === DIVIDE){
        equation = `${Math.floor(Math.random()*100)} / ${Math.floor(Math.random()*10)+1}`;
        ans = eval(equation);
        return console.log(equation);
    }
    if(arithOp === MODULAR){
        equation = `${Math.floor(Math.random()*100)} % ${Math.floor(Math.random()*10)}`;
        ans = eval(equation);
        return console.log(equation);
    }
}