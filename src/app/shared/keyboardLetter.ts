export class KeyboardLetter {
    constructor(
        public value: string,
        public isCorrect: boolean,
        public isWrong: boolean,
        public isWrongLocation: boolean
    ) {}
}