async function converter() {
  const valor = document.getElementById("valor").value;
  const moeda = document.getElementById("moeda").value;
  const resultado = document.getElementById("resultado");

  const nomesMoedas = {
    USD: "Dólares",
    EUR: "Euros",
    GBP: "Libras Esterlinas",
    JPY: "Ienes",
    ARS: "Pesos Argentinos",
    CAD: "Dólares Canadenses"
  };

  if (!valor) {
    resultado.innerHTML = "Digite um valor!";
    return;
  }

  try {
    const resposta = await fetch("https://api.exchangerate-api.com/v4/latest/BRL");
    const dados = await resposta.json();

    const taxa = dados.rates[moeda];
    const convertido = (valor * taxa).toFixed(2);

    resultado.innerHTML = `
      ${valor} BRL = <strong>${convertido} ${nomesMoedas[moeda]}</strong>
    `;
  } catch (erro) {
    resultado.innerHTML = "Erro ao converter moeda.";
  }
}