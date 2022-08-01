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
    let res = []
    for(let i=0;i<expr.length;){
      let tmp = expr.substring(i, i+10)
      let c = tmp.slice(tmp.indexOf('1'))
      if(c === "*"){
        res.push(' ')
        i=i+10
        continue;
      }
      let m = ''
        for(let j=0;j<c.length;){
          if(c.substring(j,j+2) ==='10'){
            m=m+'.'
          }
          if(c.substring(j,j+2) ==='11'){
            m=m+'-'
          }
          j=j+2
        }
      res.push(MORSE_TABLE[m])
      i=i+10
    }
    return res.join('')
}

module.exports = {
    decode
}