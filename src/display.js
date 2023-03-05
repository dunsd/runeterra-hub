import { getPUUID, getUserFromName, currentUser } from './getAPI';

async function generateDisplay(data){
  const userDiv = document.createElement('div');
  const stats = document.querySelector('.stats');
  
  stats.textContent = `Name: ${currentUser.name}, Level: ${currentUser.summonerLevel},
   puuid: ${currentUser.puuid}.`;
}


export {generateDisplay};