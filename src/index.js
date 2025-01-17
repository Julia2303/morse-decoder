const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let array = expr.match(/.{10}/g);
    const dot = '.';
    const dash = '-';
    let morseArray = [];
    for (let item of array) {
        let symbol = '';       
        for(let i = 0; i < item.length; i += 2) {
            if(item.substr(i, 2) === '10') {
                symbol += dot;
            } else if(item.substr(i, 2) === '11') {
                symbol += dash;
            } 
        }
        if (item.includes('*')) {
            symbol = ' ';
        }
        morseArray.push(symbol);
    }
    let result = [];
    for (let item of morseArray) {
        if(item === ' ') {
            result.push(' ');
        } else {
            result.push(MORSE_TABLE[item]);
        }
    }
    return result.join('');
}

module.exports = {
    decode
}

console.log(decode('00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010'))