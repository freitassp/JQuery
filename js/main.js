var frase = $(".frase").text();

var numPalavras = frase.split(" ").length -1;

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);


var campo = $(".campo-digitacao");
campo.on("input", function(){
  var conteudo = campo.val();


  var qtdPalavras = conteudo.split(/\s+/ ).length -1;
  $("#contador-palavras").text(qtdPalavras);

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);
});

