const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const frutasOrdemAlfabeticaPorCaracteres = frutas.sort((a, b) => {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
});

console.log(frutasOrdemAlfabeticaPorCaracteres);