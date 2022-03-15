import { LettersStatus } from "./lettersStatus";

export class Word {
    constructor(
        public active: boolean,
        public lettersStatus: LettersStatus,
        public word: string[],
        public popIn:boolean[],
        public flipIn: boolean[],
        public flipOut: boolean[],
        public dance: boolean[],
        public shake: boolean,
    ) {}
}