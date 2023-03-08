import { generateDisplay, displayMatchHistory } from "./display";
import apiKey from "./apiKey";
let currentUser = {};
let matchData = [];
let matchInfo = [];



const getUserButton = document.querySelector('.getUser');



getUserButton.addEventListener('click', () => getName());
  
 function getName(){
    let name = prompt("Please enter your username:");
    console.log("getName");
    getUserFromName(name);
    
}

function buildUserURL(name){
    return "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ name + "?api_key=" + apiKey;
}

async function getUserFromName(name){
    try {
    const response = await fetch(buildUserURL(name, {
        mode: 'cors'
    }));
    const userData = await response.json();
    
    currentUser = userData;
    setUser(userData);
    console.log(currentUser);
    generateDisplay();
    }
    catch(err){
        console.log(err);
    }   
    
}

function setUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function getUserFromStorage() {
    currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
    console.log(currentUser);
}

async function getMatchData(){
    try {const response = await fetch("https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/"+currentUser.puuid + "/ids?api_key="+ apiKey, {
        mode: 'cors'
    })
    const matchHistory = await response.json();
    let matchData = matchHistory;
    console.log(matchData);
    }
    catch (err) {
        console.log(err);
    }
}

async function getMatchInfo(){  

        let matchHistory = await getMatchData();
        let matchTemp = [{}];
        for(let i=0; i<10;i+=1){
            try{
                
                let response = await fetch("https://europe.api.riotgames.com/lor/match/v1/matches/"+matchHistory[i] + "?api_key=" + apiKey, {
                mode: 'cors'
                })
                matchTemp[i] = await response.json();
                matchInfo[i] = matchTemp[i];
                console.log("Match Info" + matchInfo[i].info.game_type);
            
            }
    catch (err){
        console.log(err);
    }
}
console.log(matchInfo);
displayMatchHistory(matchInfo);
}

export {getUserFromName, getUserFromStorage, getMatchData, currentUser, getMatchInfo };