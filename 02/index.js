const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const cidadeComMaisLetras = cidades.reduce((acumulador, valorAtual) => {
  return valorAtual.length > acumulador.length ? valorAtual : acumulador;
});

console.log(cidadeComMaisLetras);