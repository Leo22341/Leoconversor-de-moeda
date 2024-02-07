const convertButton = document.querySelector(".convert-button")
// Variável que guarda o botão

const currencySelect = document.querySelector(".currency-select")
// Variável que guarda o select onde estão as moedas.

convertButton.addEventListener("click", convertValues)
// código que pega os eventos quando clica no botão.


function convertValues() {
// Função responsável por gerar os eventos que vão acontecer quando clicar no botão.
    
const inputCurrencyValue = document.querySelector(".input-currency").value
// Variável que pega o valor do input.

    
const currencyValueToConvert = document.querySelector(".currency-value-to-convert") 
// Variável que guarda o paragrafo da moeda Real. 


   
const currencyValue = document.querySelector(".currency-value")
// Variável que guarda o paragrafo das outras moedas. 


// ------------------------//---------------------------------------
//  Variáveis que guardam o valor das moedas.
    const dolarToday = 5.2

    const euroToday = 6.2

    const libraToday = 6.9
// ------------------------//---------------------------------------

    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",                      
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    // nesse trecho temos a seguinte condição, se a moeda selecionada for Dólar, ele pega o valor do input e substitui o paragrafo para o simbolo do Dólar antes de fazer a conversão.
    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    // nesse trecho temos a seguinte condição, se a moeda selecionada for Euro, ele pega o valor do input e substitui o paragrafo para o simbolo do Euro antes de fazer a conversão.

    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    // nesse trecho temos a seguinte condição, se a moeda selecionada for Libra, ele pega o valor do input e substitui o paragrafo para o simbolo da Libra antes de fazer a conversão.
// -----------------------------------//---------------------------

//Nesse trecho é onde realiza a conversão, pegando o valor do input, já formatado para a moeda escolhida, multiplicando pelo o valor da moeda, e substituindo o parágrafo da moeda Real pelo resultado da conversão.

    if (currencySelect.value == "dolar") {
        currencyValueToConvert.innerHTML  = new Intl.NumberFormat("pt-BR", {
            style: "currency",                      
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday) 
    }
   
    if (currencySelect.value == "euro") {
        currencyValueToConvert.innerHTML  = new Intl.NumberFormat("pt-BR", {
            style: "currency",                      
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday) 
    }

    if (currencySelect.value == "libra") {
        currencyValueToConvert.innerHTML  = new Intl.NumberFormat("pt-BR", {
            style: "currency",                      
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday) 
    }
}
// -----------------------------------//---------------------------

currencySelect.addEventListener("change", changeCurrency)
// código que pega o evento quando seleciono uma moeda.

function changeCurrency() {
    const currencyDolar = document.getElementById("currency-dolar")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyDolar.innerHTML = "Dólar"
        currencyImg.src = "./assets/img/dollar.png"
    }

    if (currencySelect.value == "euro") {
        currencyDolar.innerHTML = "Euro"
        currencyImg.src = "./assets/img/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyDolar.innerHTML = "Libra"
        currencyImg.src = "./assets/img/libra.png"
    }

    convertValues()
    //  adicionei a função aqui para executar a conversão quando trocar o select também, ele vai trocar a moeda a imagem e vai converter sem a necessidade de clicar no botão de converter novamente.
}







