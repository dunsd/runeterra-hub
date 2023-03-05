import { generateDisplay } from "./display";
let currentUser = {};

const apiKey = "RGAPI-f21fa124-7f72-4d9a-bb2b-4503fbd0fee6";

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
    const response = await fetch(buildUserURL(name, {
        mode: 'cors'
    }));
    const userData = await response.json();
    
    currentUser = userData;
    setUser(userData);
    console.log(currentUser);
    generateDisplay();
    
}

function setUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
}

function getUserFromStorage() {
    currentUser = JSON.parse(localStorage.getItem("currentUser")) || [];
    console.log(currentUser);
}

async function getMatchData(){
    const response = await fetch("https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/"+currentUser.puuid + "/ids?api_key="+ apiKey, {
        mode: 'cors'
    });
    const matchHistory = await response.json();
    console.log(matchHistory);
}

export {getUserFromName, getUserFromStorage, getMatchData, currentUser };