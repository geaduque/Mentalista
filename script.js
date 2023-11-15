function Mentalista() {
  let numeroSecreto = Math.floor(Math.random() * 1000 + 1);
  var tentativas = 0;
  var limiteTentativas = 10;
  let chute

  while (chute != numeroSecreto) {
    chute = parseInt(prompt('Digite um número entre 0 e 1000'));
    tentativas++;

      if (chute == numeroSecreto) {
        alert("Parabéns, você acertou!");
      } else if (chute > numeroSecreto) {
        alert("Continue tentando, o número secreto é menor que seu chute");
      } else if (chute < numeroSecreto) {
        alert("Continue tentando, o número secreto é maior que seu chute");
      }

      if (tentativas === limiteTentativas) {
        alert(
          "Suas tentativas acabaram! O número secreto era " +
            numeroSecreto +
            ". Você perdeu o jogo."
        );

      break;
    }
  }
}
