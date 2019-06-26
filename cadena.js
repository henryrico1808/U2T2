/*Recibe cadena
verifica si es palindromo
Cuenta el numro de palabras en la cadena
Cuenta el numero de letras (sin espacios)
Cuenta el numero de vocales
Cuenta el numero de consonantes
imprime toda la informacion anterio*/

function Palindromo(palabra) { 

    var revers = "";
    var palabra=palabra.replace(/ /g, "");

    for (var i=0; i<palabra.length;i++){
        if(palabra[i]!=palabra[palabra.length-i-1]){
            return false;
        }
    }
    return true;       
  }                       

function NumPalabras(palabra){
    var num = palabra.split(" ");

    return num.length;
}
function NumLetras(palabra){
    var palabra=palabra.replace(/ /g, "");
    var num = palabra.length;

    return num;
}

function NumVocales(palabra){
    var ar = palabra.match(/[aeiou]/g);
    return ar.length;
}
function NumConsonantes(palabra){
    var ar = palabra.match(/[qwrtypsdfghjklñvzxcbnm]/g);
    return ar.length;
}



module.exports.palindromoe = Palindromo;
module.exports.NumPalabrase = NumPalabras;
module.exports.NumLetrase = NumLetras;
module.exports.NumVocalesa = NumVocales;
module.exports.NumConsonantesa= NumConsonantes;