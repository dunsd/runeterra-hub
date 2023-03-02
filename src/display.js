import { getPUUID, getUserFromName } from './getAPI';

async function generateDisplay(){
  const userDiv = document.createElement('div');
  const stats = document.querySelector('.stats');
  //let user = await getUserFromName("Ulfilas");
  try{
    let user = await getUserFromName("Ulfilas");
  }
  catch(e){
    console.log("ERROR");
  }
  stats.textContent = getUserData();
}

// async function getUserData(){
//   try{
//     let user = await getUserFromName("Ulfilas");
//   }
  
//   return user.summonerLevel;
// }


export {generateDisplay};