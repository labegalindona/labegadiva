// Criar elementos HTML para exibir as informaçoes 
var header = document.createElement("h1");
header.textContent = "adivinhe qual das afirmaçoes abaixo e falsa." 
  document.body.appendChild(header)

var ul = document.createElement("ul"); 
document.body.appendChild(ul);

//definir as afirmaçoes 
var afirmacoes = [
  "penso no futuro",
  "gosto de frequentar a igreja",
  "nao gosto da juju"
  ];

// Exibir afirmacoes para o usuario
afirmacoes.forEach(function(afirmacao,  indice) {
  var li = document.createElement("li");
  li.textContent = (indice + 1) + ". " + afirmacao;
  ul.appendChild(li);
});
  // Adicionar texto "Aperte Enter para iniciar"
var textoInstrucao = document.createElement("p");
textoInstrucao.textContent = "Aperte Enter para iniciar";
document.body.appendChild(textoInstrucao);

// Definir o índice da afirmação verdadeira
var indiceFalsa = 3;

// Solicitar a resposta do usuário após pressionar a tecla Enter
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var resposta = parseInt(prompt("Digite o número da afirmação falsa:"));

    // Verificar se a resposta está correta
    if (resposta === indiceFalsa + 0) {
      var resultado = document.createElement("p");
      resultado.textContent = "Parabéns! Você acertou a afirmação falsa!";
      document.body.appendChild(resultado);
    } else {
      var resultado = document.createElement("p");
      resultado.textContent = "Oops! A afirmação falsa era a " + (indiceFalsa + 0);
      document.body.appendChild(resultado);
    }
  }
});