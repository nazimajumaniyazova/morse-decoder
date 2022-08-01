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
    // write your solution here
    return expr.split('').map(elem =>{
      if(elem === ' ') {return '**********'}
      let tmp =''
      let morseCode = getKeyByValue(elem);
      for(let i =0;i<morseCode.length;i++){
        if(morseCode[i]==='-'){
          tmp = tmp + 11
        }else{
          tmp = tmp + 10
        }
      }
      if(tmp.length<10){
        while(tmp.length < 10){
          tmp = 0 + tmp
        }
      }
      return tmp
    }).join('')
  }
  function getKeyByValue(value) {
    return Object.keys(MORSE_TABLE).find(key => MORSE_TABLE[key] === value);
  }

module.exports = {
    decode
}