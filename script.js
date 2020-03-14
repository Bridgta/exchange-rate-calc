const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const currencyEl_two = document.getElementById("currency-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

//fetch ex rates and update dom el
function calaculate() {
    console.log("ran");
}

//event listeners

currencyEl_one.addEventListener("change", calaculate);
amountEl_one.addEventListener("input", calaculate);
currencyEl_two.addEventListener("change", calaculate);
amountEl_one.addEventListener("input", calaculate);

calaculate();
