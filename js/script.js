{
    const calculateResult = (amountPln, currency) => {
        const eurRate = 4.6768;
        const usdRate = 4.3063;
        const gbpRate = 5.6041;

        switch (currency) {
            case "EUR":
                return amountPln / eurRate;
            case "USD":
                return amountPln / usdRate;
            case "GBP":
                return amountPln / gbpRate;
        }
    };

    const updateResultText = (amountPln, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amountPln.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountPlnElement = document.querySelector(".js-amountPln");
        const currencyElement = document.querySelector(".js-currency");

        const amountPln = +amountPlnElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amountPln, currency);

        updateResultText(amountPln, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

        formElement.addEventListener("reset", (event) => {
            resultElement.innerText = `N/A`;
        });
    };

    init();
}