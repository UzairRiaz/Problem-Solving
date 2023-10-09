
const message = "hello world from a programmer";
const alphabets = {
  "a": "z", "b": "y", "c": "x", "d": "w", "e": "v", "f": "u", "g": "t", "h": "s", "i": "r", "j": "q", "k": "p", "l": "o", "m": "n", "n": "m", "o": "l", "p": "k", "q": "j", "r": "i", "s": "h", "t": "g", "u": "f", "v": "e", "w": "d", "x": "c", "y": "b", "z": "a"
}

const atbashCipher = (message) => {
  let cipher = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      cipher += " ";
    } else {
      cipher += alphabets[message[i]];
    }
  }
  return cipher;
}

const cipher = atbashCipher(message);
console.log(cipher);
const deciphered = atbashCipher(cipher); 
console.log(deciphered);


