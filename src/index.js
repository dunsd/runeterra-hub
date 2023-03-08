import './style.css';
import { getPUUID, getUserFromName, getUserFromStorage, getMatchData, getMatchInfo } from './getAPI';
import {generateDisplay} from './display';


getUserFromStorage();
generateDisplay();

getMatchData();
getMatchInfo();
