//Initial score of team A and B
let teamAscore=0;
let teamBscore=0;
// let get refrences to html element that displays the score
let teamAscoreValue=document.getElementById("teamAscore");
let teamBscoreValue=document.getElementById("teamBscore");
//function to increase the score of team(s)
let incrementScore=(team)=>{
    if(team==="teamA"){
        teamAscore++;
        teamAscoreValue.textContent=teamAscore;
    }
    else if(team==="teamB"){
        teamBscore++;
        teamBscoreValue.textContent=teamBscore;
    }
};
//function for decrementaion
let decrementScore=(team)=>{
    if(team==="teamA"&& teamAscore>0){
        teamAscore--;
        teamAscoreValue.textContent=teamAscore;
    }
    else if(team==="teamB"&& teamBscore>0){
        teamBscore--;
        teamBscoreValue.textContent=teamBscore;
    }
};
//function for reset value
let resetScore=()=>{
    teamAscore=0;
    teamBscore=0;
    teamAscoreValue.textContent=teamAscore;
    teamBscoreValue.textContent=teamBscore;
};