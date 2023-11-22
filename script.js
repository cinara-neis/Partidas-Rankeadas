function partidasRank(vitorias, derrotas){
  var saldoVitorias = vitorias - derrotas;
  return saldoVitorias;
}

var nivel;
var saldoVitorias = partidasRank(150, 10);

switch (true){
  case saldoVitorias < 10:
    nivel = "Ferro";
    break;
  case saldoVitorias >= 11 && saldoVitorias <= 20:
    nivel = "Bronze";
    break;
  case saldoVitorias >= 21 && saldoVitorias <= 50:
    nivel = "Prata";
    break;
  case saldoVitorias >= 51 && saldoVitorias <= 80:
    nivel = "Ouro";
    break;
  case saldoVitorias >= 81 && saldoVitorias <= 90:
    nivel = "Diamante";
    break;
  case saldoVitorias >= 91 && saldoVitorias <= 100:
    nivel = "Lendário";
    break;
  default:
    nivel = "Imortal";
    console.log("Eu também possuo a eternidade. Quando nós explodimos o nosso Cosmo, criamos uma força. Nesse momento, nós, Cavaleiros, nos fundimos com o Universo… E chegamos perto da eternidade.");
    console.log("'Seiya de Pégaso'")
}
console.log("")
console.log("O Herói tem um saldo de " + saldoVitorias + " e está no nível " + nivel);
