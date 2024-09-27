function generatePassword(len = 8,useLowercase = true, useUppercase = true, useNumbers = true, useSymbols = true) {
    if (typeof len !== 'number') {
        throw new Error('Invalid length');
    }

    if (typeof useLowercase !== 'boolean') {
        throw new Error('Invalid useLowercase');
    }
    if (typeof useUppercase !== 'boolean') {
        throw new Error('Invalid useUppercase');
    }
    if (typeof useNumbers !== 'boolean') {
        throw new Error('Invalid useNumbers');
    }
    if (typeof useSymbols !== 'boolean') {
        throw new Error('Invalid useSymbols');
    }
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = [];

    if(useLowercase) password.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)])
    if(useUppercase) password.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)])
    if(useNumbers) password.push(numbers[Math.floor(Math.random() * numbers.length)])
    if(useSymbols) password.push(symbols[Math.floor(Math.random() * symbols.length)])

    let remainingLength = len - password.length;

    let possibleChars = '';
    if (useLowercase) possibleChars += lowercaseLetters;
    if (useUppercase) possibleChars += uppercaseLetters;
    if (useNumbers) possibleChars += numbers;
    if (useSymbols) possibleChars += symbols;
    if (possibleChars.length === 0) {
        throw new Error('At least one character type must be selected.');
    }
    for (let i = 0; i < remainingLength; i++) {
        let index = Math.floor(Math.random() * possibleChars.length);
        password.push(possibleChars[index]);
    }

    password = shuffleArray(password);

    return password.join('');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomBooleanWithRatio(ratio = 0.5) {
    if (isNaN(parseFloat(ratio))) {
        throw new Error('Invalid ratio');
    }
    if (parseFloat(ratio) > 1 || parseFloat(ratio) < 0) {
        throw new Error('Ratio is between 0 and 1');
    }
    return Math.random() < ratio;  // 默认50%的概率返回true
}

function generatePassword3(len=8) {
    if (typeof len !== 'number') {
        throw new Error('Invalid length');
    }
    let useNumbers = getRandomBooleanWithRatio();
    let useSymbols = !useNumbers;
    return generatePassword(len,true,true,useNumbers,useSymbols)
}


export {
    generatePassword,
    generatePassword3
}
