const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const frutasOrdemAlfabeticaCrescente = frutas.sort((a, b) => {
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  } else if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  return 0;
});

console.log(frutasOrdemAlfabeticaCrescente);