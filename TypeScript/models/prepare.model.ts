import { Icard } from "./card.models";

export interface Iprepare {
    cards?: Icard[];
    selectedCard_1?: Icard;
    selectedCard_2?: Icard;
    selectedIndex_1?: number;
    selectedIndex_2?: number;
    progress?: number;
    fullTrack?: HTMLAudioElement;
    flipAudio?: HTMLAudioElement;
    goodAudio?: HTMLAudioElement;
    failAudio?: HTMLAudioElement;
    gameOverAudio?: HTMLAudioElement;
}