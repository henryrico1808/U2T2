
var squarei = require("./cadena");

const palabra = "anita lava la tina";
var a= squarei.palindromoe(palabra);
var b= squarei.NumPalabrase(palabra);
var c= squarei.NumLetrase(palabra);
var d= squarei.NumVocalesa(palabra);
var e= squarei.NumConsonantesa(palabra);


console.log(a);
console.log("el numero de palabras es "+b);
console.log("numero de letras "+c);
console.log("numero de vocales "+d);
console.log("numero de consonantees "+e);
