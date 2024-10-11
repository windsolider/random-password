import {COMMON_PASSWORDS,MULTIPLE_NUMBERS_RE,MULTIPLE_SYMBOLS_RE,UPPERCASE_LOWERCASE_RE,SYMBOL_RE} from './constants.js';
class Strength {
    constructor(pwd) {
        this.password = pwd;
        this.score = 0;
        this.status = null;
    }
    check() {
        let score = 0;

    }
    calculateScore(type) {
        let score = 0;
        switch (type) {
            case "passwordLength":
                if (this.password.length < 6) {
                    score = -100;
                } else {
                    score = this.password.length * 4;
                }
            break;
            case "numbers":
                if (this.password.match(MULTIPLE_NUMBERS_RE)) {
                    score = 5;
                }
            break;
            case "symbols":
                if (this.password.match(MULTIPLE_SYMBOLS_RE)) {
                    score = 5;
                }
            break;
            case "uppercaseLowercase":
                if (this.password.match(UPPERCASE_LOWERCASE_RE)) {
                    score = 10;
                }
            break;
            case "numbersChars":
                if (this.password.match(/[a-z]/i) && this.password.match(/[0-9]/)) {
                    score = 15;
                }
            break;
            case "numbersSymbols":
                if (this.password.match(/[0-9]/) && this.password.match(SYMBOL_RE)) {
                    score = 15;
                }
            break;
            case "symbolsChars":
                if (this.password.match(/[a-z]/i) && this.password.match(SYMBOL_RE)) {
                    score = 15;
                }
            break;
            case "onlyChars":
                if (this.password.match(/^[a-z]+$/i)) {
                    score = -15;
                }
            break;
            case "only_numbers":
                if (this.password.match(/^\d+$/i)) {
                    score = -15;
                }
            break;
            case "sequences":
                score += -15 * this.sequences(this.password);
                score += -15 * this.sequences(this.reversed(this.password));
            break;
            case "repetitions":
                score += -(this.repetitions(this.password, 2) * 4);
                score += -(this.repetitions(this.password, 3) * 3);
                score += -(this.repetitions(this.password, 4) * 2);
            break; 
        }
    }
    usesCommonWord() {
        return COMMON_PASSWORDS.indexOf(this.password.toLowerCase()) >= 0;
    }
}