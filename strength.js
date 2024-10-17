import {COMMON_PASSWORDS,KEYBORD_PASSWORDS,NUMBERS_PASSWORDS,MULTIPLE_NUMBERS_RE,MULTIPLE_SYMBOLS_RE,UPPERCASE_LOWERCASE_RE,SYMBOL_RE} from './constants.js';
class Strength {
    constructor(pwd) {
        this.password = pwd;
        this.score = 0;
        this.status = null;
    }
    check() {
        let score = 0;
        score += this.calculateScore("passwordLength");
        score += this.calculateScore("numbers");
        score += this.calculateScore("symbols");
        score += this.calculateScore("uppercaseLowercase");
        score += this.calculateScore("numbersChars");
        score += this.calculateScore("numbersSymbols");
        score += this.calculateScore("symbolsChars");
        score += this.calculateScore("onlyChars");
        score += this.calculateScore("onlyNumbers");
        score += this.calculateScore("duplicates");
        this.score = score = score <0 ? 0 : score > 100 ? 100 : score;
        if (score < 35) {
            this.status = "weak";
        }
    
        if (score >= 35 && score < 60) {
            this.status = "good";
        }
    
        if (score >= 70) {
            this.status = "strong";
        }
        return this.status
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
            case "onlyNumbers":
                if (this.password.match(/^\d+$/i)) {
                    score = -15;
                }
            break;
            case "duplicates":
                score += -15 * Object.keys(this.findConsecutiveDuplicates(this.password)).length;
            break;
        }
    }

    findConsecutiveDuplicates(text) {
        const matches = text.match(/(\w+)\1+/g) || [];
        return matches.reduce((init,current)=>{
            init[current] = current.length
            return init
        },{});
    }
    usesCommonWord() {
        return COMMON_PASSWORDS.indexOf(this.password.toLowerCase()) >= 0 || KEYBORD_PASSWORDS.indexOf(this.password.toLowerCase()) >= 0 || NUMBERS_PASSWORDS.indexOf(this.password.toLowerCase()) >= 0;
    }
}

export default Strength