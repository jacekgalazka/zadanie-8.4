'use strict'


var paper = 'PAPER';
var rock = 'ROCK'
var scissors = 'SCISSORS';
var output = document.querySelector('#output');
var gameResult = document.querySelector('#gameResult');
var playerResult = document.querySelector('#playerResult').innerHTML = 0;
var pcResult = document.querySelector('#pcResult').innerHTML = 0;
var playerChoice = buttonPaper || buttonRock || buttonScissors;
var playerMove;
var pcMove;
var rounds;




var buttonPaper = document.querySelector('#paper');
var buttonRock = document.querySelector('#rock');
var buttonScissors = document.querySelector('#scissors');
var buttonNewGame = document.querySelector('#buttonNewGame');



function pcChoice() { 
    return Math.floor(Math.random()*3+1); 
}               

function compare(){
   
    if(playerResult == (rounds-1)){
        document.querySelector('#gameResult').innerHTML = 'and YOU WON ENTIRE GAME !!'+'<br>' + 'Please press the NEW GAME button';
        document.querySelector('#playerResult').innerHTML = rounds;
        return;
    } else if(pcResult == (rounds-1)){
        document.querySelector('#gameResult').innerHTML = 'and YOU LOST ENTIRE GAME !!' +'<br>' + 'Please press the NEW GAME button';
        document.querySelector('#pcResult').innerHTML = rounds;
        return;
    } else {
    
        if(pcMove == playerMove) {
            output.innerHTML = 'You tied this part';
        } else if ((playerMove == 1 && pcMove == 2) || (playerMove == 2 && pcMove == 3) || (playerMove == 3 && pcMove == 1)){
            output.innerHTML = 'You lost this part ';
            document.querySelector('#pcResult').innerHTML = 1 + pcResult++;
        } else {
            output.innerHTML = 'You won this part';
            document.querySelector('#playerResult').innerHTML = 1 + playerResult++;
        }
    }
}




//Button Function's

buttonPaper.addEventListener('click', function(){
    playerMove = 1;
    playerChoice = paper;
    pcMove = pcChoice();
    compare();
});

buttonRock.addEventListener('click', function(){
    playerMove = 2;
    playerChoice = rock;
    pcMove = pcChoice();
    compare();
});

buttonScissors.addEventListener('click', function(){
    playerMove = 3;
    playerChoice = scissors;
    pcMove = pcChoice();
    compare();
});

 //GAME

 buttonNewGame.addEventListener('click', function(){
    rounds = window.prompt('How many rounds win ??');
    playerResult = document.querySelector('#playerResult').innerHTML = 0;
    pcResult = document.querySelector('#pcResult').innerHTML = 0;
    document.querySelector('#gameResult').innerHTML = '';
    document.querySelector('#output').innerHTML = '';
    if(isNaN(rounds)){
        output.innerHTML = 'Write a number !!';
    }
});