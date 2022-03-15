export class LettersStatus {
    constructor(
        public correct: boolean[],
        public wrong: boolean[],
        public wrongLocation: boolean []
    ) {}
}