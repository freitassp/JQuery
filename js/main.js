var frase = $(".frase").text();

var numPalavras = frase.split(" ").length -1;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

console.log(tamanhoFrase);

