import './style.css';



  fetch("https://europe.api.riotgames.com/lor/match/v1/matches/by-puuid/OLAK4Fna1yAyLqMFTJ1gPqICrCGwWEZPSQs9JdWtGtzz1NJezSSH8QMgF2jrtcmk0u5fV7lyPl8Uvw/ids?api_key=RGAPI-214a8f70-95a8-4018-a3c7-3dd2a6c0ac49")
.then((response) => response.json())
.then((data) => console.log(data));
  