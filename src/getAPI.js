const apiKey = "RGAPI-baa48dc0-774f-422e-a93a-f73b252b7ebb";

// fetch("https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/OLAK4Fna1yAyLqMFTJ1gPqICrCGwWEZPSQs9JdWtGtzz1NJezSSH8QMgF2jrtcmk0u5fV7lyPl8Uvw/ids?api_key=RGAPI-214a8f70-95a8-4018-a3c7-3dd2a6c0ac49")
// .then((response) => response.json())
// .then((data) => console.log(data));
  
// get unique PUUID via username (PUUID used for some API queries)
function getPUUID(name) { 
    // fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ name + "?api_key=" + apiKey)
    // .then((response) => response.json())
    getUser(name)
    .then((data) => console.log(data.puuid));
}
function buildUserURL(name){
    return "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ name + "?api_key=" + apiKey;
}

async function getUserFromName(name){
    const response = await fetch(buildUserURL(name));
    const userData = await response.json();
    const userPUUID = userData.puuid;
    console.log("Name: " + userPUUID);
    return userData.name;
}

async function generateDisplay(){
    const userDiv = document.createElement('div');
    const stats = document.querySelector('.stats');
    //let user = await getUserFromName("Ulfilas");
    
    stats.textContent = await getUserFromName("Ulfilas");
  }

export {getPUUID, getUserFromName, generateDisplay};