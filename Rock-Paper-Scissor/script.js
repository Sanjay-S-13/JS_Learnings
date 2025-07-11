
let score = JSON.parse(localStorage.getItem('score'))
||  {
        wins : 0,
        losses : 0,
        ties : 0
    };

    updateScoreElement();
    
/*
if(!score){
    score = {
        wins : 0,
        losses : 0,
        ties : 0
    };
}*/

function playGame(playerMove){

const compMove = predictCompNum();
let result = '';

if(playerMove === 'Scissors'){
    
    if(compMove === 'Scissors'){
        result = 'tie';
    }
    else if(compMove === 'Rock'){
        result = 'Lose';
    }
    else{
        result = 'Win';
    }
}

else if(playerMove === 'Paper'){
    
    if(compMove === 'Paper'){
        result  = 'tie';
    }
    else if(compMove === 'Scissors'){
        result  = 'Lose';
    }
    else{
        result  = 'Win';
    }
}

else{

    if(compMove === 'Rock'){
        result = 'tie';
    }
    else if(compMove === 'Paper'){
        result = 'Lose';
    }
    else{
        result = 'Win';
    }
        }

if(result === 'Win'){
    score.wins +=1;
}
else if(result === 'Lose'){
    score.losses +=1;
}
else{
    score.ties+=1;
}             

localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML = `Result is : ${result}`;

document.querySelector('.js-moves').innerHTML = `You <img src="${playerMove}-emoji.png" class="move-icon"> <img src="${compMove}-emoji.png" class="move-icon" >computer`;

}


function updateScoreElement(){
document.querySelector('.js-score').innerHTML=`
    Wins : ${score.wins} || Losses : ${score.losses} || Ties : ${score.ties}`;
}


function predictCompNum(){

let compMove1 = '';

let randomnumber = Math.random();

if(randomnumber>=0 && randomnumber<1/3){
    compMove1 = 'Rock';
}
else if(randomnumber>=1/3 && randomnumber<2/3){
    compMove1 = 'Paper';
}
else{
    compMove1 = 'Scissors';
}

return compMove1;
}
