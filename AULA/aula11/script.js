const casas = document.querySelectorAll(".casa");
let atual = "x";
let contador = 0;

casas.forEach((casa) => {
  casa.addEventListener("click", (event) => {
    if (event.target.innerText == "") {
      event.target.innerText = atual;
      contador++;
      if (atual == "x") {
        atual = "o";
      } else {
        atual = "x";
      }
      const ganhador = verificaVitoria();
      if(ganhador){
        alert('o jogado ${ganhador} venceu!');
      }else if (contador == 9){
        alert('O jogo empatou!'); 
      }
    }
  });
});

function verificaVitoria() {
  //Verificar as linhas

  if ((casas[0].innerText) &&
    (casas[0].innerText == casas[1].innerText) &&
    (casas[1].innerText == casas[2].innerText)){
    return casas[0].innerText;
  }
  if ((casas[3].innerText) &&
    (casas[3].innerText == casas[4].innerText) &&
    (casas[4].innerText == casas[5].innerText)){
    return casas[3].innerText;
  }
  if ((casas[6].innerText) &&
    (casas[6].innerText == casas[7].innerText) &&
    (casas[7].innerText == casas[8].innerText)){
    return casas[6].innerText;
  }
  //verificando colunas

  if ((casas[0].innerText) &&
    (casas[0].innerText == casas[3].innerText) &&
    (casas[3].innerText == casas[6].innerText)){
    return casas[0].innerText;
  }

  if ((casas[1].innerText) &&
    (casas[1].innerText == casas[4].innerText) &&
    (casas[4].innerText == casas[7].innerText)){
    return casas[1].innerText;
  }

  if ((casas[2].innerText) &&
    (casas[2].innerText == casas[5].innerText) &&
    (casas[5].innerText == casas[8].innerText)){
    return casas[2].innerText;
  }

  //verificando diagonal


  if((casas[0].innerText) &&
    (casas[0].innerText == casas[4].innerText) &&
     (casas[4].innerText == casas[8].innerText)){
      return casas[0].innerText;
     }
     if((casas[2].innerText) &&
      (casas[2].innerText == casas[4].innerText) &&
        (casas[4].innerText == casas[6].innerText)){
         return casas[2].innerText;
        }
      return '';
}
