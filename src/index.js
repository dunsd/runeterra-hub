import './style.css';
import { getPUUID, getUserFromName, getUserFromStorage, getMatchData } from './getAPI';
import {generateDisplay} from './display';


getUserFromStorage();
generateDisplay();

getMatchData();
