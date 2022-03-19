//Configurando o botão converter
function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  //Fazendo a conversão matemática
  var valorEmReal = valorEmDolarNumerico * 5.07;
  var valorEmEuro = valorEmDolarNumerico * 1.09;

  var elementoValorConvertidoEmReal = document.getElementById(
    "valorConvertidoEmReal"
  );
  var elementoValorConvertidoEmEuro = document.getElementById(
    "valorConvertidoEmEuro"
  );

  //Configurando oque vai aparacer junto com o resultado da conversão
  var valorConvertidoEmReal = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;
  document.getElementById("valorConvertidoEmEuro");
  var valorConvertidoEmEuro = "O resultade em euro é € " + valorEmEuro;
  elementoValorConvertidoEmEuro.innerHTML = valorConvertidoEmEuro;
}