const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    //aqui pega o valor do input.

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
    //aqui pega o parágrafo Valor em Real.

    const currencyValue = document.querySelector(".currency-value")
    // Aqui pega o parágrafo Valor das outras Moedas.

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
    // OBS. a função new Intl.NumberFormat serve para formatar o tipo de entrada que vai aparecer, nesse caso estou formatando o número para moeda Real.    
    //essa função troca o valor do parágrafo Real pelo valor digitado no input.
    
    const dolarToday = 5.2
    //Variável que define o valor do Dólar.

    const convertedValue = inputCurrencyValue / dolarToday
    //Variável que faz a conversão pega o valor digitado no input e divide pelo valor definido para o Dólar.

    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)
    //Aqui troca o texto do parágrafo outras moedas pelo resultado da conversão.

    // console.log(convertedValue).
}

convertButton.addEventListener("click",convertValues )

