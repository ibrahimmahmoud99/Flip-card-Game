import { Iprepare } from "./models/prepare.model";
import { Icard } from "./models/card.models";

const prepare: Iprepare = {};
prepare.cards = [];
prepare.progress = 0;
prepare.fullTrack = new Audio('./assets/audio/fulltrack.mp3');
prepare.flipAudio = new Audio('./assets/audio/flip.mp3');
prepare.goodAudio = new Audio('./assets/audio/good.mp3');
prepare.failAudio = new Audio('./assets/audio/fail.mp3');
prepare.gameOverAudio = new Audio('./assets/audio/game-over.mp3');
prepare.fullTrack.loop = true;

const numberOfCards = 20;
const tempNumbers = [];
let cardsHtmlContent = '';

const getRandomInt = (min, max) => {
    let result: number;
    let exists = true;
    min = Math.ceil(min);
    max = Math.floor(max);
    while (exists) {
        result = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!tempNumbers.find(no => no === result.toString())) { 
            exists = false;
            tempNumbers.push(result.toString());
        }
    }
    return result;
    
}