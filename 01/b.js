const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const numerosOrdemDecrescente = numeros.sort((a, b) => {
  return b - a;
});

console.log(numerosOrdemDecrescente);