var palavra = "palavras";
console.log(palavra.length);

for(var i = 0; i < palavra.length; i++){

var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
var b = (i*20)+200;
pincel.fillRect(b,0,15,2);

}

