let eurRate = 4.6768;
let usdRate = 4.3063;
let gbpRate = 5.6041;

let formElement = document.querySelector(".js-form");
let amountPlnElement = document.querySelector(".js-amountPln");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    switch (currencyElement.value) {
        case "EUR":
            result = amountPlnElement.value / eurRate;
            break;
        case "USD":
            result = amountPlnElement.value / usdRate;
            break;
        case "GBP":
            result = amountPlnElement.value / gbpRate;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currencyElement.value}`;
});

formElement.addEventListener("reset", (event) => {
    resultElement.innerText =`N/A`;
});