

const convertButton = document.querySelector(".convertButton");


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".toConvert");
    const currencyValueConverted = document.querySelector(".converted");

    const dolarToday = 5.2;

    const convertedValue = inputCurrencyValue / dolarToday;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
         currency: "BRL" 
        }).format(inputCurrencyValue);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency", 
         currency: "USD" 
        }).format(convertedValue);

    console.log(convertedValue);
}

convertButton.addEventListener("click", convertValues);