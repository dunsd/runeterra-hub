import { getPUUID, getUserFromName, currentUser } from './getAPI';

async function generateDisplay(){
  const userDiv = document.createElement('div');
  const stats = document.querySelector('.stats');
  
  stats.textContent = `Name: ${currentUser.name}, Level: ${currentUser.summonerLevel},
   puuid: ${currentUser.puuid}.`;
}

async function displayMatchHistory(matches){
const matchHistory = document.createElement('div');
const stats = document.querySelector('.stats');
matchHistory.className = "matchHistory";
for(let i = 0;i<matches.length;i+=1){
  const matchDiv = document.createElement('div');
  matchDiv.textContent = matches[i].info.game_mode;
  matchHistory.appendChild(matchDiv);
}
stats.appendChild(matchHistory);
}

export {generateDisplay, displayMatchHistory};